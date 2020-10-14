<template>
  <div>
    <!-- Currency picker -->
    <el-form :inline="true" :model="form">
      <el-form-item>
        <el-input v-model="form.amountFrom" type="number" min="0">{{ form.amountFrom }}</el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="form.rateFrom" :options="select.rates" placeholder="Please select...">
          <el-option
            :options="select.rates"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-form :inline="true" :model="form">
      <el-form-item>
        <el-input v-model="form.amountTo" type="number" min="0">{{ form.amountTo }}</el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="form.rateTo" :value="select.rates.value" placeholder="Please select...">
          <el-option
            :options="select.rates"
          ></el-option>
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
        rateFrom: "EUR",
        amountTo: 4.87,
        rateTo: "MYR"
      },
      select: {
        rates: []
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
