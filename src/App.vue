<template>
  <v-app>
    <BaseNavBar />
    <router-view/>
  </v-app>
</template>

<script>
import BaseNavBar from '@/components/BaseNavBar.vue'

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
      BaseNavBar
    },
};
</script>
