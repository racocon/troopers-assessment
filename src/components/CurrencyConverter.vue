<template>
  <div class="results">
    <el-row>
      <el-form :inline="true" :model="form">
        <!-- User input for amount to convert -->
        <el-form-item label>
          <el-input
            v-model="form.amount"
            type="number"
            min="0"
            placeholder="Enter amount..."
            style="width:100px; margin: 10px; float:left;"
          ></el-input>
        </el-form-item>
        <!-- User input for which currency to convert from -->
        <el-form-item label>
          <el-select
            v-model="form.currency"
            placeholder="Select currency..."
            style="width:150px; margin: 10px; float:right;"
          ></el-select>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row>
      <!-- Search bar to filter from currency table list -->
      <el-input
        v-model="search"
        placeholder="Search currency..."
        class="filter-item"
        size="mini"
        style="width:210px; float:left;"
      ></el-input>
    </el-row>
    <el-row>
      <!-- Table with all the available currency list from API -->
      <el-table
        :data="tableData.filter(data => !search || data.currency.toLowerCase().includes(search.toLowerCase()) || data.code.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column prop="currency" label="Currency" width="200"></el-table-column>
        <el-table-column prop="code" label="Code" width="150" align="right"></el-table-column>
        <el-table-column prop="rate" label="Rate" width="150" align="right"></el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        amount: 1,
        currency: "EUR"
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
          rate: "4.8700"
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
.form {
  margin-bottom: 0;
}
.filter-item {
  font-family: 'Helvetica', FontAwesome, sans-serif;
}
</style>
