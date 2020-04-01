<template>
  <v-container>
    <v-row class="justify-center">
      <v-col class="display-1 text-center primary--text" cols="12">
        <p class="primary--text display-1 text-center">
          Successfully Authorized
        </p>
        <div class="text-center">
          <v-icon large color="primary">
            fas fa-check
          </v-icon>
        </div>
      </v-col>
      <v-col cols="12" sm="8" md="6">
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
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("TheAuth", {
      apiCall: "apiCall"
    }),
    getQuery() {
        if(!!this.$route.hash){
      let hashArray = this.$route.hash.substr(1).split("&");
      let uri_data = {};
      for (let i = 0; i < hashArray.length; i++) {
        let subArray = hashArray[i].split("=");
        uri_data[subArray[0]] = subArray[1];
      }
      localStorage.setItem("access_token", uri_data.access_token);
      let expired_date = Date.now() + uri_data.expires_in * 1000;
      localStorage.setItem("expired_date", expired_date);
      this.apiCall();
        }else{
            this.$router.push('/login')
        }
    }
  },
  mounted() {
    this.getQuery();
  }
};
</script>
<style>
.v-card__title {
  word-break: normal !important;
}
</style>
