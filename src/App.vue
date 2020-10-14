<template>
  <div id="app">
    <el-row gutter=20 type="flex" justify="center">
      <el-card class="box-card">
        <div slot="header" class="header">
          <h2>Currency Converter</h2>
        </div>
        <currency-form/>
        <currency-results/>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import CurrencyForm from "./components/CurrencyForm.vue";
import CurrencyResults from "./components/CurrencyResults.vue";

export default {
  name: "app",
  components: {
    CurrencyForm,
    CurrencyResults
  }
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
  &:last-child {
    margin-bottom: 0;
  }
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
</style>
