import React from 'react'
import ReactDOM from 'react-dom'
import DonutChart from './DonutChart.jsx'

const data = [
  {
    value: 0.78,
    name: 'Burn Rate'
  },
  {
    value: 0.75,
    name: 'Money Spent'
  },
  {
    value: 0.58,
    name: 'Time Used'
  }
]

ReactDOM.render(<DonutChart data={data} />, document.getElementById('root'))
