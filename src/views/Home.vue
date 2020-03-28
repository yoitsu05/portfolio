<template>
  <div id="home">
    <banner />
    <subscribe />
  </div>
</template>

<script>
import Banner from '@/components/home/Banner'
import Subscribe from '@/components/home/Subscribe'
export default {
  name: 'Home',

  components: {
    Banner,
    Subscribe
  },
};
</script>
