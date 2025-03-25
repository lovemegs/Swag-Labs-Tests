import { $, browser } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login'


class HamburgerMenu {
    get btnHamburgerMenu () {
        return $('button#react-burger-menu-btn');
    }
    get allItems () {
        return $('a#inventory_sidebar_link')
    }
    get about () {
        return $('a#about_sidebar_link')
    }
    get logout () {
        return $('a#logout_sidebar_link')
    }
    get resetApp () {
        return $('a#reset_sidebar_link')
    }
    get btnClose () {
        return $('button#react-burger-cross-btn')
    }
    get addToCart () {
        return $('button#add-to-cart-sauce-labs-backpack')
    }
    get cartIconNumber () {
        return $('span.shopping_cart_badge')
    }

    async openHamburgerMenu () {
        await this.btnHamburgerMenu.click();
    }

    async allMenuOptions () {
        await this.openHamburgerMenu();
        await this.allItems.click();
        await expect(this.allItems).toBeExisting();

        await LoginPage.logout();
        await expect(LoginPage.inputUsername).toBeExisting();

        await LoginPage.login('standard_user', 'secret_sauce');
        await this.openHamburgerMenu();

        await this.addToCart.click();
        await expect(this.cartIconNumber).toBeExisting();

    }

}

export default new HamburgerMenu();