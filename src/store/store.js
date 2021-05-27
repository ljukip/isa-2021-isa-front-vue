import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

axios.defaults.baseURL = "http://localhost:8080/";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    pharmacies: [
      { name: "apoteka 1", location: "uzice", number: "12123123" },
      { name: "apoteka 2", location: "beaograd", number: "5566" },
      { name: "apoteka 3", location: "cacak", number: "78768" },
      { name: "apoteka 4", location: "kragujevac", number: "897789" },
    ],
    medications: [
      { name: "medication 1", location: "uzice", code: "12123123" },
      { name: "medication 2", location: "beaograd", code: "5566" },
      { name: "medication 3", location: "cacak", code: "78768" },
      { name: "medication 4", location: "kragujevac", code: "897789" },
    ],
    users: [
      {
        name: "user1",
        email: "user@gmai.com",
        adress: "adress 1",
        city: "city",
        country: "country",
        number: "545445",
        password: "12ss3",
      },
      {
        name: "dejocar",
        email: "dejocar@gmai.com",
        adress: "adress 1",
        city: "city",
        country: "country",
        number: "2312",
        password: "123",
      },
    ],
    pharmacyAdmin: [
      {
        username: "vue-admin",
        password: "vue321",
      },
    ],
  },

  getters: {
    getUsers(state) {
      return state.users;
    },
  },

  mutations: {
    signInUser(state, payload) {
      const user = payload;
      console.log(user);
      let users = state.users;
      users.push(user);
      console.log(users);
    },
  },

  actions: {
    loginUser({ getters }, payload) {
      const { username, password } = payload;
      let users = getters.getUsers;

      //check if user is valid
      const checkUsers = (userName) =>
        users.find((user) => {
          if (user.name === userName) {
            router.push("/registederuser");
          }
          return;
        });

      // check if user is admin
      if (username === "vue-admin") {
        router.push("/pharmacyadmin");
      } else {
        // check if user is valid
        console.log("****************");
        console.log(checkUsers(username));
        console.log("****************");
      }

      const newUser = {
        username,
        password,
      };

      console.log(newUser);
    },
  },
});
