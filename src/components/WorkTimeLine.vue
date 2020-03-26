<template>
  <v-container>
    <v-timeline>
      <v-timeline-item
        v-for="(work, i) in works"
        :key="i"
        :color="work.color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${work.color}--text`"
            v-text="work.year"
          />
        </template>

        <v-card
          :color="work.color"
          dark
        >
          <v-card-title class="title">
            {{ work.title }}
          </v-card-title>
          <v-card-text class="white text--primary">
            <p>
              {{ work.description }}
            </p>
            <h4>
              - Technology -
            </h4>
            <p>
              {{ work.technology }}
            </P>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
  import {
    mapState
  } from 'vuex'

  export default {
    computed: {
      ...mapState(['works'])
    }
  }
</script>
