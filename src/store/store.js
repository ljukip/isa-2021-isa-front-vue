import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
import jwt_decode from "jwt-decode";

//Podesiti URL backend-a
axios.defaults.baseURL = "http://localhost:8069/";


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    infoMsg: '',
    userStatus: '',
    JWT: '',
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
        fname: "user1",
        lname: "lname",
        email: "user@gmai.com",
        adress: "adress 1",
        city: "city",
        country: "country",
        number: "545445",
        password: "12ss3",
        scheduledAppointments: ["2021-06-10"],
        appointmentsListDermatologist: [
          { date: "2021-06-10", doctor: "Dejan Markovic" },
        ],
        appointmentsListPharmaciest: [
          { date: "2021-06-10", doctor: "Jovan Jovanovic" },
        ],
        pharmaciesSubscribedList: ["lek 1", "lek 2", "lek 3"],
      }
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

    getInfoMsg(state) {
      return state.infoMsg;
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
      //console.log(user.password);
      //let userName =payload.email.split('@');
      const regUser = {
        "username": user.email,
        "password": user.password,
        "firstname": user.fname,
        "lastname": user.lname,
        "email": user.email,
        "address": user.address,
        "city": user.city,
        "country": user.country,
        "phone": user.number,
        "role": "PATIENT"
      }
      //let users = state.users;
      //console.log(users);
      axios.post('/auth/signup', regUser)
        .then(function (response) {
          if (response.status == '201') {
            state.infoMsg = "Uspesno ste se registrovali, proveri te mail da bi ste ativirali nalog.";
            router.push('/');
          }
        });
    },
    loginUser(state, payload) {
      const loginInfo = payload;
      axios.post('/auth/login', loginInfo)
        .then(function (response) {
          if (response.status == '200') {
            state.JWT = response.data.accessToken;
            var decode = jwt_decode(response.data.accessToken)
            state.userStatus = decode.role;
            axios.get('/user/username/' + decode.sub)
              .then(function (response2) {
                state.users[0].userID = response2.data.id;
                state.users[0].username = response2.data.username;
                state.users[0].fname = response2.data.firstName;
                state.users[0].lname = response2.data.lastName;
                state.users[0].email = response2.data.email;
                state.users[0].adress = response2.data.address;
                state.users[0].city = response2.data.city;
                state.users[0].country = response2.data.country;
                state.users[0].number = response2.data.phone;
                state.users[0].appointmentsListPharmaciest = response2.data.pharmacy;
                state.users[0].pharmaciesSubscribedList = response2.data.prescriptions;

                if (state.userStatus == 'PATIENT') {
                  router.push('/registederuser/' + response2.data.id)
                } else {
                  router.push('/pharmacyadmin')
                }
              });
          }

        }).catch(error => alert('Uneliste neispravnu lozinku ili korisnicko ime.' + error))

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
    addNewAdmin(state, payload) {
      const user = payload;

      const regAdmin = {
        "username": user.email,
        "password": user.password,
        "firstname": user.fname,
        "lastname": user.lname,
        "email": user.email,
        "work_role": "PHADMIN",
        'dedicated_pharmacy_id': user.pharmacyID
      }
      //console.log(regAdmin);
      axios.post('/api/admin/add', regAdmin)
        .then(function (response) {
          if (response.status == '201') {
            state.infoMsg = "Uspesno dodat admin";

          }
        })
    },
  },

  actions: {
    //{ getters },
    // loginUser(payload) {
    //   const { username } = payload;
    //   const loginInfo = payload;
    //   console.log(username);
    //   axios.post('/auth/login', loginInfo)
    //   .then(function(response){
    //     // if(response.status == '200') {
    //     //  console.log(response.accessToken);
    //     //  // router.push('/');
    //     //  }
    //     var decode = jwt_decode(response.accessToken)
    //     console.log(decode);

    //   });
    //let users = getters.getUsers;
    // check if user is valid
    // const checkUsers = (userName) =>
    //   users.find((user) => {
    //     if (user.name === userName) {
    //       const { userID } = user;

    //       router.push({
    //         path: `/registederuser/${userID}`,
    //       });
    //     }
    //     return;
    //   });

    // // check if user is admin
    // if (username === "vue-admin") {
    //   router.push("/pharmacyadmin");
    // } else {
    //   checkUsers(username);
    // }
    //   },
  },
});
