<template>
  <form class="form login-form" @submit.prevent="logout">
    <h1>Are you Sure you want to logOut?</h1>
    <button class="btn btn-success">yes</button>
    <button class="btn btn-error">back</button>
  </form>
</template>

<script>
export default {
  name: "Logout",
  data: () => ({
    username: "",
    password: "",
    errors: [],
  }),
  methods: {
    logout() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("role");
      this.$router.push("/login");
      window.location.reload();
    },
  },
};
</script>