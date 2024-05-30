import { useState } from 'react'
import { ISkill, TextType } from '../../types/global-types'
import { EditableText } from '../editable-text/EditableText'
import styles from './styles.module.css'
import { levels } from '../../screens/resume-builder/const'

interface SkillProps {
  skill: ISkill
}

export const Skill = (props: SkillProps) => {
  const { skill } = props
  const { name, level } = skill
  const [localLevel, setLocalLevel] = useState(level)
  const [hovered, setHovered] = useState(false)
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const onMouseEnter = () => {
    setHovered(true)
  }
  const onMouseLeave = () => {
    setHovered(false)
    setDropdownVisible(false)
  }

  const getBarWidth = (level: string) => {
    switch (level) {
      case levels.expert:
        return 200
      case levels.good:
        return 150
      case levels.average:
        return 100
      case levels.beginner:
        return 50
    }
  }

  const onBarClick = () => {
    setDropdownVisible(!dropdownVisible)
    setHovered(false)
  }

  const onLevelSet = (level: string) => {
    setLocalLevel(level)
    setDropdownVisible(false)
  }

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        borderRadius: 10,
        padding: 10,
        backgroundColor: hovered ? 'lightgray' : 'transparent'
      }}
    >
      <EditableText
        text={name}
        textType={TextType.subTitle}
        rows={1}
        cols={14}
      />
      <div
        className={styles.bar}
        style={{ width: getBarWidth(localLevel) }}
        onClick={onBarClick}
      />
      <div className={styles.textSkill} onClick={onBarClick}>
        {localLevel}
      </div>
      {dropdownVisible ? (
        <div className={styles.dropdown}>
          <>
            <div
              className={styles.dropdownItem}
              onClick={() => onLevelSet(levels.expert)}
            >
              {levels.expert}
            </div>
            <div
              className={styles.dropdownItem}
              onClick={() => onLevelSet(levels.good)}
            >
              {levels.good}
            </div>
            <div
              className={styles.dropdownItem}
              onClick={() => onLevelSet(levels.average)}
            >
              {levels.average}
            </div>
            <div
              className={styles.dropdownItem}
              onClick={() => onLevelSet(levels.beginner)}
            >
              {levels.beginner}
            </div>
          </>
        </div>
      ) : null}
    </div>
  )
}
