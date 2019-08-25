<template>
  <div class="component quote-adder">
    <label for="qt">Quote</label>
    <textarea name="quote" id="qt" cols="50" rows="5" v-model.lazy="newQuote" ref="textarea"></textarea>
    <button @click="addQuote">Add Quote</button>
  </div>


</template>

<script>
    export default {
        name: "QuoteAdder",
        props: ['quotes'],
        data() {
            return {
              newQuote: ''
            }
        },
        methods: {
            addQuote() {
                if (this.quotes.length >= 10 && this.$refs.textarea.value !== '') {
                    alert('Stop! Too many quotes added');
                    this.$refs.textarea.value = '';
                    return;
                }

                if (this.$refs.textarea.value !== '') {
                    this.quotes.push(this.newQuote);
                    this.$refs.textarea.value = '';
                }


            }
        }
    }
</script>

<style scoped>
  .quote-adder {
      justify-self: center;
  }

  label {
    display: block;
    margin: 20px 0;
    font-size: 1rem;
    font-weight: bold;
  }

  button {
    display: block;
    margin: 10px auto;
    background-color: cornflowerblue;
    padding: 5px;
  }



</style>
