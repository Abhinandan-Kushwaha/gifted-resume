export enum TextType {
  h1,
  h2,
  h3,
  italicBoldDesc,
  italic,
  bold,
  italicBold,
  boldLeft,
  subTitle,
  subText,
  none,
  centered
}

export interface ISkill {
  name: string
  level: string
}

export interface ITimeSeriesItem {
  dateRange: string
  desigOrDegree: string
  institute: string
  details?: string[]
}

export interface IItemWithHeader {
  header: string
  text?: string
}

export interface IContactItem {
  header: string
  text: string
}
