import React from 'react'
import PropTypes from 'prop-types'

const DonutLabel = ({label, radius}) => (
  <text
    fontSize="12"
    fontFamily="Arial, Helvetica, sans-serif"
    y={5 - radius}
    x={5}
  >
    {label.toUpperCase()}
  </text>
)

DonutLabel.propTypes = {
  label: PropTypes.string,
  radius: PropTypes.number
}

export default DonutLabel