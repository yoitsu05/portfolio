<template>
  <v-app>
    <core-toolbar />
    <core-drawer />
    <core-view />
    <core-footer />
  </v-app>
</template>

<script>
import Drawer from '@/components/core/Drawer';
import Footer from '@/components/core/Footer';
import Toolbar from '@/components/core/Toolbar';
import View from '@/components/core/View';
export default {
  name: 'App',
  components: {
    CoreDrawer: Drawer,
    CoreFooter: Footer,
    CoreToolbar: Toolbar,
    CoreView: View,
  },
  data() {
    return {};
  },
  watch: {
    $route(to, from) {
      this.createPageTitle(to);
      if (window.tracker) window.tracker.view();
    },
  },
  methods: {
    createPageTitle: function (to) {
      if (to.meta && to.meta.title) {
        document.title = to.meta.title;
      } else {
        document.title = 'Portfolio';
      }
    },
  },
};
</script>
