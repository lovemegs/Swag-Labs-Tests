import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get shoppingCartLink () {
        return $('.shopping_cart_link');
    }
}

export default new HomePage();
