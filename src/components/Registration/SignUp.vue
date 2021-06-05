<template>

      <form  class="form form-signup" @submit.prevent="signIn">
            <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li class="error__item" v-for="error in errors" :key="error.index">{{ error }}</li>
              </ul>
            </p>
            <h1>Sing up</h1>
            <div class="input-wrapper"><i class="fas fa fa-user"></i><input class="form__input" v-model="fname" type="text" placeholder="First Name"></div>
            <div class="input-wrapper"><i class="fas fa fa-user"></i><input class="form__input" v-model="lname" type="text" placeholder="Last Name"></div>
            <div class="input-wrapper"><i class="fas fa fa-envelope"></i><input class="form__input" v-model="email" type="email" placeholder="Email"></div>
            <div class="input-wrapper"><i class="fas fa fa-map-marker-alt"></i><input class="form__input" v-model="address" type="text" placeholder="Address"></div>
            <div class="input-wrapper"><i class="fas fa fa-building"></i><input class="form__input" v-model="city" type="text" placeholder="City"></div>
            <div class="input-wrapper"><i class="fas fa fa-flag"></i><input class="form__input" v-model="country" type="text" placeholder="Country"></div>
            <div class="input-wrapper"><i class="fas fa fa-phone"></i><input class="form__input" v-model="number" type="text" placeholder="Phone Number"></div>
            <div class="input-wrapper"><i class="fas fa fa-key"></i><input class="form__input" v-model="password" type="password" placeholder="Password"></div>
            <div class="input-wrapper"><i class="fas fa fa-key"></i><input class="form__input" v-model="repassword" type="password" placeholder="Password retype"></div>

          <button class="form__btn" type="submit">Sign Up</button>
      </form>

</template>

<script>
export default {
  name: "SignUp",
  data: () => ({
    errors: [],
    fname: "",
    lname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    number: "",
    password: "",
    repassword: "",
  }),
  methods: {
    signIn() {
      this.errors = [];

      if (!this.fname) {
        this.errors.push("First Name required.");
      }

      if (!this.lname) {
        this.errors.push("Last Name required.");
      }

      if (!this.email) {
        this.errors.push("Email required.");
      }

      if (!this.address) {
        this.errors.push("Address required.");
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

      if (!this.repassword) {
        this.errors.push("Password retype cant be empty");
      }

      if (this.repassword != this.password) {
        this.errors.push("Passwords dont mach.");
      }

      if (!this.errors.length) {
        this.$store.commit("signInUser", {
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          adress: this.address,
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

<style lang="scss">
.form {
  /* margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
*/

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