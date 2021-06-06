<template>
  <div class="patient container flex-column">
    <h1>Patient profile</h1>
    <div class="section flex-row col-12 d-flex">
      <div class="section-1 col-md-4">
        <div><img class="img-fluid d-block" src="../../assets/male.jpg" /></div>
        <div><i class="fas fa fa-id-card"></i><i>Patient ID :</i> {{ ID }}</div>
        <div>
          <i class="fas fa fa-envelope"></i><i>Email:</i> {{ regUser.email }}
        </div>
        <div>
          <i class="fas fa fa-user"></i><i>Name:</i>
          {{ regUser.fname + " " + regUser.lname }}
        </div>
        <div>
          <i class="fas fa fa-map-marker-alt"></i><i>Address:</i>
          {{ regUser.adress }}
        </div>
        <div>
          <i class="fas fa fa-building"></i><i>City :</i> {{ regUser.city }}
        </div>
        <div>
          <i class="fas fa fa-flag"></i><i>Country :</i> {{ regUser.country }}
        </div>
        <div>
          <i class="fas fa fa-phone"></i><i>Number :</i> {{ regUser.number }}
        </div>

        <button class="btn btn-info">Edit profile info</button>
      </div>
      <div class="section-2 col-md-8">
        <div class="list-tab row">
          <div class="col-6 reservation-pick">
            <div>
              <div class="flex mb-2 reservation">
                <h4>Zakazite prgled kod doktora</h4>
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

      let user = users.find((usr) => {
        return usr.userID == this.ID;
      });

      return user;
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
  },
};
</script>

<style></style>
