import { Locator, Page, expect } from "@playwright/test";

export class HomePage {
    //Elements in Home Page
    private registrationPageBtn: Locator;
    private accountsEmail: Locator;
    private digitalDownloadsBtn: Locator;
    private shoppingCartBtn: Locator;

    //Constructor
    constructor(page: Page) {
        this.registrationPageBtn = page.locator(".ico-register");
        this.digitalDownloadsBtn = page.locator("ul.top-menu a[href*='digital-download']");
        this.shoppingCartBtn = page.locator("#topcartlink");
    }

    //Actions
    async openRegistrationPage() {
        await this.registrationPageBtn.click();
    }

    async goToDigitalDownloadsPage() {
        await this.digitalDownloadsBtn.click();
    }
    
    async goToShoppingCartPage() {
        await this.shoppingCartBtn.click();
    }

    //Assertions
    async loadHomePageAndValidateRegistration(email: string, page: Page) {
        this.accountsEmail = page.locator("div.header-links a.account");
        await expect(await this.accountsEmail.innerText()).toBe(email);
    }
}