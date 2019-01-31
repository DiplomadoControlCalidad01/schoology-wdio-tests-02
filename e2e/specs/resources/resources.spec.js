const { expect } = require('chai');
const loginPage = require('../../pages/login.po');
const resourcePage = require('../../pages/resources/resource-group.po');
const env = require('../../environment');

xdescribe('Schoology Resources', () => {
    describe('Schoology Group Resources', () => {
        it('#BVT Should create a group from Resources page', () => {
            loginPage.loginWithEmail(env.loginCredentials)
            resourcePage.open();
            resourcePage.createNewGroup();
        });
    });
});