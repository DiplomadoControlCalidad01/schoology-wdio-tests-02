
const { Page }= require('../page.po');

class CoursePage extends Page {
  get coursesMainButton() { return this.locator('//nav//span[text()="Cursos"]//ancestor::button'); } 
  get myCoursesLink(){return this.locator('//a[contains(text(), "Mis cursos")]');}

  get adminTitle() { return this.locator('//div[@id ="right-column-inner"]//h3[contains(text(), "Administrar cursos")]'); }
  get openCreateCourseButton() {return this.locator('//a[@href="/course/create"]')}
  get createTitle() {return this.locator('//div[@class="popups-title"]//div[contains(text(), "Crear un Curso")]')}

  get courseNameTextField() { return this.locator('//input[@id ="edit-course-name"]'); }
  get sectionNameTextField() { return this.locator('//input[@id ="edit-section-name-1"]'); }
  get tematicAreaSelectField() { return this.locator('//select[@id ="edit-subject-area"]'); }
  get nivelSelectField() { return this.locator('//select[@id ="edit-grade-level-range-start"]'); }
  get createCourseButton() { return this.locator('//input[@id ="edit-submit"]'); }
  //declarete variables, methods to obtain locators
  
  constructor() {
    super();
    this
      .toForm('courseName', (value) => this.courseNameTextField.setValue(value))
      .toForm('sectionName', (value) => this.sectionNameTextField.setValue(value))
      .toForm('tematicArea', (value) => this.tematicAreaSelectField.selectByValue(value))
      .toForm('nivel', (value) => this.nivelSelectField.selectByValue(value));
  }

  createCourse(courseData) {
    this.fillForm(courseData);
    this.createCourseButton.click();
  }

  openCreateACourse(){
    this.header.waitForHeader();
    this.coursesMainButton.click();
    this.myCoursesLink.click();
    this.openCreateCourseButton.click();
  }
}

module.exports = { CoursePage };