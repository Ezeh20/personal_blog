import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import styles from './layout.module.scss'

function Layout({ children }) {
  return (
    <div className={styles.Layout}>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
Layout.propTypes = {
  children: PropTypes.node,
}
