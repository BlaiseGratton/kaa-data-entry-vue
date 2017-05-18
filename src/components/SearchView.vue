<template>
  <section>
    <h1>KAA Data Editor</h1>
  </section>
</template>


<script>
export default {
  name: 'searchView',
  methods: {
    loadCollection (domain) {
      this.$http.get(`http://localhost:3030/api/entitylist?domain=${domain}`).then(response => {
        debugger
      })
    }
  }
}
</script>
