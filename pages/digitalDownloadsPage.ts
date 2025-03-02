import { Locator, Page } from "@playwright/test";

export class DigitalDownloadsPage {
    //Elements in Digital Downloads Page
    private productsList: Locator[];
    
    //Page element for the constructor 
    //(for creating non null instance of digital downloads page instead of using other random elements in the page)
    private page: Page;

    //Constructor
    constructor(page: Page) {
        this.page = page;
    }

    //List loader
    async loadDigitalDownloadsProductsList(page: Page) {
        this.productsList = await page.locator(".product-item").all();
    }

    //Actions
    async selectRandomProductFromList(): Promise<string> {
        const productIndex: number = Math.floor(Math.random() * (this.productsList.length + 1));
        await this.productsList[productIndex].locator(".product-box-add-to-cart-button").click();
        return this.productsList[productIndex].locator(".product-title").innerText();
    }
}