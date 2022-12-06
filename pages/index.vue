<template>
  <v-container>
    <v-row v-for="(post, index) in state.posts" :key="index">
      <the-post :post="post" :index="index + 1" />
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import Post from "~~/entities/Post";

const { $postsGateway } = useNuxtApp();
const state = reactive({
  posts: [] as Post[],
});

state.posts = await $postsGateway.getPosts();
</script>
