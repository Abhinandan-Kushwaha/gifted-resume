import { ReactElement, useState } from 'react'
import { EditableText } from '../../../components/editable-text/EditableText'
import { TextType } from '../../../types/global-types'
import styles from '../styles.module.css'
import { DeletionPopup } from '../../../components/DeletionPopup/deletion-popup'
import { defaultLabels } from '../const'

interface SectionProps {
  iconPath: any
  headerText: string
  content: Function
  onDelete: () => void
}

export const ExperienceOrEduSection = (props: SectionProps) => {
  const { iconPath, headerText, content, onDelete } = props
  const [hovered, setHovered] = useState(false)
  const [deletionPopupVisible, setDeletionPopupVisible] = useState(false)

  const onMouseEnter = () => {
    setHovered(true)
  }
  const onMouseLeave = () => {
    setHovered(false)
  }

  const onCrossClicked = () => {
    setDeletionPopupVisible(true)
  }
  return (
    <div style={{ position: 'relative' }}>
      <div
        className={styles.header}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ backgroundColor: hovered ? 'lightgray' : 'transparent' }}
      >
        <img className={styles.icon} src={iconPath} alt='' />
        <EditableText
          text={headerText}
          textType={TextType.h2}
          rows={1}
          cols={30}
        />
      </div>
      {hovered ? (
        <img
          src={require('../../../assets/images/delete.png')}
          className={styles.deleteIcon}
          onClick={onCrossClicked}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ) : null}
      {content()}
      {deletionPopupVisible ? (
        <DeletionPopup
          sectionName={defaultLabels.workExp}
          setDeletionPopupVisible={setDeletionPopupVisible}
          onDelete={onDelete}
        />
      ) : null}
    </div>
  )
}
