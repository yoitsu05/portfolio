<template>
  <v-container
    grid-list-xl
  >
    <v-layout row>
      <v-flex xs12>
        <base-subheading>Reading Books</base-subheading>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex xs12>
        <slot />
      </v-flex>

      <reading-card
        v-for="(reading, i) in paginatedReading"
        :key="reading.title"
        :size="layout[i]"
        :value="reading"
      />
    </v-layout>

    <v-layout align-center>
      <v-flex xs3>
        <base-btn
          v-if="page !== 1"
          class="ml-0"
          title="Previous page"
          square
          @click="page--"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </base-btn>
      </v-flex>

      <v-flex
        xs6
        text-xs-center
        subheading
      >
        PAGE {{ page }} OF {{ pages }}
      </v-flex>

      <v-flex
        xs3
        text-xs-right
      >
        <base-btn
          v-if="pages > 1 && page < pages"
          class="mr-0"
          title="Next page"
          square
          @click="page++"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </base-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'

  export default {
    components: {
      ReadingCard: () => import('@/components/ReadingCard')
    },

    data: () => ({
      layout: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      page: 1
    }),

    computed: {
      ...mapState(['reading']),
      pages () {
        return Math.ceil(this.reading.length / 12)
      },
      paginatedReading () {
        const start = (this.page - 1) * 12
        const stop = this.page * 12

        return this.reading.slice(start, stop)
      }
    },

    watch: {
      page () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>
