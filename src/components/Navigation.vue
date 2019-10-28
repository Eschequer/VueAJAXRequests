<template>
  <div class="component">
    <nav class="nav" >
      <a class="nav__home" @click="setComponent">Stock Trader</a>
      <a @click="setComponent">Portfolio</a>
      <a @click="setComponent">Stocks</a>
      <div @click="updateStocksPrice">End Day</div>
      <div class="nav__drop-down">Save & Load &#9662
        <div class="nav__drop-down-content">
          <span @click="saveData">Save Data</span>
          <span @click="loadData">Load Data</span>
        </div>
      </div>
      <div>Funds: ${{fundsVal.toLocaleString('de-DE')}}</div>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "Navigation",
        props: ['fundsVal'],
        methods: {
            setComponent(event) {
                this.$emit('setComponent', event.target.textContent)
            },
            updateStocksPrice() {
                this.$emit('updateStocksPrice');
            },
            saveData() {
                this.$emit('saveData');
            },
            loadData() {
                this.$emit('loadData')
            }
        }
    }
</script>

<style scoped lang="scss">
  .component {
    background: hsl(300, 9%, 95%);
    margin: 30px 0;
    border: 1px solid lightgrey;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;


    .nav {
      display: flex;
      align-items: stretch;
      margin: auto;
      flex-wrap: wrap;

      a{
        text-decoration: none;
        color: dimgrey;
        padding: 10px;
        display: block;

      }

      a:hover {
        background-color: hsl(200, 9%, 85%);
        cursor: pointer;
      }


      div {
        @extend a;

      }

      div:first-of-type {
        margin-left: auto;
      }

      .nav__home {
       font-size: 1.3em;
        padding: 7px;
      }



      .nav__drop-down {
        position: relative;


        &-content {
          position: absolute;
          display: none;
          background: white;
          top: 40px;
          left: 0;
          width: 150px;
          padding: 0 2px;

          span {
            padding: 5px 5px;
            width: 100%;
            display: inline-block;
          }

          span:hover {
            background-color: hsl(300, 9%, 95%);;
          }
        }
      }

    }

    .nav__drop-down:hover {
    }

    .nav__drop-down:hover .nav__drop-down-content {
      border: 1px solid lightgrey;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      display: block;
    }

    @media screen and (max-width: 750px) {
      .nav {
        display: block;
        width: 100%;

          & > a, div {
           text-align: center;
          }
      }

    }

  }

</style>
