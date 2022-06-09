const homeScreen = require("../screens/home.screen");

describe('Acess Admin Panel', () => {
    it('shoud login with valid credentials', async () => {
        await homeScreen.goToLogin()

    });
})