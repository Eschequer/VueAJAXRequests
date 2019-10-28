<template>
  <div class="component stock-menu">
    <template v-for="stock in stocks">
      <app-stock :availableStocks="stock"  @addBoughtStocks="addBoughtStocks"></app-stock>
    </template>
  </div>
</template>

<script>
  import Stock from "./Stock";

    export default {
        name: "Stocks",
        components: {
            appStock: Stock
        },
        props: ['stocks'],
        data() {
            return {

            }
        },
        methods: {
            addBoughtStocks(company, quantity, price) {
                this.$emit('addBoughtStocks', company, quantity, price)
            },
            generateRandomNumber(min, max) {
                return min + Math.floor( Math.random() * (max - min + 1) );
            },

            generatePlusOrMinus() {
                let num1 = this.generateRandomNumber(1, 2);
                let num2 = this.generateRandomNumber(1, 2);

                return num1 - num2;
            }
        }
    }
</script>

<style scoped lang="scss">
  .component.stock-menu {
    display: grid;

    padding: 20px;



    @media screen and (min-width: 750px) {
      & {
        grid-template-columns: repeat(2, 1fr);
      }

    }
  }


</style>
