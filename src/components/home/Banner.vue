<template>
  <base-card light>
    <v-img
      class="grey lighten-2"
      height="600"
      width="100%"
      :src="require('@/assets/banner.jpg')"
    >
      <v-layout
        fill-height
        align-center
        pa-3
      >
        <v-flex
          xs7
          md7
          offset-md5
          offset-xs5
        >
          <h1 class="display-3">
            BUILD A VALUE
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4">
            my portfolio
          </div>
        </v-flex>
      </v-layout>
    </v-img>
  </base-card>
</template>
