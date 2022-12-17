<template>
  <div class="page-wrapper">
    <AdminNavigation />
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  .content-wrapper {
    @apply min-h-[calc(100vh-5rem)];
  }
}
</style>
