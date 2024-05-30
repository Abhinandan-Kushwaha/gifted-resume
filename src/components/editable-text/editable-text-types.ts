import { TextType } from '../../types/global-types'

export interface EditableTextProps {
  textType: TextType
  text: string
  rows?: number
  cols?: number
}
