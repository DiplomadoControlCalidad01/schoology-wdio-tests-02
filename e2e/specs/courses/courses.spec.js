const { expect } = require('chai');
const CoursePage = require('../../pages/courses/course.po')
const env = require('../../../environment');
const loginPage = require('../../pages/login.po');

describe('Schoology create course', () => {
    it('should have the right title on course page', () => {
        loginPage.loginWithEmail(env.credentials.valid)
        CoursePage.openCreateACourse(); // execute the steps on CoursePage
        expect(CoursePage.createTitle.getText()).to.contain('Crear un Curso');
    });

    it('should create a course', () => {
        CoursePage.createCourse(env.courseData);
        expect(CoursePage.title).to.contain('curso 4: Sección 1');
    });
});