#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const rootDir = resolve(process.cwd());
const changelogPath = resolve(rootDir, "CHANGELOG.md");
const docsChangelogPath = resolve(rootDir, "docs/changelog.md");

try {
  const changelog = readFileSync(changelogPath, "utf8");
  writeFileSync(docsChangelogPath, changelog);
  console.log("✅ Changelog synced to docs successfully!");
} catch {
  console.error("❌ Failed to sync changelog");
  process.exit(1);
}
