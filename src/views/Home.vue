<template>
  <v-container>

    <v-row class="justify-center">
      <v-col class="display-1 text-center primary--text" cols="12">
        Welcome, please wait...
      </v-col>
      <v-col   cols="12" sm="8" md="6">
        <v-progress-linear
          color="primary"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions} from "vuex";

export default {
  methods: {
    ...mapActions("TheAuth", {
      apiCall: "apiCall",
    }),
  },
  
  created() {
    setTimeout(()=>{
      this.apiCall()
    }, 1000)
  },
};
</script>
<style>
.v-card__title {
  word-break: normal !important;
}
</style>
