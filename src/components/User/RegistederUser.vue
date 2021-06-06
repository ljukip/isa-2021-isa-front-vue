<template>
  <div class="patient container flex-column">
    <h1>Patient profile</h1>
    <div class="section flex-row col-12 d-flex">
      <div class="section-1 col-md-4">
        <div><img class="img-fluid d-block" src="../../assets/male.jpg" /></div>
        <div>
          <i class="fas fa fa-id-card"></i><i>Patient ID :</i>
          <div
            v-if="editBool"
            contenteditable="true"
            style="border-style: outset"
          >
            {{ ID }}
          </div>
          <div v-if="!editBool">{{ ID }}</div>
        </div>
        <div>
          <i class="fas fa fa-envelope"></i><i>Email:</i>
          <div
            v-if="editBool"
            contenteditable="true"
            style="border-style: outset"
          >
            {{ regUser.email }}
          </div>
          <div v-if="!editBool">{{ regUser.email }}</div>
        </div>
        <div>
          <i class="fas fa fa-user"></i><i>Name:</i>
          <div
            v-if="editBool"
            contenteditable="true"
            style="border-style: outset"
          >
            {{ regUser.fname + " " + regUser.lname }}
          </div>
          <div v-if="!editBool">
            {{ regUser.fname + " " + regUser.lname }}
          </div>
        </div>
        <div>
          <i class="fas fa fa-map-marker-alt"></i><i>Address:</i>
          <div
            v-if="editBool"
            contenteditable="true"
            style="border-style: outset"
          >
            {{ regUser.adress }}
          </div>
          <div v-if="!editBool">{{ regUser.adress }}</div>
        </div>
        <div>
          <i class="fas fa fa-building"></i><i>City :</i>
          <div
            v-if="editBool"
            contenteditable="true"
            style="border-style: outset"
          >
            {{ regUser.city }}
          </div>
          <div v-if="!editBool">{{ regUser.city }}</div>
        </div>
        <div>
          <i class="fas fa fa-flag"></i><i>Country :</i>
          <div
            v-if="editBool"
            contenteditable="true"
            style="border-style: outset"
          >
            {{ regUser.country }}
          </div>
          <div v-if="!editBool">{{ regUser.country }}</div>
        </div>
        <div>
          <i class="fas fa fa-phone"></i><i>Number :</i>
          <div
            v-if="editBool"
            contenteditable="true"
            style="border-style: outset"
          >
            {{ regUser.number }}
          </div>
          <div v-if="!editBool">{{ regUser.number }}</div>
        </div>

        <label v-if="!editBool" class="btn btn-info" v-on:click="changeEdit()">
          Edit profile info
        </label>
        <label v-if="editBool" class="btn btn-success" v-on:click="save()">
          Save profile info
        </label>
      </div>
      <div class="section-2 col-md-8">
        <div class="list-tab row">
          <div class="col-6 reservation-pick">
            <div>
              <div class="flex mb-2 reservation">
                <h4>New dermatologist appointment</h4>
                <label class="text-gray-600 font-medium"
                  ><input
                    class="mr-1"
                    type="radio"
                    value=""
                    v-model="timezone"
                  />Local</label
                >
                <label class="text-gray-600 font-medium ml-3"
                  ><input
                    class="mr-1"
                    type="radio"
                    value="utc"
                    v-model="timezone"
                  />UTC</label
                >
              </div>
              <vc-date-picker
                v-model="date"
                mode="dateTime"
                :timezone="timezone"
              />
            </div>
            <div v-if="information != ''">{{ information }}</div>
            <form @submit.prevent="getAppointment">
              <button class="btn btn-dark" type="submit">
                Get Appointment
              </button>
            </form>
          </div>

          <div class="col-6">
            <div v-for="sa in regUser.scheduledAppointments" :key="sa">
              Scheduledv Appointments :<i class="spec-info-time"> {{ sa }}</i>
            </div>
          </div>
        </div>
        <div class="list-tab">
          <h2>Appointment List - Dermatologist</h2>
          <div>
            <table class="list-table">
              <tr>
                <th>Doktor</th>
                <th>Datum</th>
                <th>Akcije</th>
              </tr>
              <tr
                v-for="dermatologist in regUser.appointmentsListDermatologist"
                :key="dermatologist.date"
              >
                <td>{{ dermatologist.doctor }}</td>
                <td>{{ dermatologist.date }}</td>
                <td>
                  <button class="btn btn-success">
                    <i class="fas fa-check"></i></button
                  ><button class="btn btn-danger">
                    <i class="fa fa-ban"></i>
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="list-tab">
          <h2>Appointment List - Pharmaciest</h2>
          <div>
            <table class="list-table">
              <tr>
                <th>Doktor</th>
                <th>Datum</th>
                <th>Akcije</th>
              </tr>
              <tr
                v-for="Pharmaciest in regUser.appointmentsListPharmaciest"
                :key="Pharmaciest.date"
              >
                <td>{{ Pharmaciest.doctor }}</td>
                <td>{{ Pharmaciest.date }}</td>
                <td>
                  <button class="btn btn-success">
                    <i class="fas fa-check"></i></button
                  ><button class="btn btn-danger">
                    <i class="fa fa-ban"></i>
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="list-tab">
          <h2>Prescription List</h2>
          <div>
            <table class="list-table-medicine">
              <tr>
                <th>Ime leka</th>
                <th>Akcije</th>
              </tr>
              <tr
                v-for="SubscribedList in regUser.pharmaciesSubscribedList"
                :key="SubscribedList"
              >
                <td>{{ SubscribedList }}</td>
                <td>
                  <button class="btn btn-info">
                    <i class="fas fa-list-alt"></i>
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div></div>
    <!-- <div v-for="(item, index) in users" :key="index">
      <h2>Name: {{ item.name }}</h2>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RegistredUser",
  infoMessage: "",
  selectedValue: new Date(),
  data: () => ({
    ID: "",
    attrs: [
      {
        key: "Appointment",
        highlight: true,
        dates: new Date("2021-06-10"),
      },
    ],
    editBool: false,
    date: new Date(),
    timezone: "",
  }),

  created() {
    const { id } = this.$route.params;
    this.ID = id;
  },

  computed: {
    regUser() {
      let users = this.$store.state.users;

      // let user = users.find((usr) => {
      //   return usr.userID == this.ID;
      // });

      return users[0];
    },
    information: function () {
      return this.$store.state.infoMsg;
    },
  },
  methods: {
    getAppointment() {
      this.$store.commit("getAppointment", {
        id: this.ID,
      });
    },
    changeEdit() {
      if (!this.editBool) {
        this.editBool = true;
      } else {
        this.editBool = false;
      }
    },
    save() {
      if (!this.editBool) {
        this.editBool = true;
      } else {
        this.editBool = false;
      }
      axios.put(`user/update/`, this.user).then((Responce) => {
        console.log("updated");
        this.messageVal = "SuccesfullUpdate";
        setTimeout(() => (this.messageVal = ""), 6000);
        localStorage.setItem("username", this.user.username);
        localStorage.setItem("role", this.user.role);
        this.user = Responce.data;
      });
    },
  },
};
</script>

<style></style>
