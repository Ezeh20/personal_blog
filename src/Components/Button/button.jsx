import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.scss'

function Button({ children, variant, type = 'button', onClick }) {
  return (
    <button
      className={`${styles.button}  ${styles[variant]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
}
