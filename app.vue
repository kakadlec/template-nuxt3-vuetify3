<template>
  <v-app>
    <TheHeader />
    <v-main class="main-bg">
      <NuxtPage />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<style>
.main-bg {
  background: rgb(245, 228, 245);
  background: linear-gradient(
    0deg,
    rgba(245, 228, 245, 1) 0%,
    rgba(255, 255, 255, 1) 70%
  );
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
