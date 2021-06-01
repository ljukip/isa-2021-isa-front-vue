import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

axios.defaults.baseURL = "http://localhost:8080/";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    pharmacies: [
      { id: "1", name: "apoteka 1", location: "uzice" },
      { id: "2", name: "apoteka 2", location: "beaograd" },
      { id: "3", name: "apoteka 3", location: "cacak" },
      { id: "4", name: "apoteka 4", location: "kragujevac" },
    ],
    medications: [
      { id: "1", name: "medication 1", location: "uzice" },
      { id: "2", name: "medication 2", location: "beaograd" },
      { id: "3", name: "medication 3", location: "cacak" },
      { id: "4", name: "medication 4", location: "kragujevac" },
    ],
    users: [
      {
        userID: 1,
        name: "user1",
        email: "user@gmai.com",
        adress: "adress 1",
        city: "city",
        country: "country",
        number: "545445",
        password: "12ss3",
        scheduledAppointments: ["31.5.2021"],
        appointmentsListDermatologist: [
          { date: "31.5.2021", doctor: "Dejan Markovic" },
        ],
        appointmentsListPharmaciest: [
          { date: "31.5.2021", doctor: "Jovan Jovanovic" },
        ],
        pharmaciesSubscribedList: ["lek 1", "lek 2", "lek 3"],
      },
      {
        userID: 2,
        name: "dejocar",
        email: "dejocar@gmai.com",
        adress: "adress 1",
        city: "city",
        country: "country",
        number: "2312",
        password: "123",
        scheduledAppointments: ["11.5.2021"],
        appointmentsListDermatologist: [
          { date: "11.5.2021", doctor: "Dejan Markovic" },
        ],
        appointmentsListPharmaciest: [
          { date: "11.5.2021", doctor: "Jovan Jovanovic" },
        ],
        pharmaciesSubscribedList: ["lek 4", "lek 5", "lek 6"],
      },
    ],
    dermatologist: [{ id: "1", name: "Dejo doktor dermatologije" }],
    pharmaciest: [{ id: "2", name: "Dejo doktor farmacije" }],
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

    getSingleUser: (state) => (id) => {
      console.log(state.users.find((item) => item.userID === id));
      return state.users.find((item) => item.userID === id);
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
    addMedicationToList(state, payload) {
      const medication = payload;
      console.log(medication);
      const {
        medication: { id, name, location },
      } = medication;
      console.log(id, name, location);
      let medications = state.medications;
      medications.push(medication.medication);
    },
  },

  actions: {
    loginUser({ getters }, payload) {
      const { username } = payload;
      let users = getters.getUsers;
      // check if user is valid
      const checkUsers = (userName) =>
        users.find((user) => {
          if (user.name === userName) {
            const { userID } = user;

            router.push({
              path: `/registederuser/${userID}`,
            });
          }
          return;
        });

      // check if user is admin
      if (username === "vue-admin") {
        router.push("/pharmacyadmin");
      } else {
        checkUsers(username);
      }
    },
  },
});
