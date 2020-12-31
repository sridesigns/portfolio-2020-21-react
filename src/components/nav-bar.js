import React from 'react'
import { Link } from 'react-router-dom'

import projectStyles from '../style.module.css'
import styles from './nav-bar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <img
            src="/playground_assets/logo.svg"
            className={` ${projectStyles.thqImage} ${styles.image} `}
          />
        </div>
        <div className={styles.div}>
          <span className={styles.text}>
            <span className={styles.text1}>Work</span>
          </span>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className={` ${projectStyles.thqLink} ${styles.span} `}
          >
            <span className={styles.text2}>Play</span>
          </a>
          <Link to="/about-me" className={` ${projectStyles.thqLink} ${styles.text3} `}>
            About
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
