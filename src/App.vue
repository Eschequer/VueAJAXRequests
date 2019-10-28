<template>
  <div id="app">
    <app-navigation :fundsVal="funds"
                    @setComponent="setComponent($event)"
                    @updateStocksPrice='updateStocksPrice'
                    @saveData="submit" @loadData="loadData">
    </app-navigation>
    <component
      :is="chosenComponent"
      :fundsVal="funds"
      @addBoughtStocks="addBoughtStocks" @sellStocks="removeBoughtStocks"
       :boughtStocks="boughtStocks" :stocks="availableStocks"
    ></component>
  </div>
</template>

<script>
    import Navigation from "./components/Navigation";
    import StockTrader from "./components/StockTrader";
    import Portfolio from "./components/Portfolio";
    import StocksMenu from "./components/StocksMenu";

export default {
    name: 'app',
    components: {
        appNavigation: Navigation,
        StockTrader,
        StocksMenu
    },
    data() {
        return {
            funds: 10000,
            chosenComponent: StockTrader,
            boughtStocks: {},
            availableStocks: [
                {company: 'BMW', stockPrice: 78},
                {company: 'PepsiCo', stockPrice: 136},
                {company: 'Apple', stockPrice: 236},
                {company: 'Netflix', stockPrice: 275},
            ],
        }
    },
    computed: {

    },
    methods: {
        setComponent(component) {
            switch (component) {
                case 'Portfolio':
                    this.chosenComponent = Portfolio;
                    break;
                case 'Stocks':
                    this.chosenComponent = StocksMenu;
                    break;
                default:
                    this.chosenComponent = StockTrader;
            }
        },
        addBoughtStocks(company, quantity, price) {
            if (company in this.boughtStocks) {
                this.boughtStocks[company] += quantity
            } else {
                this.boughtStocks[company] = quantity;
            }

            this.funds -= quantity * price;

        },
        removeBoughtStocks(company, quantity, price) {
            let fundsFromSelling = quantity * price;

            this.funds += fundsFromSelling;

            if (company in this.boughtStocks) {
                this.boughtStocks[company] -= quantity
            }

            if (this.boughtStocks[company] <= 0) {
                delete this.boughtStocks[company];
            }
        },
        generateStockPrice(min, max) {
            function generateRandomNumber(min, max) {
                return min + Math.floor( Math.random() * (max - min + 1) );
            }

            function generatePlusOrMinus() {
                let num1 = generateRandomNumber(1, 2);

               return (num1 === 1) ? 1 : -1;
            }

            let plusOrMinus = generatePlusOrMinus();

            return (plusOrMinus < 0) ? 0 - generateRandomNumber(min, max) : generateRandomNumber(min, max);
        },
        updateStocksPrice() {
            this.availableStocks.forEach((elem) => {
                let random = this.generateStockPrice(0, 100);
                elem.stockPrice += random;

                if (elem.stockPrice <= 0) {
                    elem.stockPrice = 1;
                }
            })
        },
        submit() {
            console.log(`save data`);
            fetch('https://my-project-1543526494526.firebaseio.com/boughtStocks.json', {
                method: 'PUT',
                body: JSON.stringify(this.boughtStocks)
            })
                .then((response) => {
                    console.dir(response);
                    return response.json();
                })
        },
        loadData() {
            console.log(`loadData`);
            fetch('https://my-project-1543526494526.firebaseio.com/boughtStocks.json')
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                    this.boughtStocks = result;
                })
        }



    }
}
</script>

<style lang="scss" >
  * {
    box-sizing: border-box;

  }
  div#app {
    width: 80%;
    margin: auto;
    min-width: 300px;

 }

  @media screen and (max-width: 650px) {
    div#app {
      margin: 0 auto;
    }
  }


</style>
