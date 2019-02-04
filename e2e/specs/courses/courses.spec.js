const { expect } = require('chai');
const { CoursePage } = require('../../pages/courses/course.po')
const env = require('../../../environment');
const { LoginPage } = require('../../pages/login.po')


describe.skip('Schoology create course', () => {
    const loginPage = new LoginPage();
    const coursePage = new CoursePage();

    it('should have the right title on course page', () => {
        loginPage.loginWithEmail(env.credentials.valid)
        coursePage.openCreateACourse(); // execute the steps on CoursePage
        expect(coursePage.createTitle.getText()).to.contain('Crear un Curso');
    });

    it('should create a course', () => {
        coursePage.createCourse(env.courseData);
        expect(coursePage.title).to.contain('curso 4: Sección 1');
    });
});