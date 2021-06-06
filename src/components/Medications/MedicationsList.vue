<template>
  <section>
    <div class="list-wrapper">
      <div class="container flex-column">
        <div class="admin-content-wrapper flex-row col-12">
          <h1>List all of medications</h1>
          <div class="tab-content" id="nav-tabContent">
            <div class="input-group">
              <div class="form-outline">
                <div class="input-wrapper">
                  <input
                    type="search"
                    id="form1"
                    class="form__input"
                    v-model="filter"
                  />
                </div>
              </div>
              <button
                type="button"
                class="btn btn-dark"
                style="height: 41px"
                @click.prevent="find()"
              >
                <i class="fas fa-search"></i>
              </button>
            </div>

            <table
              class="list-table"
              style="width: 100%; background-color: white; margin-top: 24px"
            >
              <tr>
                <th>Šifra Leka</th>
                <th>Naziv</th>
                <th>Tip leka</th>
                <th>Kontraindikacije</th>
                <th>Sastav</th>
                <th>Proizvodjac</th>
                <th>Cena</th>
              </tr>
              <tr
                class="container__list-item"
                v-for="(item, index) in apiMedication"
                :key="item.code"
                :data-index="index"
              >
                <td>{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.sideEffects }}</td>
                <td>{{ item.ingredients }}</td>
                <td>{{ item.manufacturer.name }}</td>
                <td>{{ item.currentPrice }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    apiMedication: {},
    filter: "",
  }),
  computed: {
    // medications() {
    //   return this.$store.state.medications;
    // },
  },
  methods: {
    find: function () {
      this.apiMedication.filter((v) => v.code === this.filter);
    },
  },
  mounted: function () {
    //PREPRAVITI PORTOVE
    fetch("http://localhost:8081/api/medication/all")
      .then((response) => response.json())
      .then((data) => {
        this.apiMedication = data;
      });
  },
};
</script>

<style>
</style>