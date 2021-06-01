<template>
  <div>
    <h1>Pharmacy Admin Profile</h1>
    <section class="container">
      <div class="medications">
        <form @submit.prevent="addMedications">
          <input
            v-model="medication.medicationName"
            type="text"
            placeholder="add medication name"
          />
        </form>
        <h2>Medications</h2>
        <div class="container__list">
          <div
            class="container__list-item"
            v-for="(item, index) in medications"
            :key="index"
          >
            <h2>{{ item.name }}</h2>
          </div>
        </div>
      </div>
      <div class="pharmacies">
        <h2>Phamarices</h2>
        <div class="container__list">
          <div
            class="container__list-item"
            v-for="(item, index) in pharmacies"
            :key="index"
          >
            <h2>{{ item.name }}</h2>
          </div>
        </div>
      </div>
      <div class="pharmaciest">
        <h2>Phamaricest</h2>
        <div class="container__list">
          <div
            class="container__list-item"
            v-for="(item, index) in pharmaciest"
            :key="index"
          >
            <h2>{{ item.name }}</h2>
          </div>
        </div>
      </div>
      <div class="dermatologist">
        <h2>Phamaricest</h2>
        <div class="container__list">
          <div
            class="container__list-item"
            v-for="(item, index) in dermatologist"
            :key="index"
          >
            <h2>{{ item.name }}</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PharmacyAdmin",
  data: () => ({
    medication: {
      id: new Date().getTime().toString(),
      medicationName: "",
      location: "",
    },
    pharmacy: "",
  }),

  methods: {
    addMedications() {
      this.$store.commit("addMedicationToList", {
        medication: {
          id: this.medication.id,
          name: this.medication.medicationName,
          location: this.medication.location,
        },
      });
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
</style>