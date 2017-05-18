<template>
  <section>
    <h1>Detail View for {{ resource }}</h1>
  </section>
</template>


<script>
  export default {
    name: 'detailView',
    data () {
      return {}
    },
    computed: {
      resource () {
        return `${this.$route.params.collection}/${this.$route.params.inventoryNum}`
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      $route: 'fetchData'
    },
    methods: {
      fetchData () {
        this.error = this.post = null
        this.loading = true
        this.$http.get(`http://localhost:3030/api/entities?resourceName=${this.resource}`).then(response => {
          this.loading = false
          this.entity = response.data
        })
      }
    }
  }
</script>
