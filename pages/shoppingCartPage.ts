import { Locator, Page, expect } from "@playwright/test";

export class ShoppingCartPage {
    //Elements in Shopping Cart Page
    private cartProductsNamesList: string[];

    //Page element for the constructor 
    //(for creating non null instance of shopping cart page instead of using other random elements in the page)
    private page: Page;

    //Constructor
    constructor(page: Page) {
        this.page = page;
    }

    //List loader
    async loadShoppingCartProductsList(page: Page) {
        this.cartProductsNamesList = await page.locator(".product-name").allInnerTexts();
    }

    //Assertions
    async validateProductsAddedToCart(products: string[]) {
        await expect(this.cartProductsNamesList).toEqual(products);
    }
}