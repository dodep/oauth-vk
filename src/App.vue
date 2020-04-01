<template>
  <v-app>
    <TheNavbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <TheFooter/>
  </v-app>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import TheFooter from './components/TheFooter'

export default {
  name: 'App',

  components: {
    TheNavbar,
    TheFooter
  },
  
};
</script>
<style>

</style>
