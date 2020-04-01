<template>
  <v-container>
  <v-row v-if="!(!!this.myProfile) || !(!!this.myFriends)" class="justify-center ">
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
  <div v-else>

    <v-sheet tag="div" class="row ml-0 mr-0 toClick"  color="primary" elevation="6" width="100%" @click="onFriend(myProfile.domain)">
      <v-col cols="12" sm="4">
        <v-avatar class="profile"  size="164" tile>
          <v-img :src="myProfile.photo_max_orig"></v-img>
        </v-avatar>
      </v-col>

      <v-col cols="12" sm="8">
        <p class="mb-2 body-1">
          <span class="title white--text">
            {{ myProfile.first_name }} {{ myProfile.last_name }}
          </span>
        </p>
      </v-col>
    </v-sheet>
    <v-row class="justify-center">
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left title">Friends:</th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="friend in myFriends" :key="friend.id" @click="onFriend(friend.domain)" class="toClick">
                <td>
                  <v-avatar>
                    <img :src="friend.photo_max_orig" alt="friend" />
                  </v-avatar>
                </td>
                <td>{{ friend.first_name }} {{ friend.last_name }}</td>
              </tr>
              <tr></tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("TheAuth", {
      myProfile: "getProfile",
      myFriends: "getFriends"
    })
  },
  mounted() {
    this.checkData();
  },
  methods: {
    ...mapActions("TheAuth", {
      apiCall: "apiCall"
    }),
    onFriend(domain){
         window.location = `https://vk.com/${domain}`;
    },
    checkData() {
      if (!!!this.myProfile) {
          if(this.$route.name === 'profile'){
            this.apiCall(false)
          }else{
            this.apiCall(true);
          }
      }
    }
  }
};
</script>
<style>
.v-card__title {
  word-break: normal !important;
}
.toClick{
    cursor: pointer;
}
</style>
