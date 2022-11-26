<template>
  <v-container class="fill-height">
    <v-row>
      <v-col class="text-center ma-5">
        <h1>Template for Nuxt3 with Vue3 and Vuetify3</h1>
      </v-col>
    </v-row>
    <v-row class="fill-height" align="center">
      <v-col class="text-center" v-for="post in posts" :key="post.id">
        <v-card>
          <h2>{{ post.title }}</h2>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const posts = await $fetch("https://www.tabnews.com.br/api/v1/contents/kakadlec");
</script>
