# Session Automation Results

## Execution Information

- **Execution date:** 2026-07-17
- **Environment:** SauceDemo public demo site
- **Browser:** Google Chrome 150 (headless)
- **Cypress version:** 15.18.1
- **Node.js version:** 22.16.0
- **Operating system:** Windows

## Session Spec Command

```powershell
npx cypress run --spec "cypress/e2e/session/session.cy.js" --browser chrome
```

## Session Results

| Test Case | Scenario | Result |
|---|---|---|
| SESSION-001 | Log out from an authenticated session | Passed |
| SESSION-002 | Access a protected page without authentication | Passed |

## Session Summary

- **Total:** 2
- **Passed:** 2
- **Failed:** 0
- **Pending:** 0
- **Skipped:** 0

## Regression Execution

```powershell
npx cypress run --browser chrome
```

The complete regression suite passed:

- **Specs:** 5
- **Total:** 22
- **Passed:** 22
- **Failed:** 0

## Notes

- Both session tests passed in Google Chrome.
- The complete regression suite also passed.
- Direct unauthenticated navigation to `/inventory.html` returned HTTP 404 before displaying the login page and access-control message.
- `failOnStatusCode: false` is limited to `SESSION-002` so the UI behavior can still be validated.
- No screenshots were generated during the successful execution.
- Video recording was disabled.