<template>
  <section>
      <div v-for="(item, index) in medications" :key="index">
        <h2> Name: {{item.name}}</h2>
        <h2> Location: {{item.location}}</h2>
    </div>
  </section>
</template>

<script>
export default {
    computed: {
        medications() {
            return this.$store.state.medications
        }
    }
}
</script>

<style>

</style>