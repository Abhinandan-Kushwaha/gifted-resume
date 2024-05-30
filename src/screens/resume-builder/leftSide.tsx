import React from 'react'
import styles from './styles.module.css'
import { EditableText } from '../../components/editable-text/EditableText'
import {
  defaultLabels,
  educations,
  experiences,
  openSources,
  projects
} from './const'
import { TextType } from '../../types/global-types'
import { TimeSeriesItem } from '../../components/time-series-item/TimeSeriesItem'
import { ItemWithHeader } from '../../components/item-with-header/ItemWithHeader'

export const LeftSide = () => {
  return (
    <div className={styles.left}>
      <div className={styles.header}>
        <img
          className={styles.icon}
          src={require('../../assets/images/work.png')}
          alt=''
        />
        <EditableText
          text={defaultLabels.workExp}
          textType={TextType.h2}
          rows={1}
          cols={30}
        />
      </div>

      {experiences.map((experience) => (
        <TimeSeriesItem timeSeriesItem={experience} />
      ))}

      <div className={styles.header}>
        <img
          className={styles.icon}
          src={require('../../assets/images/edu.png')}
          alt=''
        />
        <EditableText
          text={defaultLabels.education}
          textType={TextType.h2}
          rows={1}
        />
      </div>
      {educations.map((education) => (
        <TimeSeriesItem timeSeriesItem={education} />
      ))}

      <div className={styles.header}>
        <img
          className={styles.icon}
          style={{ height: 40 }}
          src={require('../../assets/images/pin.png')}
          alt=''
        />
        <EditableText
          text={defaultLabels.projects}
          textType={TextType.h2}
          rows={1}
        />
      </div>
      <div className={styles.mainBody}>
        <ul>
          {projects.map((project) => (
            <ItemWithHeader item={project} />
          ))}
        </ul>
      </div>

      <div className={styles.header}>
        <img
          className={styles.icon}
          style={{ height: 36 }}
          src={require('../../assets/images/code.png')}
          alt=''
        />
        <EditableText
          text={defaultLabels.openSource}
          textType={TextType.h2}
          rows={1}
        />
      </div>
      <div className={styles.mainBody}>
        <ul>
          {openSources.map((openSource) => (
            <ItemWithHeader item={openSource} />
          ))}
        </ul>
      </div>
    </div>
  )
}
