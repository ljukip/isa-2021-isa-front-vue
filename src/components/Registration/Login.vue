<template>
  <form @submit.prevent="login">
    <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li class="error__item" v-for="error in errors" :key="error.index">{{ error }}</li>
              </ul>
            </p>
      <input v-model="username" type="text" placeholder="Username">
      <input v-model="password" type="password" placeholder="Password">
      <button>login</button>
  </form>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
    errors: [],
  }),
  methods: {
    login() {
      this.errors = [];

      if (!this.username) {
        this.errors.push("Username required.");
      }

      if (!this.password) {
        this.errors.push("Password required.");
      }

      if (!this.errors.length) {
        this.$store.dispatch("loginUser", {
          username: this.username,
          password: this.password,
        });
      }
    },
  },
};
</script>

<style>
</style>