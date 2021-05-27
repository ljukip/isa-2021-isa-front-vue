<template>

      <form class="form__box" @submit.prevent="signIn">
        <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li class="error__item" v-for="error in errors" :key="error.index">{{ error }}</li>
              </ul>
            </p>
            <input v-model="name" type="text" placeholder="Name">
            <input v-model="email" type="email" placeholder="Email">
            <input v-model="adress" type="text" placeholder="Adress">
            <input v-model="city" type="text" placeholder="City">
            <input v-model="country" type="text" placeholder="Country">
            <input v-model="number" type="text" placeholder="Phone Number">
            <input v-model="password" type="password" placeholder="Password">
            <input v-model="password" type="password" placeholder="Password">

          <button class="btn" type="submit">Sign Up</button>
      </form>

</template>

<script>
export default {
  name: "SignUp",
  data: () => ({
    errors: [],
    name: "",
    email: "",
    adress: "",
    city: "",
    country: "",
    number: "",
    password: "",
  }),
  methods: {
    signIn() {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }

      if (!this.email) {
        this.errors.push("Email required.");
      }

      if (!this.adress) {
        this.errors.push("Adress required.");
      }

      if (!this.city) {
        this.errors.push("City required.");
      }

      if (!this.country) {
        this.errors.push("Country required.");
      }

      if (!this.number) {
        this.errors.push("Number required.");
      }

      if (!this.password) {
        this.errors.push("Password required.");
      }

      if (!this.errors.length) {
        this.$store.commit("signInUser", {
          name: this.name,
          email: this.email,
          adress: this.adress,
          city: this.city,
          country: this.country,
          number: this.number,
          password: this.password,
        });
      }
    },
  },
};
</script>

<style>
.form__box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form__box input {
  margin-bottom: 1rem;
}

.error__item {
  list-style: none;
  color: red;
}
</style>