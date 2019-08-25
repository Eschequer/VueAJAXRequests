<template>
  <div id="app">
    <h2>Quotes added</h2>
    <progression-bar :quotes="quotes"></progression-bar>
    <quote-adder :quotes="quotes"></quote-adder>
    <added-quotes :quotes="quotes" @delete:quote="deleteQuote">
      <p class="info">Info: Click on a Quote to delete it</p>
    </added-quotes>
  </div>
</template>

<script>
import ProgressionBar from "./components/ProgressionBar";
import QuoteAdder from "./components/QuoteAdder";
import AddedQuotes from "./components/AddedQuotes";

export default {
    name: 'app',
    components: {
        ProgressionBar,
        QuoteAdder,
        AddedQuotes
    },
    data () {
        return {
            quotes: []
        }
    },
    methods: {
      deleteQuote(element) {
          this.quotes.splice(element, 1);
      }
    }
}
</script>

<style lang="scss" >
  * {
    box-sizing: border-box;
  }
  div#app {
    display: grid;
    width: 80%;
    margin: 10px auto;
    grid-template-columns: auto;
    grid-gap: 5px;

  }



</style>
