<template>
    <div class="admin-control-panel">

        
    <section class="modal" v-for="data, index in singleMedication" :key="index"> 
        <h2>{{data}}</h2>
    </section>
        
        <div class="container flex-column">
            <h1>Admin Panel</h1>


            <nav class="flex-row col-12">
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                 <a class="nav-link active" id="nav-medication-tab" data-toggle="tab" href="#nav-medication" role="tab" aria-controls="nav-medication" aria-selected="true"><i class="fas fa-pills"></i>Medication</a>
                                 <a class="nav-link" id="nav-pharmacies-tab" data-toggle="tab" href="#nav-pharmacies" role="tab" aria-controls="nav-pharmacies" aria-selected="false"><i class="fas fa-map-marked-alt"></i>Pharmacies</a>
                                 <a class="nav-link" id="nav-pharmacists-tab" data-toggle="tab" href="#nav-pharmacists" role="tab" aria-controls="nav-pharmacists" aria-selected="false"><i class="fas fa-user-edit"></i>Pharmacists</a>
                                 <a class="nav-link" id="nav-dermatologies-tab" data-toggle="tab" href="#nav-dermatologies" role="tab" aria-controls="nav-dermatologies" aria-selected="false"><i class="fas fa-user-md"></i>Dermatologies</a>
                                 <a class="nav-link" id="nav-patients-tab" data-toggle="tab" href="#nav-patients" role="tab" aria-controls="nav-patients" aria-selected="false"><i class="fas fa-users"></i>Patients</a>
                                 <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><i class="fas fa-cog"></i>Admin Profile</a>
                                 <a class="nav-link" id="nav-add-admins-tab" data-toggle="tab" href="#nav-add-admins" role="tab" aria-controls="nav-add-admins" aria-selected="false"><i class="fas fa-cogs"></i>Add Admins</a>
                            </div>
            </nav>




            <div class="admin-content-wrapper flex-row col-12">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-medication" role="tabpanel" aria-labelledby="nav-medication-tab">
                            <div class="medications">
                                <h2><i class="fas fa-pills"></i>Medications</h2>
                                <div class="card">
                                    <h3>Dodavanje leka</h3>
                                    <form @submit.prevent="addMedications" class="d-flex justify-content-around">
                                        <input v-model="medication.id" type="text" placeholder="sifra" required>
                                        <input v-model="medication.medicationName" type="text" placeholder="naziv" required>
                                        <select v-model="medication.type" placeholder="tip" required>
                                            <option v-bind:value="'antidepresiv'">antidepresiv</option>
                                            <option v-bind:value="'anelgetik'">anelgetik</option>
                                            <option v-bind:value="'prbiotik'">prbiotik</option>
                                            <option v-bind:value="'kortikosteroid'">kortikosteroid</option>
                                            <option v-bind:value="'antihistemin'">antihistemin</option>
                                        </select>
                                        <input v-model="medication.contraindications" type="text" placeholder="kontraindikacije">
                                        <input v-model="medication.contains" type="text" placeholder="sastav">
                                        <input v-model="medication.dailyDoes" type="text" placeholder="preporuceni unos" required>
                                        <input v-model="medication.substitue" type="text" placeholder="zamenski lek">
                                        <input v-model="medication.location" type="text" placeholder="lokacije" required>
                                        <button class="btn btn-dark" type="submit">DODAJ</button>
                                    </form>
                                </div>
                            
                            

                                <table class="list-table">
                                    <tr>
                                        <th>Šifra Leka</th>
                                        <th>Naziv</th> 
                                        <th>Tip leka</th>
                                        <th>Kontraindikacije</th>
                                        <th>Sastav</th>
                                        <th>Preporučeni unos</th>
                                        <th>Zamenski lek</th>
                                        <th>Lokacije</th>
                                        <th>Akcije</th>
                                    </tr>
                                    <tr class="container__list-item" v-for="(item, index) in medications" :key="index">
                                        <td>{{item.id}}</td>
                                        <td>{{item.name}}</td>
                                        <td ><i class="fas fa-certificate" v-if="item.type == 'antidepresiv'"></i>{{item.type}}</td>
                                        <td>{{item.contraindications}}</td>
                                        <td>{{item.contains}}</td>
                                        <td>{{item.dailyDoes}}</td>
                                        <td>{{item.substitue}}</td>
                                        <td>{{item.location}}</td>
                                        <td><button @click="updateMedication(item.id)" class="btn btn-info" name="addMedication"><i class="fas fa-edit"></i></button><button @click="removeMedication(item.id)" class="btn btn-danger" name="removeMedication"><i class="fa fa-ban"></i></button></td>
                                    </tr>
                                </table>
                          
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-pharmacies" role="tabpanel" aria-labelledby="nav-pharmacies-tab">
                            <div class="pharmacies"> 
                                <h2><i class="fas fa-map-marked-alt"></i>Phamarices</h2>
                                        <form @submit.prevent="addPharmacy" class="d-flex justify-content-around">
                                        <input v-model="pharmacy.pharmacyName" type="text" placeholder="naziv" required>    
                                        <input v-model="pharmacy.location" type="text" placeholder="adresa">
                                
                                        <button class="btn btn-dark" type="submit" name="addPharmacyBtn">DODAJ</button>
                                    </form>
                                    
                                    <div class="container__list">
                                        <div class="container__list-item" v-for="(item, index) in pharmacies" :key="index">
                                            <div> {{item.name}} {{item.location}}</div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-pharmacists" role="tabpanel" aria-labelledby="nav-pharmacists-tab">
                            <div class="pharmaciest">
                                <h2><i class="fas fa-user-edit"></i>Phamaricest</h2>
                                     <form @submit.prevent="addPhamaricest">
                                            <input type="text" v-model="phamaricest.phamaricestName">
                                    </form>
                                <div class="container__list">
                                    <div class="container__list-item" v-for="(item, index) in pharmaciest" :key="index">
                                        <div> {{item.name}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-dermatologies" role="tabpanel" aria-labelledby="nav-dermatologies-tab">
                            <div class="dermatologist">
                                <h2><i class="fas fa-user-md"></i>Phamaricest</h2>
                                    <div class="container__list">
                                        <div class="container__list-item" v-for="(item, index) in dermatologist" :key="index">
                                            <div> {{item.name}}</div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-patients" role="tabpanel" aria-labelledby="nav-patients-tab">
                            <div class="patients">
                                <h2><i class="fas fa-user-md"></i>Patients</h2>
                                <div  >

                                    <table class="list-table">
                                    <tr>
                                        <th>ID</th>
                                        <th>Status</th>
                                        <th>First Name</th> 
                                        <th>Last Name</th>
                                        <th>Location</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Prescriptions</th>

                                    </tr>
                                    <tr class="container__list-item" v-for="(patient, index) in patients" :key="index">
                                        <td>{{patient.id}}</td>
                                        <td>{{patient.work_role}}</td>
                                        <td>{{patient.firstName}}</td>
                                        <td >{{patient.lastName}}</td>
                                        <td>{{patient.address + ', ' + patient.city + ', ' + patient.country }}</td>
                                        <th>{{patient.phone}}</th>
                                        <td>{{patient.email}}</td>
                                        <td>{{patient.prescriptions}}</td>
                                     </tr>
                                </table>

                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div class="profile ">
                                <h2><i class="fas fa-cog"></i>Admin Profile</h2>
                                <div class="row">
                                <div class="section-2 col-md-4 offset-2">
                                    <div><img class="img-fluid d-block" src="../../assets/male.jpg"/></div>
                                </div>
                                <div class="section-1 col-md-4">
                                    <div><i class="fas fa fa-id-card"></i><i>Patient ID :</i> {{ regUser.id }}</div>
                                    <div><i class="fas fa fa-envelope"></i><i>Email:</i> {{ regUser.email }}</div>
                                    <div><i class="fas fa fa-user"></i><i>Name:</i> {{ regUser.fname + " " + regUser.lname }}</div>
                                    <div><i class="fas fa fa-map-marker-alt"></i><i>Address:</i> {{ regUser.adress }}</div>
                                    <div><i class="fas fa fa-building"></i><i>City :</i> {{ regUser.city }}</div>
                                    <div><i class="fas fa fa-flag"></i><i>Country :</i> {{ regUser.country }}</div>
                                    <div><i class="fas fa fa-phone"></i><i>Number :</i> {{ regUser.number }}</div>

                                    <buttom class="btn btn-info ">Edit profile info</buttom>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-add-admins" role="tabpanel" aria-labelledby="nav-add-admins-tab">
                            <div class="profile ">
                                <h2><i class="fas fa-cogs"></i>Add Admins</h2>
                                <div class="row">
                                <div class="section-1 col-md-4">
                                <form id="addAdminsForm"  class="form form-signup addAdminsForm" @submit.prevent="addAdmins">
                                        <p v-if="errors.length">
                                        <b>Please correct the following error(s):</b>
                                        <ul>
                                            <li class="error__item" v-for="error in errors" :key="error.index">{{ error }}</li>
                                        </ul>
                                        </p>
                                        <div class="input-wrapper"><i class="fas fa fa-user"></i><input class="form__input" v-model="addAdmin.fname" type="text" placeholder="First Name"></div>
                                        <div class="input-wrapper"><i class="fas fa fa-user"></i><input class="form__input" v-model="addAdmin.lname" type="text" placeholder="Last Name"></div>
                                        <div class="input-wrapper"><i class="fas fa fa-envelope"></i><input class="form__input" v-model="addAdmin.email" type="email" placeholder="Email"></div>
                                        <div class="input-wrapper"><i class="fas fa fa-key"></i><input class="form__input" v-model="addAdmin.password" type="text" placeholder="Password"></div>
                                        <div class="input-wrapper"><i class="fas fa-hospital-user"></i><input class="form__input" v-model="addAdmin.pharmacyID" type="text" placeholder="Pharmacy ID"></div>

                                    <button class="form__btn" type="submit" name="addAdminBtn">Add Admin</button>
                                </form>

                                </div>
                                <div class="section-2 col-md-6 offset-1">
                                    <div v-if="information != '' ">
                                        <h3>{{information}}</h3>
                                    </div>
                                    <h3><i class="fas fa-cogs"></i>Add Admin</h3>
                                    <table class="list-table">
                                    <tr>
                                        <th>ID</th>
                                        <th>Status</th>
                                        <th>First Name</th> 
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Pharmacy ID</th>


                                    </tr> 
                                     <tr class="container__list-item" v-for="(reAdmin, index) in registerdAdmins" :key="index">
                                        <td>{{reAdmin.id}}</td>
                                        <td>{{reAdmin.work_role}}</td>
                                        <td>{{reAdmin.firstName}}</td>
                                        <td >{{reAdmin.lastName}}</td>
                                        <td>{{reAdmin.email}}</td>
                                        <td>{{reAdmin.dedicated_pharmacy.id}}</td>
                                     </tr>
                                    
                                   
                                </table>
                                </div>
                                </div>
                            </div>
                        </div>
            </div>

            </div>
            
        </div>
    </div>
</template>

<script>
export default {
  name: "PharmacyAdmin",
  data: () => ({
    modal: false,
    errors: [],
    addAdmin: {
      fname: "",
      lname: "",
      password: "",
      email: "",
      pharmacyID: "",
    },
    medication: {
      id: "",
      medicationName: "",
      medicationType: "",
      location: "",
      contains: "",
      contraindications: "",
      dailyDoes: "",
      substitue: "",
    },

    pharmacy: {
      id: "",
      pharmacyName: "",
      location: "",
    },

    phamaricest: {
      id: "",
      phamaricestName: "",
    },
    patients: {},

    registerdAdmins: {},
  }),
  methods: {
    addMedications() {
      this.$store.commit("addMedicationToList", {
        medication: {
          id: new Date().getTime().toString(),
          name: this.medication.medicationName,
          location: this.medication.location,
          type: this.medication.type,
          contains: this.medication.contains,
          contraindications: this.medication.contraindications,
          dailyDoes: this.medication.dailyDoes,
          substitue: this.medication.substitue,
        },
      });
    },

    addPharmacy() {
      this.$store.commit("addPharmacyToList", {
        pharmacy: {
          id: new Date().getTime().toString(),
          name: this.pharmacy.pharmacyName,
          location: this.pharmacy.location,
        },
      });
    },

    addPhamaricest() {
      this.$store.commit("addPharmaciestToList", {
        phamaricest: {
          id: new Date().getTime().toString(),
          name: this.phamaricest.phamaricestName,
        },
      });
    },

    updateMedication(id) {
      this.$store.commit("updateMedication", {
        id,
      });
    },

    removeMedication(id) {
      this.$store.commit("removeMedicationFromArr", {
        id,
      });
    },

    addAdmins() {
      this.errors = [];

      if (!this.addAdmin.fname) {
        this.errors.push("First Name required.");
      }

      if (!this.addAdmin.lname) {
        this.errors.push("Last Name required.");
      }

      if (!this.addAdmin.email) {
        this.errors.push("Email required.");
      }

      if (!this.addAdmin.password) {
        this.errors.push("Password required.");
      }

      if (!this.errors.length) {
        this.$store.commit("addNewAdmin", {
          fname: this.addAdmin.fname,
          lname: this.addAdmin.lname,
          email: this.addAdmin.email,
          password: this.addAdmin.password,
          pharmacyID: this.addAdmin.pharmacyID,
        });
      }
    },
  },

  computed: {
    medications() {
      return this.$store.state.medications;
    },
    pharmacies() {
      return this.$store.state.pharmacies;
    },
    dermatologist() {
      return this.$store.state.dermatologist;
    },
    pharmaciest() {
      return this.$store.state.pharmaciest;
    },

    singleMedication() {
      return this.$store.state.singleMedication;
    },

    regUser() {
      let users = this.$store.state.users;
      let user = users[0];
      return user;
    },
    information: function () {
      return this.$store.state.infoMsg;
    },
  },
  mounted: function () {
    fetch("http://localhost:8081/user/all")
      .then((response) => response.json())
      .then((data) => {
        this.patients = data;
      });
    fetch("http://localhost:8081/api/admin/all")
      .then((response) => response.json())
      .then((data) => {
        this.registerdAdmins = data;
        //  console.log(data);
      });
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: space-around;

  &__list {
    background-color: rgba(255, 255, 255, 0.164);
  }

  &__list-item {
    margin-bottom: 0.4rem;
  }
}

.medications {
  display: flex;
  flex-direction: column;
}

.pharmacies {
  display: flex;
  flex-direction: column;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  background-color: seagreen;
}
</style>