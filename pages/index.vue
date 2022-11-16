<template>
  <v-container class="fill-height">
    <v-row>
      <v-col class="text-center ma-5">
        <h1>Template for Nuxt3 with Vue3 and Vuetify3</h1>
      </v-col>
    </v-row>
    <v-row class="fill-height" align="center">
      <v-col class="text-center" v-for="n in 3" :key="n">
        <v-card style="height: 50vh">
          <p>Some Content</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
