import router from "../../router";
import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource);

export default {
  namespaced: true,
  state: {
    profile: null,
    friends: null
  },
  getters: {
      getProfile(state){
          return state.profile
      },
      getFriends(state){
          return state.friends
      }
  },
  mutations: {
      setProfile(state,data){
          state.profile = data
      },
      setFriends(state, data){
          state.friends = data
      }
  },
  actions: {
    getToken({ commit }) {
      let client_id = process.env.VUE_APP_client_id;
      let redirect_uri = "https://vue-oauth-vk.herokuapp.com/success/";
      let URI = `https://oauth.vk.com/authorize?client_id=${client_id}&display=page&redirect_uri=${redirect_uri}&scope=friends&response_type=token&v=5.103`;
      window.location = URI;
    },
    apiCall({ commit }, sameURI) {
      let myToken = localStorage.getItem("access_token");
      let expireDate = localStorage.getItem("expired_date");

      if (!!myToken && !!expireDate && expireDate > Date.now()) {
        let API_URI_UserInfo = `https://api.vk.com/method/users.get?fields=photo_max_orig,domain&access_token=${myToken}&v=5.103`;
        let API_URI_friends = `https://api.vk.com/method/friends.get?fields=photo_max_orig,domain&count=5&access_token=${myToken}&v=5.103`;

        Vue.http
          .jsonp(API_URI_UserInfo)
          .then(res => {
            if (!!!res.body.error) {
              commit('setProfile', res.body.response[0])

              Vue.http
                .jsonp(API_URI_friends)
                .then(res => {
                    commit('setFriends', res.body.response.items)
                  setTimeout(() => {
                      if(!sameURI){
                          router.push("/profile");
                      }
                  }, 500);
                })
                .catch(err => console.log(err));
            } else {
              router.push("/login");
            }
          })
          .catch(err => console.log(err));
      } else {
        router.push("/login");
      }
    }
  }
};
