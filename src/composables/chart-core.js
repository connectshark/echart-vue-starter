import * as echarts from 'echarts'
import { isRef, onBeforeUnmount, watchEffect } from 'vue'

const useChart = ({ target, data }) => {
  const myChart = echarts.init(target)
  const option = {
    title: {
      text: 'ECharts 入門'
    },
    legend: {},
    tooltip: {},
    dataset: {
      source: data.value
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  }
  // 绘制图表
  myChart.setOption(option)


  if (isRef(data)) {
    watchEffect(() => {
      myChart.setOption({
        dataset: {
          source: data.value
        }
      })
    })
  }

  window.addEventListener('resize', () => {
    myChart.resize()
  })
  onBeforeUnmount(() => {
    myChart.dispose()
  })
}

export {
  useChart
}