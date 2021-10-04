import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import projectStyles from '../style.module.css'
import styles from './null-feel-connect.module.css'

const NullFeelConnect = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>NullFeel - Connect</title>
        <meta
          name="description"
          content="Connect with me in Telegram, LinkedIn, GitHub, Email"
        />
        <meta property="og:title" content="NullFeel - Connect" />
        <meta
          property="og:description"
          content="Connect with me in Telegram, LinkedIn, GitHub, Email"
        />
      </Helmet>
      <Navbar rootClassName="rootClassName"></Navbar>
      <div className={styles['Contact']}>
        <span className={styles['text']}>Connect with me</span>
        <div className={styles['BtnGroup']}>
          <a
            href="https://www.linkedin.com/in/bima-marta-s-3b3269213"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link']}
          >
            <div
              className={` ${styles['LinkedIn']} ${projectStyles['thqLink']} `}
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className={styles['icon']}
              >
                <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
              </svg>
              <span
                className={` ${styles['text1']} ${projectStyles['contact-text']} `}
              >
                <span>linkedin.com/bima-marta-s-3b3269213</span>
              </span>
            </div>
          </a>
          <a
            href="https://github.com/nullfeel"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link1']}
          >
            <div
              className={` ${styles['GitHub']} ${projectStyles['thqLink']} `}
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className={styles['icon2']}
              >
                <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
              </svg>
              <span
                className={` ${styles['text3']} ${projectStyles['contact-text']} `}
              >
                <span>github.com/nullfeel</span>
              </span>
            </div>
          </a>
          <a
            href="https://t.me/nullfeel_dev"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link2']}
          >
            <div
              className={` ${styles['Telegram']} ${projectStyles['thqLink']} `}
            >
              <svg viewBox="0 0 1024 1024" className={styles['icon4']}>
                <path d="M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"></path>
              </svg>
              <span
                className={` ${styles['text5']} ${projectStyles['contact-text']} `}
              >
                <span>t.me/nullfeel_dev</span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NullFeelConnect
