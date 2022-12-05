<template>
  <v-container class="fill-height">
    <v-row>
      <v-col class="text-center ma-5">
        <h1>Template for Nuxt3 with Vue3 and Vuetify3</h1>
      </v-col>
    </v-row>
    <v-row class="fill-height" align="center">
      <v-col class="text-center" v-for="post in state.posts" :key="post.id">
        <the-post :post="post" />
      </v-col>
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
