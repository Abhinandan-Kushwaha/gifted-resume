import {
  IContactItem,
  IItemWithHeader,
  ITimeSeriesItem
} from '../../types/global-types'

export const defaultTextValues = {
  name: 'Abhinandan Kushwaha',
  description:
    'With a knack for innovation and appetite for learning, I love problem solving and developing smart applications',

  date1: '2022-02 to Current',
  desig1: 'Member Of Technical Staff',
  company1: 'ThoughtSpot',
  exp1a:
    'Front-end developer in the data modelling team, mainly contributing to the worksheet creation flow using React and GraphQL.',
  exp1b:
    'Developing and maintaining the ThoughtSpot mobile app using React Native, Redux, GraphQL, etc',

  date2: '2019-08 to 2022-02',
  desig2: 'Senior Software Engineer',
  company2: 'GeekyAnts Software Pvt Ltd',
  exp2a:
    'Developing mobile applications using React Native, Redux, Node JS, Mongo DB and Firebase',
  exp2b: 'Full stack development, hands on experience in web development too',

  date3: '2019-01 to 2019-08',
  desig3: 'Software Engineer Intern',
  company3: 'GeekyAnts Software Pvt Ltd',

  eduDate1: '2015 to 2019',
  degree1: 'Bachelor of Technology: Computer Science',
  college1: 'Rajkiya Engineering College Sonbhadra',

  proj1: 'ThoughtSpot mobile app',
  projDesc1: 'using React Native, Redux, GraphQl, etc',

  proj2: 'Learning Management System',
  projDesc2: 'for Medical graduates using React Native, Node JS and MongoDB',

  proj3: 'Milaap Crowd funding app',
  projDesc3: 'using React Native, Redux etc',

  proj4: 'Endlink Employee Communication App',
  projDesc4: 'using React Native, Firestore and GCP',

  proj5: 'C to JAVA Translator',
  projDesc5: 'Android app (Personal project during college)',

  proj6: 'Crossword',
  projDesc6:
    'Online multiplayer game using React JS and Firebase (Personal project)',

  os1: 'react-native-gifted-charts',
  osDes1:
    'A react native library for Bar, Line, Area, Pie, Donut and Stacked Bar charts in React Native. Allows 2D, 3D, gradient, animations and live data updates.',

  os2: 'react-native-fireworks',
  osDes2:
    'A customizable firework like animation that can be used as a component in a react native project.',

  os3: 'TunnelAnimation',
  osDes3:
    'A custom React Native component that acts as a wrapper around a ListView or FlatList making it highly interactive and 3 dimensional.',

  address:
    '#35, Bhuvanappa Layout, SG Palya, Bengaluru, Karnataka, India, 560029',
  phone: '+917081943252',
  email: 'kushabhi5@gmail.com',

  skill1: 'React Native',
  skill2: 'React JS',
  skill3: 'JavaScript',
  skill4: 'Node JS',
  skill5: 'Android'
}

export const defaultLabels = {
  workExp: 'Work History (4.5 years exp)',
  education: 'Education',
  projects: 'Projects',
  openSource: 'Open Source',

  contact: 'Contact',
  address: 'Address',
  phone: 'Phone',
  email: 'Email',
  social: 'Social',

  skills: 'Skills'
}

export const levels = {
  expert: 'Expert',
  good: 'Good',
  average: 'Average',
  beginner: 'Beginner'
}

export const defaultSkills = [
  { name: defaultTextValues.skill1, level: levels.expert },
  { name: defaultTextValues.skill2, level: levels.expert },
  { name: defaultTextValues.skill3, level: levels.expert },
  { name: defaultTextValues.skill4, level: levels.good },
  { name: defaultTextValues.skill5, level: levels.average }
]

export const experiences: ITimeSeriesItem[] = [
  {
    dateRange: defaultTextValues.date1,
    desigOrDegree: defaultTextValues.desig1,
    institute: defaultTextValues.company1,
    details: [defaultTextValues.exp1a, defaultTextValues.exp1b]
  },
  {
    dateRange: defaultTextValues.date2,
    desigOrDegree: defaultTextValues.desig2,
    institute: defaultTextValues.company2,
    details: [defaultTextValues.exp2a, defaultTextValues.exp2b]
  },
  {
    dateRange: defaultTextValues.date3,
    desigOrDegree: defaultTextValues.desig3,
    institute: defaultTextValues.company3
  }
]

export const educations: ITimeSeriesItem[] = [
  {
    dateRange: defaultTextValues.eduDate1,
    desigOrDegree: defaultTextValues.degree1,
    institute: defaultTextValues.college1
  }
]

export const projects: IItemWithHeader[] = [
  {
    header: defaultTextValues.proj1,
    text: defaultTextValues.projDesc1
  },
  {
    header: defaultTextValues.proj2,
    text: defaultTextValues.projDesc2
  },
  {
    header: defaultTextValues.proj3,
    text: defaultTextValues.projDesc3
  },
  {
    header: defaultTextValues.proj4,
    text: defaultTextValues.projDesc4
  },
  {
    header: defaultTextValues.proj5,
    text: defaultTextValues.projDesc5
  },
  {
    header: defaultTextValues.proj6,
    text: defaultTextValues.projDesc6
  }
]

export const openSources: IItemWithHeader[] = [
  {
    header: defaultTextValues.os1,
    text: defaultTextValues.osDes1
  },
  {
    header: defaultTextValues.os2,
    text: defaultTextValues.osDes2
  },
  {
    header: defaultTextValues.os3,
    text: defaultTextValues.osDes3
  }
]

export const contactDetails: IContactItem[] = [
  {
    header: defaultLabels.address,
    text: defaultTextValues.address
  },
  {
    header: defaultLabels.phone,
    text: defaultTextValues.phone
  },
  {
    header: defaultLabels.email,
    text: defaultTextValues.email
  }
]
