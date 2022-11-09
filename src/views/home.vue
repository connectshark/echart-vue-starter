<template>
  <main id="chart" ref="chartRef">
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useChart } from '../composables/chart-core'

const chartRef = ref(null)
const data = ref([
  ['product', '2015', '2016', '2017'],
  ['Matcha Latte', 43.3, 85.8, 93.7],
  ['Milk Tea', 83.1, 73.4, 55.1],
  ['Cheese Cocoa', 86.4, 65.2, 82.5],
  ['Walnut Brownie', 72.4, 53.9, 39.1]
])
onMounted(() => {
  useChart({
    target: chartRef.value,
    data
  })
})

</script>

<style lang="scss" scoped>
main {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>