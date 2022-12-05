<script setup lang="ts">
defineProps(["post"]);
</script>

<template>
  <v-card>
    <h2>{{ post.title }}</h2>
    <p>{{ post.id }}</p>
  </v-card>
</template>
