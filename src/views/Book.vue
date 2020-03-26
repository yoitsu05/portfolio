<template>
  <div id="book">
    <reading />
  </div>
</template>

<script>
  export default {
    components: {
      Reading: () => import('@/components/Reading')
    }
  }
</script>
