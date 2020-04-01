<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" md="6" sm="8">
        <v-card elevation="24">
          <v-card-title class="justify-center primary--text">
            Please Authorize
          </v-card-title>
          <v-card-actions>
            <v-btn @click="onAuth" block color="primary">
              authorization
              <v-icon right>
                fab fa-vk
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {mapActions} from 'vuex'

export default {
methods: {
    ...mapActions("TheAuth", {
      getToken: 'getToken'
    }),
    onAuth(){
      this.getToken()
    }
  },
}
</script>