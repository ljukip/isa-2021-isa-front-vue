<template>
  <section>
    
    <table class="list-table">
                                    <tr>
                                        <th>Name</th>
                                        <th>Location</th> 
                                    </tr>
                                    <tr class="container__list-item" v-for="(item, index) in pharmacies" :key="index">
                                        <td>{{item.name}}</td>
                                        <td>{{item.location}}</td>
                                        <td ><i class="fas fa-certificate" v-if="item.type == 'antidepresiv'"></i>{{item.type}}</td>
                        
                                    </tr>
                                </table>

      <div v-for="(item, index) in pharmacies" :key="index">
        <h2> Name: {{item.name}}</h2>
        <h2> Location: {{item.location}}</h2>
    </div>
  </section>
</template>

<script>
export default {
    computed: {
        pharmacies() {
            return this.$store.state.pharmacies
        }
    }
}
</script>

<style>

</style>