<template>
  <div class="component" v-if="company in boughtStocks">
    <header>
      <h3>{{company}}</h3>
      <p>(Price: {{stockPrice}} | Quantity: {{boughtStocks[company]}})</p>
    </header>
    <main>
      <input type="text" placeholder="Quantity" v-model="sellingStockQuantity">
      <button @click="sellStocks" :style="{'background-color': sellingStockQuantity ? 'red' : ''}">Sell</button>

    </main>
  </div>
</template>

<script>
    export default {
        name: "BoughtStock",
        props: ['boughtStocks', 'company', 'quantity', 'stocks'],
        data() {
            return {
                sellingStockQuantity: '',
            }
        },
        computed: {
            stockPrice() {
                let price = 0;

               this.stocks.forEach((elem) => {
                   if (elem.company === this.company) {
                       price = elem.stockPrice;
                   }
               });

                return price;
            }
        },
        methods: {
            sellStocks() {
                let company = this.company;
                let quantity = +this.sellingStockQuantity || 0;
                let price = this.stockPrice;

                this.$emit('sellStocks', company, quantity, price);

                this.sellingStockQuantity = '';
            }
        }
    }
</script>

<style scoped lang="scss">
  .component {
    border: 1px solid lightgrey;
    padding: 0;
    margin: 1vw;
    width: 50%;

    header {
      background-color: lightgoldenrodyellow;
      display: flex;
      margin: 0;
      padding: 7px;

      & > * {
        display: flex;
        justify-content: center;
        align-items: baseline;
        margin: 5px;
      }

      h3 {
        margin: 0;
        display: flex;
      }

      p {
        font-size: 0.8em;
      }
    }

    main {
      display: flex;
      padding: 20px 10px;

      input {
        padding: 7px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
      }

      button {
        margin-left: auto;
        background: darkgoldenrod;
        color: white;
        @extend input
      }

    }
  }

</style>
