import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { RegistrationPage } from '../pages/registrationPage';
import { DigitalDownloadsPage } from '../pages/digitalDownloadsPage';
import { ShoppingCartPage } from '../pages/shoppingCartPage';

const SHOPPING_SITE_URL = "https://demowebshop.tricentis.com";

test.beforeEach("Open the shopping website", async({ page }) => {
  await page.goto(SHOPPING_SITE_URL);
});

test("Registaring and adding product to cart test", async({ page }) => {
  const homePage = new HomePage(page);
  const registrationPage = new RegistrationPage(page);
  const digitalDownloadsPage = new DigitalDownloadsPage(page);
  const shoppingCartPage = new ShoppingCartPage(page);

  const userDetails = { firstName: "Avital", lastName: "Miroshnichenko", email: "avitalMir1@gmail.com",
    password: "avital11", passwordConfirmation: "avital11" };
  let chosenDigitalDownloadProductName: string;

  await test.step("Register to the website", async() => {
    await homePage.openRegistrationPage();
    await registrationPage.clickFemaleRadioInputBtn();
    await registrationPage.fillFirstNameField(userDetails.firstName);
    await registrationPage.fillLastNameField(userDetails.lastName);
    await registrationPage.fillEmailField(userDetails.email);
    await registrationPage.fillPasswordField(userDetails.password);
    await registrationPage.fillConfirmPasswordField(userDetails.passwordConfirmation);
    await registrationPage.submitRegistration();
    await registrationPage.clickContinue();
  });

  await test.step("Validate the registration success", async() => {
    await homePage.loadHomePageAndValidateRegistration(userDetails.email, page);
  });

  await test.step("Select digital downloads random product", async() => {
    await homePage.goToDigitalDownloadsPage();
    await digitalDownloadsPage.loadDigitalDownloadsProductsList(page);
    chosenDigitalDownloadProductName = await digitalDownloadsPage.selectRandomProductFromList();
  });

  await test.step("Validate the product added to the cart", async() => {
    await homePage.goToShoppingCartPage();
    await shoppingCartPage.loadShoppingCartProductsList(page);
    await shoppingCartPage.validateProductsAddedToCart([chosenDigitalDownloadProductName]);
  });
});