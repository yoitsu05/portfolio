<template>
  <div id="home">
    <banner />
    <subscribe />
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      Banner: () => import('@/components/home/Banner'),
      Subscribe: () => import('@/components/home/Subscribe')
    }
  }
</script>
