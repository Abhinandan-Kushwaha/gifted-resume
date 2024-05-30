import { useState } from 'react'
import { TextType, ITimeSeriesItem } from '../../types/global-types'
import { EditableText } from '../editable-text/EditableText'
import styles from './styles.module.css'

interface ITimeSeriesItemProps {
  timeSeriesItem: ITimeSeriesItem
  items: ITimeSeriesItem[]
  setItems: Function
  index: number
}

export const TimeSeriesItem = (props: ITimeSeriesItemProps) => {
  const { timeSeriesItem, items, setItems, index } = props
  const { dateRange, desigOrDegree, institute, details } = timeSeriesItem
  const [hovered, setHovered] = useState(false)

  const onMouseEnter = () => {
    setHovered(true)
  }
  const onMouseLeave = () => {
    setHovered(false)
  }

  const onCrossClicked = (detailIndex: number) => {
    setHovered(false)
    let newItems: ITimeSeriesItem[] = JSON.parse(JSON.stringify(items))
    if (newItems[index].details) {
      const a1 = newItems[index].details?.slice(0, detailIndex) ?? []
      const a2 = newItems[index].details?.slice(detailIndex + 1) ?? []
      newItems[index].details = a1.concat(a2)
      setItems(newItems)
    }
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
            ? details.map((detailItem, detailIndex) => {
                return (
                  <>
                    {detailItem ? (
                      <li style={{ position: 'relative' }}>
                        <EditableText
                          text={detailItem}
                          textType={TextType.none}
                          rows={3}
                          cols={44}
                        />
                        {hovered ? (
                          <img
                            src={require('../../assets/images/delete.png')}
                            className={styles.deleteIcon}
                            onClick={() => onCrossClicked(detailIndex)}
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                          />
                        ) : null}
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
