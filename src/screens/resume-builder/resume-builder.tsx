import React from 'react'
import styles from './styles.module.css'
import { EditableText } from '../../components/editable-text/EditableText'
import { TextType } from '../../types/global-types'
import { defaultTextValues } from './const'
import { LeftSide } from './left-side/leftSide'
import { RightSide } from './rightSide'

export const ResumeBuilder = () => {
  const Header = () => {
    return (
      <>
        <EditableText
          text={defaultTextValues.name}
          textType={TextType.h1}
          rows={1}
        />
        <p>
          <EditableText
            text={defaultTextValues.description}
            textType={TextType.italicBoldDesc}
            rows={2}
            cols={60}
          />
        </p>
      </>
    )
  }

  return (
    <body>
      <Header />
      <div className={styles.container}>
        <LeftSide />
        <RightSide />
      </div>
    </body>
  )
}
