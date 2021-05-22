<template>
  <section>
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