# Inventory Test Cases

## Common Preconditions

- The SauceDemo website is available.
- The user logs in with `standard_user`.
- The **Products** page is displayed.

## Test Cases

| ID | Scenario | Priority | Action | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|
| INV-001 | Display the product inventory | High | Open the **Products** page. | Products display a name, price, and add-to-cart control. | Products displayed their name, price, and add-to-cart control. | Passed |
| INV-002 | Sort products by name from A to Z | Medium | Select **Name (A to Z)**. | Products are ordered alphabetically. The first product is `Sauce Labs Backpack` and the last is `Test.allTheThings() T-Shirt (Red)`. | The expected first and last products were displayed. | Passed |
| INV-003 | Sort products by name from Z to A | Medium | Select **Name (Z to A)**. | Products are ordered in reverse alphabetical order. The first product is `Test.allTheThings() T-Shirt (Red)` and the last is `Sauce Labs Backpack`. | The expected first and last products were displayed. | Passed |
| INV-004 | Sort products by price from low to high | Medium | Select **Price (low to high)**. | The first product is `Sauce Labs Onesie` at `$7.99` and the last is `Sauce Labs Fleece Jacket` at `$49.99`. | The expected products and prices were displayed. | Passed |
| INV-005 | Sort products by price from high to low | Medium | Select **Price (high to low)**. | The first product is `Sauce Labs Fleece Jacket` at `$49.99` and the last is `Sauce Labs Onesie` at `$7.99`. | The expected products and prices were displayed. | Passed |

## Execution Information

- **Execution date:** 2026-07-14
- **Browser:** Google Chrome
- **Environment:** SauceDemo public demo site
- **Executed by:** Felipe de Jesús Ramírez Sáenz