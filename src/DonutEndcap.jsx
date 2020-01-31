import React from 'react'
import PropTypes from 'prop-types'

const DonutEndcap = ({ x, y, color, percentage }) => (
  <g transform={`translate(${x}, ${y})`}>
    <circle r="15" fill={color} stroke="white" />
    <text fontSize="12" y="4" x="-10" fontFamily="Arial, Helvetica, sans-serif">
      {percentage}
    </text>
  </g>
)

DonutEndcap.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  color: PropTypes.string,
  percentage: PropTypes.string
}

export default DonutEndcap
