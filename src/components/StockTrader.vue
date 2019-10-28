<template>
    <div class="component">
      <h1>Trade or View your Portfolio</h1>
      <p>You may Save and Load your Data</p>
      <p>Click on 'End Day' to begin a new Day!</p>
      <hr>
      <h3>Your Funds: ${{funds.toLocaleString('de-De')}}</h3>
    </div>
</template>

<script>
    export default {
        name: "StockTrader",
        props: ['fundsVal'],
        data() {
            return {
                funds: this.fundsVal
            }
        }
    }
</script>

<style scoped lang="scss">
  .component {
    padding: 20px;
    border: 1px solid #000;

    hr {
      border: 0.5px solid lighten(grey, 40%);
    }
  }

</style>
