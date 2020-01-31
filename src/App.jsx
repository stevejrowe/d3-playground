import React from 'react'
import PropTypes from 'prop-types'
import { arc } from 'd3-shape'

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

const getPercentage = decimal => {
  return `${parseInt(decimal * 100)}%`
}

const getArcColor = i => {
  const colors = ['orange', 'red', '#ccc']

  return colors[i]
}

const Donut = ({ metric, i }) => {
  const width = 20
  const gap = 8
  const radius = 100 - (width + gap) * i
  const endAngle = Math.PI * 2 * (1 - metric.value)
  const x = radius * Math.sin(endAngle)
  const y = -radius * Math.cos(endAngle)
  const path = arc()({
    innerRadius: radius - width / 2,
    outerRadius: radius + width / 2,
    startAngle: Math.PI * 2,
    endAngle: endAngle
  })

  return (
    <>
      <text
        fontSize="12"
        fontFamily="Arial, Helvetica, sans-serif"
        y={5 - radius}
        x={5}
      >
        {metric.name.toUpperCase()}
      </text>
      <path d={path} fill={getArcColor(i)} key={metric.name} />
      <g transform={`translate(${x}, ${y})`}>
        <circle r="15" fill={getArcColor(i)} stroke="white" />
        <text
          fontSize="12"
          y="4"
          x="-10"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          {getPercentage(metric.value)}
        </text>
      </g>
    </>
  )
}

Donut.propTypes = {
  metric: PropTypes.object,
  i: PropTypes.number
}

const App = () => {
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

export default App
