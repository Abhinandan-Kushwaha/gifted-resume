import { useState } from 'react'
import styles from '../styles.module.css'
import {
  defaultLabels,
  educations,
  experiences,
  openSources,
  projects
} from '../const'
import { TimeSeriesItem } from '../../../components/time-series-item/TimeSeriesItem'
import { ItemWithHeader } from '../../../components/item-with-header/ItemWithHeader'
import { ExperienceOrEduSection } from './experience-or-edu-section'

export const LeftSide = () => {
  const [experiencesVisible, setExperiencesVisible] = useState(true)
  const [educationsVisible, setEducationsVisible] = useState(true)
  const [projectsVisible, setProjectsVisible] = useState(true)
  const [osVisible, setOsVisible] = useState(true)

  const [experienceItems, setExperienceItems] = useState(experiences)
  const [educationItems, setEducationItems] = useState(educations)

  const [localProjects, setLocalProjects] = useState(projects)
  const [localOs, setLocalOs] = useState(openSources)

  const Experiences = () =>
    experienceItems.map((experience, index) => (
      <TimeSeriesItem
        timeSeriesItem={experience}
        items={experienceItems}
        setItems={setExperienceItems}
        index={index}
      />
    ))

  const Educations = () =>
    educationItems.map((education, index) => (
      <TimeSeriesItem
        timeSeriesItem={education}
        items={educationItems}
        setItems={setEducationItems}
        index={index}
      />
    ))

  const Projects = () => (
    <div className={styles.mainBody}>
      <ul>
        {localProjects.map((project, index) => (
          <ItemWithHeader
            item={project}
            items={localProjects}
            setItems={setLocalProjects}
            index={index}
          />
        ))}
      </ul>
    </div>
  )

  const OpenSources = () => (
    <div className={styles.mainBody}>
      <ul>
        {localOs.map((openSource, index) => (
          <ItemWithHeader
            item={openSource}
            items={localOs}
            setItems={setLocalOs}
            index={index}
          />
        ))}
      </ul>
    </div>
  )

  return (
    <div className={styles.left}>
      {experiencesVisible ? (
        <ExperienceOrEduSection
          iconPath={require('../../../assets/images/work.png')}
          headerText={defaultLabels.workExp}
          content={Experiences}
          onDelete={() => setExperiencesVisible(false)}
        />
      ) : null}
      {educationsVisible ? (
        <ExperienceOrEduSection
          iconPath={require('../../../assets/images/edu.png')}
          headerText={defaultLabels.education}
          content={Educations}
          onDelete={() => setEducationsVisible(false)}
        />
      ) : null}

      {projectsVisible ? (
        <ExperienceOrEduSection
          iconPath={require('../../../assets/images/pin.png')}
          headerText={defaultLabels.projects}
          content={Projects}
          onDelete={() => setProjectsVisible(false)}
        />
      ) : null}

      {osVisible ? (
        <ExperienceOrEduSection
          iconPath={require('../../../assets/images/code.png')}
          headerText={defaultLabels.openSource}
          content={OpenSources}
          onDelete={() => setOsVisible(false)}
        />
      ) : null}
    </div>
  )
}
