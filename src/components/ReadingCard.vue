<template>
  <v-flex
    xs6
    :class="classes"
  >
    <base-card
      height="350"
      color="grey lighten-1"
      dark
      :href="value.ref"
      target="_blank"
    >
      <v-img
        :src="require(`@/assets/reading/${value.hero}`)"
        height="100%"
        gradient="rgba(0, 0, 0, .8), rgba(0, 0, 0, .5)"
      >
        <v-layout
          fill-height
          wrap
          text-xs-right
          ma-0
        >
          <v-flex xs12>
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop=""
            >
              {{ value.category }}
            </v-chip>
            <h3 class="title font-weight-bold mb-2">
              {{ value.title }}
            </h3>
            <div class="caption">
              {{ value.author }}
            </div>
          </v-flex>
        </v-layout>
      </v-img>
    </base-card>
  </v-flex>
</template>

<script>
  export default {
    props: {
      size: {
        type: Number,
        required: true
      },
      value: {
        type: Object,
        default: () => ({})
      }
    },

    computed: {
      classes () {
        return {
          'md6': this.size === 2,
          'md4': this.size === 3,
          'md3': this.size === 4
        }
      }
    }
  }
</script>

<style>
.v-image__image {
  transition: .3s linear;
}
</style>
