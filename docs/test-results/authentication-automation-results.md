# Authentication Automation Results

## Execution Information

- **Execution date:** 2026-07-14
- **Environment:** SauceDemo public demo site
- **Browser:** Google Chrome 150 (headless)
- **Cypress version:** 15.18.1
- **Node.js version:** 22.16.0
- **Operating system:** Windows

## Command

```powershell
npx cypress run --spec "cypress/e2e/authentication/login.cy.js" --browser chrome
```

## Results

| Test Case | Scenario | Result |
|---|---|---|
| AUTH-001 | Login with valid credentials | Passed |
| AUTH-002 | Login with a locked-out user | Passed |
| AUTH-003 | Login with an invalid password | Passed |
| AUTH-004 | Login without a username | Passed |
| AUTH-005 | Login without a password | Passed |

## Summary

- **Total:** 5
- **Passed:** 5
- **Failed:** 0
- **Pending:** 0
- **Skipped:** 0

## Notes

- All authentication tests passed in Google Chrome.
- No screenshots were generated because no tests failed.
- Video recording was disabled for this execution.