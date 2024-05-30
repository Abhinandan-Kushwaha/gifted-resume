import React from 'react'
import styles from './styles.module.css'

export const ResumeBuilder = () => {
  return (
    <body>
      <h1 className={styles.title}>Abhinandan Kushwaha</h1>
      <p style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'italic' }}>
        With a knack for innovation and appetite for learning, I love problem
        solving and developing smart applications
      </p>

      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.header}>
            <img
              className={styles.icon}
              src={require('../../assets/images/work.png')}
              alt=''
            />
            <div className={styles.headerText}>
              Work History (4.5 years exp)
            </div>
          </div>

          <div className={styles.mainBody}>
            <div className={styles.bodyLeft}>2022-02 to Current</div>
            <div className={styles.bodyRight}>
              <div className={styles.subTitle}>Member Of Technical Staff</div>
              <div className={styles.subText}>ThoughtSpot</div>
              <ul>
                <li>
                  Front-end developer in the data modelling team, mainly
                  contributing to the worksheet creation flow using React and
                  GraphQL.
                </li>
                <li>
                  Developing and maintaining the ThoughtSpot mobile app using
                  React Native, Redux, GraphQL, etc
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.mainBody}>
            <div className={styles.bodyLeft}>2019-08 to 2022-02</div>
            <div className={styles.bodyRight}>
              <div className={styles.subTitle}>Senior Software Engineer</div>
              <div className={styles.subText}>GeekyAnts Software Pvt Ltd</div>
              <ul>
                <li>
                  Developing mobile applications using React Native, Redux, Node
                  JS, Mongo DB and Firebase
                </li>
                <li>
                  Full stack development, hands on experience in web development
                  too
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.mainBody}>
            <div className={styles.bodyLeft}>2019-01 to 2019-08</div>
            <div className={styles.bodyRight}>
              <div className={styles.subTitle}>Software Engineer Intern</div>
              <div className={styles.subText}>GeekyAnts Software Pvt Ltd</div>
            </div>
          </div>

          <div className={styles.header}>
            <img
              className={styles.icon}
              src={require('../../assets/images/edu.png')}
              alt=''
            />
            <div className={styles.headerText}>Education</div>
          </div>
          <div className={styles.mainBody}>
            <div className={styles.bodyLeft}>2015 to 2019</div>
            <div className={styles.bodyRight}>
              <div className={styles.subTitle}>
                Bachelor of Technology: Computer Science
              </div>
              <div className={styles.subText}>
                Rajkiya Engineering College Sonbhadra
              </div>
            </div>
          </div>

          <div className={styles.header}>
            <img
              className={styles.icon}
              style={{ height: 40 }}
              src={require('../../assets/images/pin.png')}
              alt=''
            />
            <div className={styles.headerText}>Projects</div>
          </div>
          <div className={styles.mainBody}>
            <ul>
              <li>
                <b>ThoughtSpot mobile app</b> using React Native, Redux,
                GraphQl, etc
              </li>
              <li>
                <b>Learning Management System</b> for Medical graduates using
                React Native, Node JS and MongoDB
              </li>
              <li>
                <b>
                  <a href='https://start.milaap.org/'>Milaap</a> Crowd funding
                  app
                </b>{' '}
                using React Native, Redux etc
              </li>
              <li>
                <b>Endlink Employee Communication App</b> using React Native,
                Firestore and GCP
              </li>
              <li>
                <a href='https://play.google.com/store/apps/details?id=com.ctranslator.abhinandan.ctojavatranslator&hl=en_IN&gl=US'>
                  C to JAVA Translator
                </a>{' '}
                Android app (Personal project during college)
              </li>
              <li>
                <a href='https://crosswordgame.web.app/'>Crossword</a> Online
                multiplayer game using React JS and Firebase (Personal project)
              </li>
            </ul>
          </div>

          <div className={styles.header}>
            <img
              className={styles.icon}
              style={{ height: 36 }}
              src={require('../../assets/images/code.png')}
              alt=''
            />
            <div className={styles.headerText}>Open Source</div>
          </div>
          <div className={styles.mainBody}>
            <ul>
              <li>
                <a href='https://www.npmjs.com/package/react-native-gifted-charts'>
                  <b>react-native-gifted-charts</b>
                </a>{' '}
                - A react native library for Bar, Line, Area, Pie, Donut and
                Stacked Bar charts in React Native. Allows 2D, 3D, gradient,
                animations and live data updates.
              </li>
              <li>
                <a href='https://www.npmjs.com/package/react-native-fireworks'>
                  <b>react-native-fireworks</b>
                </a>{' '}
                - A customizable firework like animation that can be used as a
                component in a react native project.
              </li>
              <li>
                <a href='https://github.com/Abhinandan-Kushwaha/TunnelAnimation'>
                  <b>TunnelAnimation</b>
                </a>{' '}
                - A custom React Native component that acts as a wrapper around
                a ListView or FlatList making it highly interactive and 3
                dimensional.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.header}>
            <img
              className={styles.icon}
              src={require('../../assets/images/contact.png')}
              alt=''
            />
            <div className={styles.headerText}>Contact</div>
          </div>

          <div className={styles.subTitle}>Address</div>
          <div className={styles.rightText}>
            #35, Bhuvanappa Layout, SG Palya, Bengaluru, Karnataka, India,
            560029
          </div>

          <div className={styles.subTitle}>Phone</div>
          <div className={styles.rightText}>+917081943252</div>

          <div className={styles.subTitle}>Email</div>
          <div className={styles.rightText}>kushabhi5@gmail.com</div>

          <div className={styles.subTitle}>Social</div>
          <div className={styles.social}>
            <a href='https://www.linkedin.com/in/abhinandan-kushwaha-42a15417a/'>
              <img
                src={require('../../assets/images/linked.png')}
                className={styles.icon}
                alt=''
              />
            </a>
            <a href='https://github.com/Abhinandan-Kushwaha'>
              <img
                src={require('../../assets/images/git.png')}
                className={styles.icon}
                alt=''
              />
            </a>
            <a href='https://www.npmjs.com/~ak_97'>
              <img
                src={require('../../assets/images/npm.jpg')}
                className={styles.icon}
                alt=''
              />
            </a>
          </div>

          <div className={styles.header} style={{ marginTop: 114 }}>
            <img
              className={styles.icon}
              style={{ height: 40 }}
              src={require('../../assets/images/bulb.png')}
              alt=''
            />
            <div className={styles.headerText}>Skills</div>
          </div>

          <div className={styles.subTitleSkill}>React Native</div>
          <div className={styles.bar} style={{ width: '100%' }}></div>
          <div className={styles.textSkill}>excellent</div>

          <div className={styles.subTitleSkill}>React JS</div>
          <div className={styles.bar} style={{ width: '80%' }}></div>
          <div className={styles.textSkill}>good</div>

          <div className={styles.subTitleSkill}>JavaScript</div>
          <div className={styles.bar} style={{ width: '90%' }}></div>
          <div className={styles.textSkill}>good</div>

          <div className={styles.subTitleSkill}>Node JS</div>
          <div className={styles.bar} style={{ width: '70%' }}></div>
          <div className={styles.textSkill}>average</div>

          <div className={styles.subTitleSkill}>Android</div>
          <div className={styles.bar} style={{ width: '60%' }}></div>
          <div className={styles.textSkill}>average</div>
        </div>
      </div>
    </body>
  )
}
