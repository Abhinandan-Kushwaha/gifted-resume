import styles from './styles.module.css'

interface DeletionPopupProps {
  sectionName: string
  setDeletionPopupVisible: (v: boolean) => void
  onDelete: () => void
}
export const DeletionPopup = (props: DeletionPopupProps) => {
  const { sectionName, setDeletionPopupVisible, onDelete } = props

  const onNoClick = () => {
    setDeletionPopupVisible(false)
  }
  const onYesClick = () => {
    onDelete()
    setDeletionPopupVisible(false)
  }
  return (
    <div className={styles.popupContainer} onClick={onNoClick}>
      <div className={styles.popupContent}>
        <div className={styles.popupText}>
          {`Are you sure you want to delete the entire ${sectionName} section?`}
        </div>

        <div className={styles.buttonsRow}>
          <div className={styles.noButton} onClick={onNoClick}>
            No
          </div>
          <div className={styles.yesButton} onClick={onYesClick}>
            Yes
          </div>
        </div>
      </div>
    </div>
  )
}
