#!/usr/bin/env node
import { execSync } from "node:child_process";

console.log("🔍 Running pre-release checks...\n");

try {
  // 检查是否有未提交的更改
  console.log("1️⃣ Checking for uncommitted changes...");
  const status = execSync("git status --porcelain", { encoding: "utf8" });
  if (status) {
    console.error(
      "❌ You have uncommitted changes. Please commit or stash them first.",
    );
    process.exit(1);
  }
  console.log("✅ No uncommitted changes\n");

  // 运行 lint
  console.log("2️⃣ Running lint...");
  execSync("pnpm lint", { stdio: "inherit" });
  console.log("✅ Lint passed\n");

  // 运行测试
  console.log("3️⃣ Running tests...");
  execSync("pnpm test", { stdio: "inherit" });
  console.log("✅ Tests passed\n");

  // 构建
  console.log("4️⃣ Building packages...");
  execSync("pnpm build", { stdio: "inherit" });
  console.log("✅ Build successful\n");

  console.log("✨ All pre-release checks passed! Ready to release.");
} catch {
  console.error("\n❌ Pre-release checks failed!");
  process.exit(1);
}
