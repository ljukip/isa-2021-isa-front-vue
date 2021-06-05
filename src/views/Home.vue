<template>
  <div class="home-wrapper">
    <div class="container flex-column">
      <h1>Homepage</h1>
      <div v-if="information == ''">
        <h2>Wellcome to the Pharmacy Managment System</h2>
        <p>Please login or singup to get access to the system</p>
        <a class="login-btn" href="/login"
          ><button class="btn btn-success">Login</button></a
        >
        <a href="/signup"><button class="btn btn-secondary">Sing up</button></a>
      </div>
      <h2>{{ information }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  computed: {
    information: function () {
      return this.$store.state.infoMsg;
    },
  },
};
</script>

<style>
</style>