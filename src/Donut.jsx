import React from 'react'
import PropTypes from 'prop-types'
import { arc } from 'd3-shape'

import DonutLabel from './DonutLabel'
import DonutEndcap from './DonutEndcap'

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
      <DonutLabel label={metric.name} radius={radius} />
      <path d={path} fill={getArcColor(i)} key={metric.name} />
      <DonutEndcap
        x={x}
        y={y}
        color={getArcColor(i)}
        percentage={getPercentage(metric.value)}
      />
    </>
  )
}

Donut.propTypes = {
  metric: PropTypes.object,
  i: PropTypes.number
}

export default Donut
