import { useState } from 'react'
import { TextType, ITimeSeriesItem } from '../../types/global-types'
import { EditableText } from '../editable-text/EditableText'
import styles from './styles.module.css'

interface ITimeSeriesItemProps {
  timeSeriesItem: ITimeSeriesItem
}

export const TimeSeriesItem = (props: ITimeSeriesItemProps) => {
  const { timeSeriesItem } = props
  const { dateRange, desigOrDegree, institute, details } = timeSeriesItem
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
        text={dateRange}
        textType={TextType.boldLeft}
        rows={2}
        cols={12}
      />
      <div className={styles.bodyRight}>
        <EditableText
          text={desigOrDegree}
          textType={TextType.subTitle}
          rows={1}
          cols={32}
        />
        <EditableText
          text={institute}
          textType={TextType.subText}
          rows={1}
          cols={32}
        />
        <ul>
          {details
            ? details.map((detailItem) => {
                return (
                  <>
                    {detailItem ? (
                      <li>
                        <EditableText
                          text={detailItem}
                          textType={TextType.none}
                          rows={3}
                          cols={44}
                        />
                      </li>
                    ) : null}
                  </>
                )
              })
            : null}
        </ul>
      </div>
    </div>
  )
}
