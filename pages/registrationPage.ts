import { Locator, Page } from "@playwright/test";

export class RegistrationPage {
    //Elements in Registration Page
    private maleRadioInputBtn: Locator;
    private femaleRadioInputBtn: Locator;
    private firstNameField: Locator;
    private lastNameField: Locator;
    private emailField: Locator;
    private passwordField: Locator;
    private confirmPasswordField: Locator;
    private submitRegistrationBtn: Locator;
    private continueBtn: Locator;

    //Constructor
    constructor(page: Page) {
        this.maleRadioInputBtn = page.locator("#gender-male");
        this.femaleRadioInputBtn = page.locator("#gender-female");
        this.firstNameField =  page.locator("#FirstName");
        this.lastNameField = page.locator("#LastName");
        this.emailField = page.locator("#Email");
        this.passwordField = page.locator("#Password");
        this.confirmPasswordField = page.locator("#ConfirmPassword");
        this.submitRegistrationBtn = page.locator("#register-button");
        this.continueBtn = page.locator(".register-continue-button");
    }

    //Actions
    async clickMaleRadioInputBtn() {
        await this.maleRadioInputBtn.click();
    }

    async clickFemaleRadioInputBtn() {
        await this.femaleRadioInputBtn.click();
    }

    async fillFirstNameField(firstName: string) {
        await this.firstNameField.fill(firstName);
    }

    async fillLastNameField(lastName: string) {
        await this.lastNameField.fill(lastName);
    }

    async fillEmailField(email: string) {
        await this.emailField.fill(email);
    }

    async fillPasswordField(password: string) {
        await this.passwordField.fill(password);
    }

    async fillConfirmPasswordField(passwordConfirmation: string) {
        await this.confirmPasswordField.fill(passwordConfirmation);
    }

    async submitRegistration() {
        await this.submitRegistrationBtn.click();
    }

    async clickContinue() {
        await this.continueBtn.click();
    }
}