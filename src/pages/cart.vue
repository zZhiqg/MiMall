<template>
  <div>
    <order-header></order-header>
    cart
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '@/components/OrderHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
export default {
  components: { NavFooter,OrderHeader },
  name: '',
  data () {
    return {}
  },
  created () {},
  methods: {}
}

</script>
<style scoped>
</style>
