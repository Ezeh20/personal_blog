import React from 'react'
import PropTypes from 'prop-types'
import styles from './container.module.scss'

function Container({ children }) {
  return <div className={styles.container}>{children}</div>
}

export default Container
Container.propTypes = {
  children: PropTypes.node,
}
