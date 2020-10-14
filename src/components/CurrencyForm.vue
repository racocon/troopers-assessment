<template>
  <div>
    <!-- Currency picker -->
    <el-form :inline="true" :model="form">
      <el-form-item>
        <el-input v-model="form.amountFrom" type="number" min="0">{{ form.amountFrom }}</el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="form.rateFrom" :options="select.rates" placeholder="Please select..."></el-select>
      </el-form-item>
    </el-form>
    <el-form :inline="true" :model="form">
      <el-form-item>
        <el-input v-model="form.amountTo" type="number" min="0">{{ form.amountTo }}</el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="form.rateTo" :value="select.rates.value" placeholder="Please select...">
          <el-option
            v-for="id in select.rates"
            :key="id"
            :label="select.rates.label"
            :value="select.rates.id"
          >
          {{'Data ' + select.rates.id }}
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CurrencyForm",
  data() {
    return {
      form: {
        amountFrom: 1,
        rateFrom: "",
        amountTo: 5.36,
        rateTo: ""
      },
      select: {
        rates: [
          { id: 1, value: "GBP", label: "GBP" },
          { id: 2, value: "USD", label: "USD" },
          { id: 3, value: "MYR", label: "MYR" }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["rates"])
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

.header a {
  color: #fafafa;
  padding-right: 5px;
}
</style>
