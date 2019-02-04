const { expect } = require('chai');
const { CoursePage } = require('../../pages/courses/course.po')
const env = require('../../../environment');
const { LoginPage } = require('../../pages/login.po')


describe.skip('Schoology create course', () => {
    const loginPage = new LoginPage();
    const coursePage = new CoursePage();

    beforeEach(() => {
        loginPage.loginWithEmail(env.credentials.valid);
    });

    afterEach(() => {
        loginPage.logout();
    });

    it('should create a course', () => {
        coursePage.createCourse(env.courseData);
        expect(coursePage.courseTitle.getText()).to.contain(env.courseData.courseName +': '+ env.courseData.sectionName);
    });

    it('should Edit a section', () => {
        coursePage.editSection(env.courseData, env.sectionEditData);
        expect(coursePage.confirmationMessageSectionEdited.getText()).to.contain('Esta seccion ha sido actualizada.');
    });

    it('should Delete a course', () => {
        coursePage.removeCourse(env.deleteCourseData);
        expect(coursePage.courseTitleAfterDelete.getText()).to.contain('Cursos');
    });

});
