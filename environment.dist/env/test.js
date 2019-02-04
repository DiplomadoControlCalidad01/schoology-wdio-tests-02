module.exports = {
  url: 'https://app.schoology.com/login',
  credentials: {
    invalid: {
      email: '',
      password: ''
    },
    valid: {
      email: '',
      password: ''
    }
  },
  courseData: {
    courseName: '',
    sectionName: '',
    tematicArea: '',
    nivel: ''
  },
  sectionEditData:{
    courseName: '',
    sectionName: '',
    tematicArea: '',
    nivel: ''
  },
  deleteCourseData:{
    courseName: '',
    sectionName: '',
    tematicArea: '',
    nivel: ''
  },
  resourceGroupData: {
    name: 'Automation',
    description: 'This group is a group created for testing purposes',
    privacy: ['everyone', 'schoology', 'school', 'group', 'nobody'],
    access: ['0', '1', '2']
  },
  resourceGroupTaskTemplateData: {
    name: 'Automation Resource Task',
    description: 'This resource is created for testing purposes',
    maxPoint: ['10', '20', '50', '75', '100']
  }
};
