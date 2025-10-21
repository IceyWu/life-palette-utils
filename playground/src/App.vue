<script setup lang="ts">
import FileSelectDemo from "./components/FileSelectDemo.vue";
</script>

<template>
  <div class="app">
    <header>
      <h1>@life-palette/utils</h1>
      <p class="subtitle">File Utilities Demo</p>
    </header>
    <main>
      <FileSelectDemo />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  padding: 40px 20px;
}

header {
  max-width: 800px;
  margin: 0 auto 40px;
}

h1 {
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 14px;
  color: #666;
}

main {
  max-width: 800px;
  margin: 0 auto;
}
</style>
