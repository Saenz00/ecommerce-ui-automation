# Checkout Test Cases

## Common Preconditions

- The SauceDemo website is available.
- The user logs in with `standard_user`.
- `Sauce Labs Backpack` is added to the cart.
- The user opens the cart and selects **Checkout**.

## Test Cases

| ID | Scenario | Priority | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| CHECKOUT-001 | Continue with all customer fields empty | High | The user remains on `/checkout-step-one.html` and `Error: First Name is required` is displayed. | The user remained on the form and the expected error was displayed. | Passed |
| CHECKOUT-002 | Continue without a last name | High | The user remains on `/checkout-step-one.html` and `Error: Last Name is required` is displayed. | The user remained on the form and the expected error was displayed. | Passed |
| CHECKOUT-003 | Continue without a postal code | High | The user remains on `/checkout-step-one.html` and `Error: Postal Code is required` is displayed. | The user remained on the form and the expected error was displayed. | Passed |
| CHECKOUT-004 | Display the order overview with valid customer information | High | The user reaches `/checkout-step-two.html`. The backpack price and item total are `$29.99`, tax is `$2.40`, total is `$32.39`, and **Cancel** and **Finish** are visible. | The expected product, totals, payment information, shipping information, and controls were displayed. | Passed |
| CHECKOUT-005 | Complete the order successfully | High | The user reaches `/checkout-complete.html`, sees **Checkout: Complete!**, `Thank you for your order!`, and **Back Home**. The cart badge disappears. | The expected confirmation was displayed and the cart badge disappeared. | Passed |

## Test Data

- **First Name:** Felipe
- **Last Name:** Saenz
- **Zip/Postal Code:** 12345

## Execution Information

- **Execution date:** 2026-07-16
- **Browser:** Google Chrome
- **Environment:** SauceDemo public demo site
- **Executed by:** Felipe de Jesús Ramírez Sáenz

## Notes

- A **Generate PDF order** option was observed on the completion page.
- PDF generation was not tested because it is outside the current scope.