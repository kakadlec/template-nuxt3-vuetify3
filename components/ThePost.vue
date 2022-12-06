<script setup lang="ts">
defineProps(["post", "index"]);
</script>

<template>
  <v-container>
    <v-row>
      <p class="c-p">
        {{ index }}. <v-btn variant="plain" :rounded="0">{{ post.title }}</v-btn>
      </p>
    </v-row>
    <v-row>
      <v-col>
        <p>{{ post.tabcoins }} tabcoins</p>
      </v-col>
      <v-col>
        <p>{{ post.children_deep_count }} comentários</p>
      </v-col>
      <v-col>
        <p>{{ post.owner_username }}</p>
      </v-col>
      <v-col>
        <p>{{ post.published_at }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.c-p {
  font-weight: 600;
  font-size: 0.9rem;
}
</style>
