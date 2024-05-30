import { useState } from 'react'
import { TextType, IItemWithHeader } from '../../types/global-types'
import { EditableText } from '../editable-text/EditableText'
import styles from './styles.module.css'

interface ItemWithHeaderProps {
  item: IItemWithHeader
  items: IItemWithHeader[]
  setItems: Function
  index: number
}

export const ItemWithHeader = (props: ItemWithHeaderProps) => {
  const { item, items, setItems, index } = props
  const { header, text } = item
  const [hovered, setHovered] = useState(false)

  const onMouseEnter = () => {
    setHovered(true)
  }
  const onMouseLeave = () => {
    setHovered(false)
  }

  const onCrossClicked = () => {
    setHovered(false)
    let newItems: IItemWithHeader[] = JSON.parse(JSON.stringify(items))
    const a1 = newItems.slice(0, index) ?? []
    const a2 = newItems.slice(index + 1) ?? []
    newItems = a1.concat(a2)
    setItems(newItems)
  }

  return (
    <div
      className={styles.mainBody}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ backgroundColor: hovered ? 'lightgray' : 'transparent' }}
    >
      <li style={{ position: 'relative' }}>
        <EditableText
          text={header}
          textType={TextType.bold}
          rows={1}
          cols={40}
        />
        {text ? (
          <EditableText text={text} textType={TextType.none} cols={50} />
        ) : null}
        {hovered ? (
          <img
            src={require('../../assets/images/delete.png')}
            className={styles.deleteIcon}
            onClick={() => onCrossClicked()}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        ) : null}
      </li>
    </div>
  )
}
