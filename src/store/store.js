import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

axios.defaults.baseURL = "http://localhost:8080/";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    pharmacies: [
      {
        id: "1",
        doctors: "dermatolog 1",
        medicationsList: ["besedin", "brufen", "probiotik"],
        name: "apoteka 1",
        location: "uzice",
      },
      {
        id: "2",
        doctors: "dermatolog 2",
        medicationsList: ["besedin", "brufen", "probiotik forte"],
        name: "apoteka 2",
        location: "beaograd",
      },
      {
        id: "3",
        doctors: "dermatolog 3",
        medicationsList: ["besedin", "brufen", "probiotik neforte"],
        name: "apoteka 3",
        location: "cacak",
      },
      {
        id: "4",
        doctors: "farmaceut 4",
        medicationsList: ["besedin", "brufen", "probiotik neforte"],
        name: "apoteka 4",
        location: "kragujevac",
      },
    ],
    medications: [
      {
        id: "1553423423",
        name: "besedin 5mg",
        location: "uzice",
        type: "antidepresiv",
        contains: "2mg bromazepam",
        contraindications: "suicidne misli",
        dailyDoes: "2 x 5mg dnevno",
        substitue: "1mg ksalol",
      },
      {
        id: "2121512323",
        name: "brufen 200mg",
        location: "beaograd",
        type: "anelgetik",
        contains: "200mg ibruprofen",
        contraindications: "mucnina",
        dailyDoes: "3 x 400mg dnevno",
        substitue: "1mg panadol",
      },
      {
        id: "3517976564",
        name: "diklofen 50mg",
        location: "cacak",
        type: "anelgetik",
        contains: "10mg diklofen",
        contraindications: "malaksalost",
        dailyDoes: "2 x 2  dnevno",
        substitue: "1mg diklofenak duo",
      },
      {
        id: "4232215512",
        name: "probiotik forte",
        location: "kragujevac",
        type: "probiotik",
        contains: "1mg probiotik + bulardi",
        contraindications: "",
        dailyDoes: "1 x dnevno",
        substitue: "1mg linex",
      },
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

    singleMedication: "",
  },

  getters: {
    getUsers(state) {
      return state.users;
    },

    getMedicatons(state) {
      return state.medications;
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

    addPharmacyToList(state, payload) {
      const pharmacy = payload;
      console.log(pharmacy);
      const {
        pharmacy: { id, name, location },
      } = pharmacy;
      console.log(id, name, location);
      let pharmacies = state.pharmacies;
      pharmacies.push(pharmacy.pharmacy);
    },

    addPharmaciestToList(state, payload) {
      const phamaricest = payload;
      console.log(phamaricest);
      const {
        phamaricest: { id, name, location },
      } = phamaricest;
      console.log(id, name, location);
      let pharmaciest = state.pharmaciest;
      pharmaciest.push(phamaricest.phamaricest);
    },

    updateMedication(state, payload) {
      const { id } = payload;
      let medication = state.medications.filter((item) => {
        return item.id === id;
      });
      console.log(medication);
      state.singleMedication = medication;
    },

    removeMedicationFromArr(state, payload) {
      const { id } = payload;
      const newMeds = state.medications.filter((item) => {
        return item.id !== id;
      });
      state.medications = newMeds;
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
