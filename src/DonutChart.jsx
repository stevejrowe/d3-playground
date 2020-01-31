import React from 'react'
import PropTypes from 'prop-types'

import Donut from './Donut.jsx'

const DonutChart = ({data}) => {
  return (
    <svg width="240" height="240">
      <g transform="translate(120, 120)">
        {data.map((metric, i) => (
          <Donut metric={metric} i={i} key={metric.name} />
        ))}
      </g>
    </svg>
  )
}

DonutChart.propTypes = {
  data: PropTypes.array
}

export default DonutChart
