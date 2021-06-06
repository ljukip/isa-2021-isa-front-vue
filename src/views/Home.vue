<template>
  <div class="home-wrapper">
    <div>
      <h1>Welcome!</h1>
      <h5>
        Perscription procurement, pharmaceutical and medical consulting are just
        few of the things a
        <span style="color: #1e878f; font-weight: bold">Pharma</span>
        aplication can offer!
      </h5>
      <div v-if="jwt">
        <h2>Wellcome to the Pharmacy Managment System</h2>
        <p>Please login or singup to get access to the system</p>
        <a class="login-btn" href="/login"
          ><button class="btn btn-success">Login</button></a
        >
        <a href="/signup"><button class="btn btn-secondary">Sing up</button></a>
      </div>

      <div v-if="!jwt">
        <div class="container">
          <section id="newsletter">
            <h1>
              Looking for something in particular? Check out our wide offer...
            </h1>
          </section>

          <section id="boxes">
            <div style="flex-direction: row">
              <div class="box" id="box1">
                <img style="height: 14vh" src="../images/meds.png" />
                <h3>Medications</h3>
                <p>some text...</p>
              </div>
              <div class="box" id="box2">
                <img
                  style="height: 14vh; width: 63%"
                  src="../images/consultations2.png"
                />
                <h3>Pharmaceutical consulting</h3>
                <p>some text...</p>
              </div>
              <div class="box" id="box3">
                <img style="height: 14vh" src="../images/impression.png" />
                <h3>Tell us your impressions</h3>
                <p>Your opinion matters to us!</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <h2>{{ information }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  jwt: localStorage.getItem("jwt"),

  computed: {
    information: function () {
      return this.$store.state.infoMsg;
    },
  },
};
</script>

<style>
</style>