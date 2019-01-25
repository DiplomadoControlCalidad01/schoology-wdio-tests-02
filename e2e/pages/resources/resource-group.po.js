
const { ResourcePage } = require('./resource.po');

class ResourceGroupPage extends ResourcePage {
    get newGroupLink() { return this.locator('//a[@href="/groups/new"]'); }
    
    open() {
        super.open();
        this.resourceGroupButton.click();
    }
    createNewGroup() {
        this.newGroupLink.click();
    }
}

module.exports = new ResourceGroupPage();
