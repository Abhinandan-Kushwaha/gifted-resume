import { useState } from 'react'
import { TextType, IItemWithHeader } from '../../types/global-types'
import { EditableText } from '../editable-text/EditableText'
import styles from './styles.module.css'

interface ItemWithHeaderProps {
  item: IItemWithHeader
}

export const ItemWithHeader = (props: ItemWithHeaderProps) => {
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
    <div
      className={styles.mainBody}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ backgroundColor: hovered ? 'lightgray' : 'transparent' }}
    >
      <li>
        <EditableText
          text={header}
          textType={TextType.bold}
          rows={1}
          cols={40}
        />
        {text ? (
          <EditableText text={text} textType={TextType.none} cols={50} />
        ) : null}
      </li>
    </div>
  )
}
