# @life-palette/utils

[![npm version](https://img.shields.io/npm/v/@life-palette/utils?color=yellow)](https://npmjs.com/package/@life-palette/utils)
[![npm downloads](https://img.shields.io/npm/dm/@life-palette/utils?color=yellow)](https://npm.chart.dev/@life-palette/utils)

一个实用的工具库，提供文件处理、文件选择等常用功能。

## 功能特性

- 📁 **文件选择** - 通过编程方式触发文件选择对话框
- 📄 **文件读取** - 支持多种文件读取方式
- 🖼️ **图片处理** - 支持 iPhone/HEIC 图片格式转换
- 🎯 **TypeScript** - 完整的类型定义支持

## 安装

```bash
npm install @life-palette/utils
# or
pnpm add @life-palette/utils
# or
yarn add @life-palette/utils
```

## 快速开始

```typescript
import { selectFile, readFile } from "@life-palette/utils";

// 选择文件
const files = await selectFile({
  accept: "image/*",
  multiple: true,
});

// 读取文件
if (files && files[0]) {
  const content = await readFile(files[0], "dataURL");
  console.log(content);
}
```

## 文档

📖 **完整文档**: http://localhost:5174/guide/api.html

- [快速开始](http://localhost:5174/guide/getting-started.html)
- [API 文档](http://localhost:5174/guide/api.html)
- [发版说明](http://localhost:5174/guide/release.html)
- [Changelog](http://localhost:5174/changelog.html)

## 在线演示

运行 playground 查看交互式演示：

```bash
pnpm play
```

访问 http://localhost:5173 查看效果。

## Monorepo 结构

本项目采用 monorepo 架构，使用 pnpm workspace 管理：

```
life-palette-utils/
├── packages/
│   ├── utils/              # 核心工具库包
│   └── test-package/       # 测试包
├── playground/             # Vite + Vue3 演示应用
└── docs/                   # VitePress 文档站点
```

## 开发

```bash
# 安装依赖
pnpm install

# 构建所有包
pnpm build

# 运行 playground
pnpm play

# 运行文档站点
pnpm docs:dev

# 运行测试
pnpm test

# 代码检查
pnpm lint
```

## 发版

```bash
# 发布新版本（自动构建、生成 changelog、发布到 npm）
pnpm release
```

查看 [RELEASE.md](./RELEASE.md) 了解详细的发版流程。

## License

<!-- automd:contributors license=MIT -->

Published under the [MIT](https://github.com/IceyWu/life-palette-utils/blob/main/LICENSE) license.
Made by [community](https://github.com/IceyWu/life-palette-utils/graphs/contributors) 💛
<br><br>
<a href="https://github.com/IceyWu/life-palette-utils/graphs/contributors">
<img src="https://contrib.rocks/image?repo=IceyWu/life-palette-utils" />
</a>
