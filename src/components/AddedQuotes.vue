<template>
  <div class="component">
    <div class="added-quotes">
      <div v-for="(quote, index) in quotes" class="quote" @click="deleteQuote(index)">{{quote}}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "AddedQuotes",
        props: ['quotes'],
        methods: {
            deleteQuote(quote) {
                this.$emit('delete:quote', quote);
            }
        }

    }
</script>

<style scoped>
.added-quotes {
  display: flex;
  flex-wrap: wrap;
}

.quote {
  padding: 10px;
  border: 1px solid #000;
  margin-right: 10px;
  margin-bottom: 10px;
  font: 1.5em "Curlz MT", sans-serif;
  min-width: 100px;
}

.info {
  background-color: lightblue;
  padding: 10px;
  text-align: center;
}
</style>
