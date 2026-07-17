# Checkout Automation Results

## Execution Information

- **Execution date:** 2026-07-17
- **Environment:** SauceDemo public demo site
- **Browser:** Google Chrome 150 (headless)
- **Cypress version:** 15.18.1
- **Node.js version:** 22.16.0
- **Operating system:** Windows

## Checkout Spec Command

```powershell
npx cypress run --spec "cypress/e2e/checkout/checkout.cy.js" --browser chrome
```

## Checkout Results

| Test Case | Scenario | Result |
|---|---|---|
| CHECKOUT-001 | Continue with all customer fields empty | Passed |
| CHECKOUT-002 | Continue without a last name | Passed |
| CHECKOUT-003 | Continue without a postal code | Passed |
| CHECKOUT-004 | Display the correct order overview | Passed |
| CHECKOUT-005 | Complete the order successfully | Passed |

## Checkout Summary

- **Total:** 5
- **Passed:** 5
- **Failed:** 0
- **Pending:** 0
- **Skipped:** 0

## Regression Execution

```powershell
npx cypress run --browser chrome
```

The complete authentication, inventory, shopping cart, and checkout regression suite passed:

- **Total:** 20
- **Passed:** 20
- **Failed:** 0

## Notes

- All checkout tests passed in Google Chrome.
- The complete regression suite also passed.
- No screenshots were generated because no tests failed.
- Video recording was disabled for this execution.
- PDF order generation remains outside the current test scope.