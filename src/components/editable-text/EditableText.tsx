import React, { useState } from 'react'
import { EditableTextProps } from './editable-text-types'
import styles from './styles.module.css'
import { TextType } from '../../types/global-types'

export const EditableText = (props: EditableTextProps) => {
  const { textType, text, rows = 2, cols = 20 } = props
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(text)
  const [hovered, setHovered] = useState(false)

  const onMouseEnter = () => {
    setHovered(true)
  }
  const onMouseLeave = () => {
    setHovered(false)
  }

  const onTextClick = () => {
    setHovered(false)
    setIsEditing(true)
  }

  const getStyle = () => {
    switch (textType) {
      case TextType.h1:
        return styles.title
      case TextType.h2:
        return styles.headerText
      case TextType.italicBoldDesc:
        return styles.description
      case TextType.bold:
        return styles.bold
      case TextType.boldLeft:
        return styles.boldLeft
      case TextType.subTitle:
        return styles.subTitle
      case TextType.subText:
        return styles.subText
      case TextType.centered:
        return styles.centered
      case TextType.none:
        return ''
    }
  }

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setIsEditing(false)
    }
  }

  return (
    <>
      {isEditing ? (
        <textarea
          autoFocus
          onFocus={(e) => e.target.select()}
          rows={rows}
          cols={cols}
          className={getStyle()}
          value={value}
          onChange={onTextChange}
          onBlur={() => setIsEditing(false)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <div
          className={getStyle()}
          onClick={onTextClick}
          style={{ backgroundColor: hovered ? '#eef' : 'transparent' }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {value}
        </div>
      )}
    </>
  )
}
