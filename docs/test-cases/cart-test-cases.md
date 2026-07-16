# Shopping Cart Test Cases

## Common Preconditions

- The SauceDemo website is available.
- The user logs in with `standard_user`.
- The **Products** page is displayed.

## Test Cases

| ID | Scenario | Priority | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| CART-001 | Add one product from the inventory | High | The product button changes to **Remove**, the cart badge displays `1`, and the user remains on `/inventory.html`. | `Sauce Labs Backpack` was added, its button changed to **Remove**, and the cart badge displayed `1`. | Passed |
| CART-002 | Add multiple products | High | Both products display **Remove** and the cart badge displays `2`. | `Sauce Labs Backpack` and `Sauce Labs Bike Light` displayed **Remove**, and the badge displayed `2`. | Passed |
| CART-003 | Display selected products in the cart | High | The cart displays both products with quantity `1`, their correct prices, and a **Remove** button. | Both products displayed quantity `1`, prices `$29.99` and `$9.99`, and **Remove** buttons. | Passed |
| CART-004 | Remove one product from the cart | High | The selected product disappears, the other remains, and the cart badge decreases to `1`. | `Sauce Labs Bike Light` disappeared, `Sauce Labs Backpack` remained, and the badge displayed `1`. | Passed |
| CART-005 | Remove all products from the cart | Medium | The cart contains no products, the numeric badge disappears, and navigation buttons remain visible. | The cart became empty, the numeric badge disappeared, and **Continue Shopping** and **Checkout** remained visible. | Passed |

## Execution Information

- **Execution date:** 2026-07-16
- **Browser:** Google Chrome
- **Environment:** SauceDemo public demo site
- **Executed by:** Felipe de Jesús Ramírez Sáenz