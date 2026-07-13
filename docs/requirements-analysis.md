# Requirements Analysis

## Application Under Test

- **Application:** SauceDemo
- **URL:** https://www.saucedemo.com/
- **Application type:** Demo e-commerce web application
- **Analysis method:** Manual exploratory review of observable behavior
- **Review date:** 2026-07-13

## Important Note

The following behaviors are based on direct observation of the application. They are not official business requirements provided by the application owner.

## Observed Functional Behavior

### Authentication

- The login page provides username and password fields.
- A valid user can log in with the credentials displayed by the application.
- Successful authentication redirects the user to `/inventory.html`.

### Product Inventory

- The inventory page displays product names, prices, and add-to-cart controls.
- Adding a product changes its button from **Add to cart** to **Remove**.
- The cart badge reflects the number of added products.

### Shopping Cart

- The cart displays the selected product, quantity, name, and price.
- The user can continue shopping or proceed to checkout.

### Checkout

- Checkout requires first name, last name, and postal code.
- The order overview is displayed before completion.
- A completed checkout displays an order confirmation message.