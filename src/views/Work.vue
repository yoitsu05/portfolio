<template>
  <div id="work">
    <work-time-line />
  </div>
</template>

<script>
  export default {
    components: {
      WorkTimeLine: () => import('@/components/WorkTimeLine')
    }
  }
</script>
