<template>
   <div class="component">
    <template v-for="(value, key) in boughtStocks">
       <bought-stock :company="key" :quantity="value" :boughtStocks="boughtStocks" :stocks="stocks"
                     @sellStocks="sellStocks"></bought-stock>
    </template>
   </div>
</template>

<script>
  import BoughtStock from "./BoughtStock";

  export default {
      name: "Portfolio",
      components: {
          BoughtStock
      },
      props: ['boughtStocks', 'stocks'],
      data() {
          return {

          }
      },
      methods: {
          sellStocks(company, quantity, price) {
              this.$emit('sellStocks', company, quantity, price)
          }

      },
      computed: {

      },

  }
</script>

<style scoped>

</style>
