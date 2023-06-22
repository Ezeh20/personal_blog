import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styles from './navigation.module.scss'
import Container from '../../Components/Container'
import AuthUi from './authUi/auth'
import menuOptions from './data'

function Navigation() {
  const [toggle, setToggle] = useState(false)
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span>2</span>
            <img
              src="/public/assets/cent-animated.svg"
              alt="logo"
              className={styles.logoSize}
            />
            <span className={styles.cents}>ents</span>
          </div>
          <menu
            className={
              toggle
                ? `${styles.menuOptions} ${styles.menuOptionsAlt}`
                : `${styles.menuOptions}`
            }
          >
            <ul className={styles.ul}>
              {menuOptions.map((itm) => {
                const { id, name, to } = itm
                return (
                  <Link key={id} to={to} className={styles.link}>
                    <li className={styles.list}> {name}</li>
                  </Link>
                )
              })}
            </ul>
            <AuthUi />
          </menu>
          {toggle ? (
            <AiOutlineClose
              className={styles.menuBar}
              onClick={() => setToggle((prev) => !prev)}
            />
          ) : (
            <AiOutlineMenu
              className={styles.menuBar}
              onClick={() => setToggle((prev) => !prev)}
            />
          )}
        </nav>
      </Container>
    </header>
  )
}

export default Navigation
