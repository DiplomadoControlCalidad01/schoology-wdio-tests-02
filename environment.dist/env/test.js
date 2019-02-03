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
    courseName: 'coursetest1',
    sectionName: 'Sectiontest1',
    tematicArea: '1',
    nivel: '1'
  },
  resourceGroupData: {
    name: 'Automation',
    description: 'This group is a group created for testing purposes',
    privacy: ['everyone', 'schoology', 'school', 'group', 'nobody'],
    access: ['0', '1', '2']
  }
};
