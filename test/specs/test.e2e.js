import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'
import HomePage from '../pageobjects/home.page.js'
import HamburgerMenu from '../pageobjects/hamburgerMenu.js'

describe('My Hamburger Application', () => {
        it('should open the hamburger menu and click through all the options', async () => {
            await LoginPage.open();
           
            await LoginPage.login('standard_user', 'secret_sauce');
            await expect(HomePage.shoppingCartLink).toBeExisting();

            await HamburgerMenu.allMenuOptions();
        })
})