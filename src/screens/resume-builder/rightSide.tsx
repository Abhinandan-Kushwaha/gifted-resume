import { useState } from 'react'
import styles from './styles.module.css'
import { EditableText } from '../../components/editable-text/EditableText'
import { contactDetails, defaultLabels, defaultSkills } from './const'
import { TextType } from '../../types/global-types'
import { Skill } from '../../components/skill/skill'
import { ContactItem } from '../../components/contact-item/ContactItem'
import { SocialContacts } from '../../components/social-contacts/SocialContacts'

export const RightSide = () => {
  const [skills, setSkills] = useState(defaultSkills)
  return (
    <div className={styles.right}>
      <div className={styles.header}>
        <img
          className={styles.icon}
          src={require('../../assets/images/contact.png')}
          alt=''
        />
        <EditableText
          text={defaultLabels.contact}
          textType={TextType.h2}
          rows={1}
          cols={14}
        />
      </div>

      {contactDetails.map((contactItem) => (
        <ContactItem item={contactItem} />
      ))}

      <SocialContacts />

      <div className={styles.header} style={{ marginTop: 114 }}>
        <img
          className={styles.icon}
          style={{ height: 40 }}
          src={require('../../assets/images/bulb.png')}
          alt=''
        />
        <EditableText
          text={defaultLabels.skills}
          textType={TextType.h2}
          rows={1}
          cols={14}
        />
      </div>

      {skills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  )
}
