<template>
  <form class="form login-form" @submit.prevent="login">
         <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li class="error__item" v-for="error in errors" :key="error.index">{{ error }}</li>
              </ul>
            </p>
      <h1> Login </h1>
      <div class="input-wrapper"><i class="fas fa fa-user"></i><input class="form__input" v-model="username" type="text" placeholder="Username"></div>
      <div class="input-wrapper"><i class="fas fa fa-key"></i><input class="form__input" v-model="password" type="password" placeholder="Password"></div>
      <button class="form__btn">login</button>
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
        this.$store.commit("loginUser", {
          username: this.username,
          password: this.password,
        });
      }
    },
  },
};
</script>

<style lang="scss">
.form {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;

  &__input {
    width: 300px;
    height: 35px;
    margin-bottom: 0.4rem;
    padding: 0.2rem;
    outline: none;
    border: none;
  }

  &__btn {
    background-color: rgb(51, 142, 35);
    padding: 0.2rem;
    outline: none;
    border: none;
    width: 100px;
    height: 30px;
    color: #fff;
    text-transform: capitalize;
  }
}

.error__item {
  list-style: none;
  color: red;
}
</style>