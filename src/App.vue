<template>
  <div id="app">
    <el-row gutter:20 type="flex" justify="center">
      <el-card class="box-card">
        <div slot="header" class="header">
          <h2 class="h2">Currency Converter</h2>
            <p class="details">
              <i class="el-icon-date"></i>
                {{ moment().format('Do MMMM YYYY') }}
            </p>
        </div>
        <currency-converter/>
      </el-card>
    </el-row>
    <test/>
  </div>
</template>

<script>
import CurrencyConverter from "./components/CurrencyConverter.vue";
import moment from "moment";

export default {
  name: "app",
  components: {
    CurrencyConverter
  },
  methods: {
  moment: function () {
    return moment();
  }
},
};

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  background: rgb(53, 92, 125);
  background: linear-gradient(
    30deg,
    rgba(53, 92, 125, 1) 0%,
    rgba(108, 91, 123, 1) 50%,
    rgba(192, 108, 132, 1) 100%
  );
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-white {
  background: #fefefe;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.box-card {
  width: 550px;
}
.h2 {
  color: #34495e;
  padding: 5px;
}
.details {
  color: #535c68;
  text-align: center;
  font-size: 14px;
}
</style>
