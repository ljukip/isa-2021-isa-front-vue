<template>

      <form class="form__box" @submit.prevent="signIn">
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
  name: 'SignUp',
  data: () => ({
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
      this.$store.commit("signInUser", {
          name: this.name,
          email: this.email,
          adress: this.adress,
          city: this.city,
          country: this.country,
          number: this.number,
          password: this.password,
      })
    }
  }
}
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


</style>