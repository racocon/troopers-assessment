<template>
  <div class="results">
    <el-row>
        <!-- User input for amount to convert -->
          <currency-input
            v-currency-field
            v-model="amount"
            min="1"
            placeholder="Enter amount..."
            style="width:30%; height:24px; color: #535c68; margin: 10px; float:middle;"
          > {{ exchangeRates.base }}</currency-input>
          <span class="euro">EUR</span>

        <!-- User input for which currency to convert from -->
          <!-- <el-select
            v-model="selectedCurrency"
            placeholder="Select currency..."
            style="width:180px; margin: 10px; float:middle;"
          >
          <el-option 
            v-for="(rate, key) in convertedRates"
            :key="key" 
            :label="key" 
            :value="key" />
          </el-select> -->
    </el-row>
    <!-- <el-row> -->
      <!-- Search bar to filter from currency table list -->
      <!-- <el-input
        v-model="search"
        placeholder="Search currency..."
        class="filter-item"
        size="mini"
        style="width:50%; float:middle;"
      ></el-input>
    </el-row> -->
    <el-row>
      <!-- List all the currencies from API -->
      <el-card v-for="(rate, key) in convertedRates"
          :key="key"
          class="box-card">
        <div>
          {{ key }} : {{ rate }}
        </div>
      </el-card>

    </el-row>
  </div>
</template>

<script>
import {
  ref,
  computed,
  onUnmounted,
  onBeforeMount
} from '@vue/composition-api'

import { getLatest } from '@/api/exchange-rates'

// A function that takes the amount and rates and returns an mapped object containing the result for each rate
const convertExchangeRates = (amount, exchangeRates) => {
  if (!exchangeRates.value.rates || !Object.keys(exchangeRates.value.rates).length) {
    return {}
  }

  return Object.keys(exchangeRates.value.rates)
    .reduce((rates, key) => {
      const rate = exchangeRates.value.rates[key] * amount.value

      rates[key] = rate.toFixed(2)

      return rates
    }, {})
}

export default {
  setup () {
    let interval
    const exchangeRates = ref({})
    // The amount is reactive since it will be used in a v-model
    const amount = ref(0)

    // The computed value calls the convertExchangeRates function
    const convertedRates = computed(() => convertExchangeRates(amount, exchangeRates))

    onBeforeMount(() => {
      interval = setInterval(async () => {
        exchangeRates.value = await getLatest()
      }, 1000)
    })

    onUnmounted(() => {
      if (interval) {
        clearInterval(interval)
      }
    })

    return {
      exchangeRates,
      amount,
      convertedRates,
      selectedCurrency: "",
      search: ""
    }
  }
}
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
.euro {
  color: #535c68;
  font-size: 20px;
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
.box-card {
  color: #535c68;
  width: 100%;
}
</style>
