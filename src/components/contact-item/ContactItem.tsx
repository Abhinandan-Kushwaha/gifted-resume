import { useState } from 'react'
import { TextType, IContactItem } from '../../types/global-types'
import { EditableText } from '../editable-text/EditableText'
import styles from './styles.module.css'

interface IContactItemProps {
  item: IContactItem
}

export const ContactItem = (props: IContactItemProps) => {
  const { item } = props
  const { header, text } = item
  const [hovered, setHovered] = useState(false)

  const onMouseEnter = () => {
    setHovered(true)
  }
  const onMouseLeave = () => {
    setHovered(false)
  }
  return (
    <li
      className={styles.mainBody}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ backgroundColor: hovered ? 'lightgray' : 'transparent' }}
    >
      <EditableText
        text={header}
        textType={TextType.subTitle}
        rows={1}
        cols={14}
      />
      <EditableText text={text} textType={TextType.none} rows={3} cols={14} />
    </li>
  )
}
