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
    courseName: 'Course test n',
    sectionName: 'section one',
    tematicArea: '1',
    nivel: '1'
  },
  sectionEditData:{
    courseName: 'Course test c-edit',
    sectionName: 'Section n',
    tematicArea: '2',
    nivel: '2'
  },
  deleteCourseData:{
    courseName: 'Course test delete',
    sectionName: 'section 1',
    tematicArea: '3',
    nivel: '2'
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
