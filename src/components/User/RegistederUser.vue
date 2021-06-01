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
        <div><i class="fas fa fa-user"></i><i>Name:</i> {{ regUser.name }}</div>
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

        <buttom class="btn btn-info">Edit profile info</buttom>
      </div>
      <div class="section-2 col-md-8">
        <div class="list-tab">
          <!--Ovde bi mogli da ubacimo ovu komponentu  https://vcalendar.io/ ili ovu https://madewithvuejs.com/dayspan-vuetify -->
          <div v-for="sa in regUser.scheduledAppointments" :key="sa">
            Scheduledv Appointments :<i class="spec-info-time"> {{ sa }}</i>
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
  data: () => ({
    ID: "",
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
  },
};
</script>

<style></style>
