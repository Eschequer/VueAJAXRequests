<template>
    <div class="component">
      <header>
        <h3 class="company" >{{availableStocks.company}}</h3>
        <p class="price">(Price: {{availableStocks.stockPrice}})</p>
      </header>
      <main>
        <input type="text" placeholder="Quantity" v-model="boughtStocks.quantity">
        <button @click="buyStocks"
                :style="{'background-color': boughtStocks.quantity ? 'darkslateblue' : ''}">Buy</button>
      </main>
    </div>
</template>

<script>

  export default {
        name: "Stock",
        props: ['availableStocks'],
        data() {
            return {
                boughtStocks: {
                    company: '',
                    quantity: ''
                }
            }
        },
        methods: {
            buyStocks() {
                this.boughtStocks.company = this.availableStocks.company;

                let company = this.boughtStocks.company;
                let quantity = Number(this.boughtStocks.quantity) || 0;
                let price = this.availableStocks.stockPrice;

                this.$emit('addBoughtStocks', company, quantity, price);

                this.boughtStocks.quantity = '';
            }
        }
    }
</script>

<style scoped lang="scss">
  .component {
    border: 1px solid lightgrey;
    padding: 0;
    margin: 1vw;

    header {
      background-color: lightsteelblue;
      display: flex;
      margin: 0;
      padding: 7px;
      align-items: baseline;

      & > * {
        margin: 5px;
      }


      p {
        font-size: 0.8em;
        margin-left: 1px;
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
        background: steelblue;
        color: white;
        @extend input
      }

    }
  }

</style>
