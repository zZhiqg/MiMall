<template>
  <div>
    order
    <order-header></order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '@/components/OrderHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
export default {
  components: { OrderHeader, NavFooter },
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
