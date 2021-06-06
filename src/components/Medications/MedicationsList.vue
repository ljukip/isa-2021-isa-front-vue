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
                <th>Šifra Leka</th>
                <th>Naziv</th>
                <th>Tip leka</th>
                <th>Kontraindikacije</th>
                <th>Sastav</th>
                <th>Preporučeni unos</th>
                <th>Zamenski lek</th>
                <th>Lokacije</th>
              </tr>
              <tr
                class="container__list-item"
                v-for="(item, index) in medications"
                :key="index"
              >
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>
                  <i
                    class="fas fa-certificate"
                    v-if="item.type == 'antidepresiv'"
                  ></i
                  >{{ item.type }}
                </td>
                <td>{{ item.contraindications }}</td>
                <td>{{ item.contains }}</td>
                <td>{{ item.dailyDoes }}</td>
                <td>{{ item.substitue }}</td>
                <td>{{ item.location }}</td>
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
    medications() {
      return this.$store.state.medications;
    },
  },
};
</script>

<style>
</style>