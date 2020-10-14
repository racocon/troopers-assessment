<template>
  <div class="results">
    <!-- <h4 class="h4">1 Euro equals</h4>
      <h1 class="h1">4.87 Malaysian Ringgit</h1>
      <el-row>
        <el-col>
            <p class="details">
                1 EUR = 4.87 MYR
            </p>
            <p class="details">
                currentDateTime
            </p>
        </el-col>
    </el-row>-->
    <el-row>
      <el-input
        v-model="form.amount"
        type="number"
        min="0"
        placeholder="Enter amount..."
        style="width:200px; margin: 10px; float:left;"
      ></el-input>
      <el-input
        v-model="search"
        placeholder="Search currency..."
        class="filter-item"
        style="width:200px; margin: 10px; float:right;"
      ></el-input>
      <el-table
        :data="tableData.filter(data => !search || data.currency.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column prop="currency" label="Currency" width="250"></el-table-column>
        <el-table-column prop="code" label="Code" width="150"></el-table-column>
        <el-table-column prop="rate" label="Rate" width="150"></el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        amount: 1
      },
      tableData: [
        {
          currency: "Euro",
          code: "EUR",
          rate: "1.0000"
        },
        {
          currency: "Malaysian Ringgit",
          code: "MYR",
          rate: "4.87"
        },
        {
          currency: "Canadian Dollar",
          code: "CAD",
          rate: "1.5450"
        },
        {
          currency: "United States Dollar",
          code: "USD",
          rate: "1.1787"
        },
        {
          currency: "Australian Dollar",
          code: "AUD",
          rate: "1.6403"
        }
      ],
      search: ""
    };
  }
};
</script>

<style scoped>
.header {
  color: #535c68;
  text-align: left;
  padding: 5px;
  margin-left: 30px;
}
.h1 {
  color: #535c68;
  padding: 5px;
}
.h4 {
  color: #95a5a6;
  font-size: 16px;
}
.details {
  color: #535c68;
  text-align: center;
  font-size: 14px;
}
.header a {
  color: #fafafa;
  padding-right: 5px;
}
</style>
