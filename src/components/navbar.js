import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './navbar.module.css'

const Navbar = (props) => {
  return (
    <header className={` ${styles['Header']} ${styles[props.rootClassName]} `}>
      <nav className={styles['Nav']}>
        <span className={styles['text']}>{props.TOP}</span>
      </nav>
      <div className={styles['BtnGroup']}>
        <Link
          to="/"
          className={` ${styles['Home']} ${projectStyles['button']} ${projectStyles['thqLink']} `}
        >
          {props.Homepagebtn}
        </Link>
        <Link
          to="/null-feel-connect"
          className={` ${styles['Connect']} ${projectStyles['button']} ${projectStyles['thqLink']} `}
        >
          {props.Connectbtn}
        </Link>
      </div>
      <span className={styles['text1']}>{props.NULLFEEL}</span>
      <svg viewBox="0 0 1024 1024" className={styles['icon']}>
        <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
      </svg>
    </header>
  )
}

Navbar.defaultProps = {
  Homepagebtn: 'Homepage',
  rootClassName: '',
  NULLFEEL: 'NULLFEEL',
  Connectbtn: 'Connect',
  TOP: 'NULLFEEL',
}

Navbar.propTypes = {
  Homepagebtn: PropTypes.string,
  rootClassName: PropTypes.string,
  NULLFEEL: PropTypes.string,
  Connectbtn: PropTypes.string,
  TOP: PropTypes.string,
}

export default Navbar
