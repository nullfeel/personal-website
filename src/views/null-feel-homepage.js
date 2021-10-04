import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import projectStyles from '../style.module.css'
import styles from './null-feel-homepage.module.css'

const NullFeelHomepage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>NullFeel - Homepage</title>
        <meta name="description" content="Heiiiiiiii" />
        <meta property="og:title" content="NullFeel - Homepage" />
        <meta property="og:description" content="Heiiiiiiii" />
      </Helmet>
      <Navbar></Navbar>
      <div className={styles['Hei']}>
        <div className={styles['Container1']}>
          <span className={styles['Text']}></span>
          <span className={styles['text01']}>HeYY there, its me</span>
          <span className={styles['text02']}>nullfeel</span>
          <span className={styles['text03']}>
            <span>
              Hello, welcome to my personal website.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span></span>
            <span>
              Im a student in Indonesia, currently im just trying diffrents
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              technology,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span></span>
            <span>
              i like learning new things, im always exited about how
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>technology change and improve every month and year.</span>
          </span>
        </div>
      </div>
      <div className={styles['Showcase']}>
        <span className={styles['text11']}>
          <span className={styles['text12']}>What</span>
          <span className={styles['text13']}> i&apos;ve</span>
          <span className={styles['text14']}>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text15']}>been</span>
          <span className={styles['text16']}> make</span>
        </span>
        <div className={styles['Container2']}>
          <a
            href="https://github.com/nullfeel/bmkg-info"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link']}
          >
            <div
              className={` ${styles['container3']} ${projectStyles['thqLink']} `}
            >
              <div className={styles['Content']}></div>
              <span className={styles['text17']}>bmkg cli (bash)</span>
            </div>
          </a>
          <div className={styles['container4']}>
            <div className={styles['Content1']}></div>
            <span className={styles['text18']}>
              yorushika landing page (html)
            </span>
          </div>
          <a
            href="https://github.com/nullfeel/contactme-web"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link1']}
          >
            <div
              className={` ${styles['container5']} ${projectStyles['thqLink']} `}
            >
              <div className={styles['Content2']}></div>
              <span className={styles['text19']}>
                contactme - web (flutter)
              </span>
            </div>
          </a>
        </div>
      </div>
      <span className={styles['text20']}>
        ⚠️THIS WEBSITE IS UNDERCONSTRUCTION
      </span>
    </div>
  )
}

export default NullFeelHomepage
