import { useState } from 'react'
import { defaultLabels } from '../../screens/resume-builder/const'
import { TextType } from '../../types/global-types'
import { EditableText } from '../editable-text/EditableText'
import styles from './styles.module.css'

export const SocialContacts = () => {
  const [hovered, setHovered] = useState(false)

  const onMouseEnter = () => {
    setHovered(true)
  }
  const onMouseLeave = () => {
    setHovered(false)
  }
  return (
    <div
      className={styles.mainBody}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ backgroundColor: hovered ? 'lightgray' : 'transparent' }}
    >
      <EditableText
        text={defaultLabels.social}
        textType={TextType.subTitle}
        rows={1}
        cols={14}
      />
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
    </div>
  )
}
