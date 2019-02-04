
const { Page }= require('../page.po');
const { constants } = require('./../../core/selector.helper');

class CoursePage extends Page {
  
  get coursesMainButton() { return this.locator('//nav//span[text()="Cursos"]//ancestor::button'); } 
  get myCoursesLink(){return this.locator('a[class= "_3ghFm"][href = "/courses"]');}

  get adminTitle() { return this.locator('//div[@id ="right-column-inner"]//h3[contains(text(), "Administrar cursos")]'); }
  get openCreateCourseButton() {return this.locator('a[href="/course/create"]')}
  get createTitle() {return this.locator('//div[@class="popups-title"]//div[contains(text(), "Crear un Curso")]')}

  get courseNameTextField() { return this.locator('input[id ="edit-course-name"]'); }
  get sectionNameTextField() { return this.locator('input[id ="edit-section-name-1"]'); }
  get tematicAreaSelectField() { return this.locator('select[id ="edit-subject-area"]'); }
  get nivelSelectField() { return this.locator('select[id ="edit-grade-level-range-start"]'); }
  get submitCourseButton() { return this.locator('input[id ="edit-submit"]'); }
  get courseTitle() { return this.locator('.page-title .sExtlink-processed'); }
  //declarete variables, methods to obtain locators

  //Locators for Edit section
  get gearIconCourse() {return this.locator('//span[@class="course-title" and text()="' + this.courseTempName + '"]//ancestor::p//following-sibling::div//div[@role= "button"]');}
  get editOptionSection() {return this.locator('//ul[contains(@style, "display: block;")]//a[contains(@href,"/edit?")]');}
  get titlePopupEdit() {return this.locator('div[class="title"]');}
  get confirmationMessageSectionEdited() {return this.locator('div[class="message-text"]');}

  //locators for remove section course
  get deleteMenuItem () {return this.locator('//ul[contains(@style, "display: block;")]//a[contains(@href,"/delete")]');}
  get deleteSectionButton () {return this.locator('div[role= "dialog"] .popups-body input[value= "Eliminar"]');}
  get closeDeleteConfirmationButton () {return this.locator('.messages.status.temp.schoology-processed .messages-close-btn');}
  get deleteCourseButton () {return this.locator('//h3[@class="inactive-courses"]//following-sibling::ul//li//span[@class="course-title" and contains(text(), "'+ this.courseTempName + '")]//preceding-sibling::a');}
  get confirmRemoveCourseButton() {return this.locator('div.submit-buttons input#edit-submit');}
  get courseTitleAfterDelete() {return this.locator('.page-title');}

  constructor() {
    super();
    this
      .toForm('courseName', (value) => this.courseNameTextField.setValue(value))
      .toForm('sectionName', (value) => this.sectionNameTextField.setValue(value))
      .toForm('tematicArea', (value) => this.tematicAreaSelectField.selectByValue(value))
      .toForm('nivel', (value) => this.nivelSelectField.selectByValue(value));
  }

  createCourse(courseData) {
    this.waitForHeader();
    this.coursesMainButton.click();
    this.myCoursesLink.click();
    this.openCreateCourseButton.click();
    this.fillForm(courseData);
    this.submitCourseButton.click();
  }

  waitForCourseProfile() {
    return $('.profile-picture').waitForVisible(constants.waitForVisible);
  }

  waitForDeleteSectionMessage() {
    return $('.messages.status.temp.schoology-processed').waitForVisible(constants.waitForVisible);
  }

  waitForOverlayDelete() {
    return $('body #popups-overlay').waitForVisible(constants.waitForVisible, true);
  }

  editSection(createCourseData, editCourseData){
    this.createCourse(createCourseData);
    this.courseTempName = createCourseData.courseName;
    this.waitForCourseProfile();
    this.coursesMainButton.click();
    this.myCoursesLink.click();
    this.gearIconCourse.click();
    this.editOptionSection.click();
    this.fillForm(editCourseData);
    this.submitCourseButton.click();

  }

  deleteSection(){
    this.coursesMainButton.click();
    this.myCoursesLink.click();
    this.gearIconCourse.click();
    this.deleteMenuItem.click();
    this.deleteSectionButton.click();
    this.waitForDeleteSectionMessage();
    this.closeDeleteConfirmationButton.click();
  }

  removeCourse(deleteCourseData){
    this.courseTempName = deleteCourseData.courseName;
    this.createCourse(deleteCourseData);
    this.waitForCourseProfile();
    this.deleteSection();
    this.deleteCourseButton.click();
    this.confirmRemoveCourseButton.click();
    this.waitForOverlayDelete();
  }
}

module.exports = { CoursePage };