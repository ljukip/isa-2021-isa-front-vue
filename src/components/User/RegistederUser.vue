<template>
  <div>
    <h1>registred user {{ ID }}</h1>
    <div v-for="(item, index) in users" :key="index">
      <h2>Name: {{ item.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistredUser",
  data: () => ({
    ID: "",
    username: "",
    email: "",
    adress: "",
    city: "",
    medications: [],
  }),
  created() {
    const { id } = this.$route.params;
    this.ID = id;
    console.log("params " + this.ID);
  },

  computed: {
    // users() {
    //   const usersList = this.$store.state.users
    //   usersList.filter(item => {
    //     const {userID} = item
    //     return userID === this.ID
    //   })
    //   console.log(usersList);
    //   return usersList
    // }
    // ...mapGetters(['getSingleUser'])
    users: function () {
      return this.$store.state.getters.getSingleUser(this.ID);
    },
  },
};
</script>

<style>
</style>