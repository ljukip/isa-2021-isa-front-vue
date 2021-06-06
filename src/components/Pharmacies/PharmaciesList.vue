<template>
  <section>
    <div class="list-wrapper">
      <div class="container flex-column">
        <div class="admin-content-wrapper flex-row col-12">
          <h1>List all of pharmacies</h1>
          <div class="tab-content" id="nav-tabContent">
            <div class="input-group">
              <div class="form-outline">
                <div class="input-wrapper">
                  <input type="search" id="form1" class="form__input" />
                </div>
              </div>
              <button type="button" class="btn btn-dark" style="height: 41px">
                <i class="fas fa-search"></i>
              </button>
            </div>

            <table
              class="list-table"
              style="width: 80%; background-color: white; margin-top: 24px"
            >
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Grade</th>
              </tr>
              <tr
                class="container__list-item"
                v-for="(item, index) in pharmacies"
                :key="index"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.location }}</td>
                <td>{{ item.grade }}</td>
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
  computed: {
    pharmacies() {
      return this.$store.state.pharmacies;
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: space-around;

  &__list {
    background-color: rgba(255, 255, 255, 0.164);
  }

  &__list-item {
    margin-bottom: 0.4rem;
  }
}

.medications {
  display: flex;
  flex-direction: column;
}

.pharmacies {
  display: flex;
  flex-direction: column;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  background-color: seagreen;
}
</style>