# 快速开始

## 安装

使用你喜欢的包管理器安装：

::: code-group

```sh [pnpm]
pnpm install @life-palette/utils
```

```sh [npm]
npm install @life-palette/utils
```

```sh [yarn]
yarn add @life-palette/utils
```

:::

## 基础用法

### 文件选择

```typescript
import { selectFile } from "@life-palette/utils";

// 选择单张图片
const files = await selectFile({
  accept: "image/*",
  multiple: false,
});

// 选择多个文件
const files = await selectFile({
  accept: ".pdf,.doc,.docx",
  multiple: true,
  onChange: (files) => {
    console.log("已选择:", files);
  },
});
```

### 文件读取

```typescript
import { selectFile, readFile } from "@life-palette/utils";

const files = await selectFile({ accept: "image/*" });
if (files && files[0]) {
  // 读取为 Data URL（用于图片预览）
  const dataUrl = await readFile(files[0], "dataURL");

  // 读取为文本
  const text = await readFile(files[0], "text");

  // 读取为 ArrayBuffer
  const buffer = await readFile(files[0], "arrayBuffer");
}
```

### 文件处理

```typescript
import { fileParse, isIphoneImg } from "@life-palette/utils";

// 处理文件信息
const fileInfo = fileParse(
  {
    url: "https://example.com/image.jpg",
    type: "image/jpeg",
  },
  {
    format: "jpg",
    resize: 400,
  },
);

// 检查是否为 iPhone 图片
const isFromIphone = isIphoneImg({
  exif: '{"Make":{"value":"Apple"}}',
});
```

## 在框架中使用

### Vue 3

```vue
<template>
  <button @click="handleSelectFile">选择文件</button>
</template>

<script setup lang="ts">
import { selectFile, readFile } from "@life-palette/utils";

const handleSelectFile = async () => {
  const files = await selectFile({
    accept: "image/*",
    multiple: true,
  });

  if (files) {
    for (const file of files) {
      const preview = await readFile(file, "dataURL");
      console.log("预览:", preview);
    }
  }
};
</script>
```

### React

```tsx
import { selectFile, readFile } from "@life-palette/utils";

function FileUploader() {
  const handleClick = async () => {
    const files = await selectFile({
      accept: "image/*",
      multiple: false,
    });

    if (files && files[0]) {
      const content = await readFile(files[0], "dataURL");
      // 处理文件...
    }
  };

  return <button onClick={handleClick}>选择文件</button>;
}
```

## 下一步

查看 [API 文档](/guide/api) 了解更多功能和选项。
