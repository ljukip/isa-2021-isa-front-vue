<template>
  <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="Username">
      <input v-model="password" type="password" placeholder="Password">
      <button>login</button>
  </form>
</template>

<script>

export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: '',
    error: false
  }),
  methods: {
  login() {
      this.$store.dispatch("loginUser", {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

<style>

</style>