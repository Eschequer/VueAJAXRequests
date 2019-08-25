<template>
    <div class="component progression-bar">
      <div class="content" v-show="counter" :style="{width: counter * 10 + '%'}">{{counter}}/10</div>
    </div>
</template>

<script>
    export default {
        name: "ProgressionBar",
        props: ['quotes'],
        data() {
            return {

            }
        },
        computed: {
            counter() {
              return this.quotes.length;
            }
        }
    }
</script>

<style scoped>

  .progression-bar {
    height: 20px;
    background-color: lightgrey;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .content {
    height: 100%;
    width: 10%;
    background-color: teal;
    text-align: center;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    transition: width 2s;
  }
</style>
