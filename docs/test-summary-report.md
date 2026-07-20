# Test Summary Report

## Report Information

- **Project:** E-Commerce UI Automation
- **Application:** SauceDemo
- **Report date:** 2026-07-17
- **Environment:** Public demo environment
- **Primary browser:** Google Chrome
- **Automation framework:** Cypress 15.18.1

## Scope Executed

The following functional areas were tested manually and automated:

- Authentication
- Product inventory
- Shopping cart
- Checkout
- Session management

## Automated Results

| Functional Area | Tests | Passed | Failed |
|---|---:|---:|---:|
| Authentication | 5 | 5 | 0 |
| Product inventory | 5 | 5 | 0 |
| Shopping cart | 5 | 5 | 0 |
| Checkout | 5 | 5 | 0 |
| Session management | 2 | 2 | 0 |
| **Total** | **22** | **22** | **0** |

## Execution Summary

- **Passed:** 22
- **Failed:** 0
- **Pending:** 0
- **Skipped:** 0
- **Pass rate:** 100%

## Continuous Integration

The regression suite was executed successfully through GitHub Actions.

- **Workflow:** E2E Tests
- **Branch:** main
- **Result:** Passed
- **Duration:** 1 minute 20 seconds
- **Run:** [GitHub Actions execution](https://github.com/Saenz00/ecommerce-ui-automation/actions/runs/29620013762)

## Defects

No reproducible functional defects were confirmed during the executed scope.

This result does not indicate that the application is defect-free. It only reflects the scenarios and environment covered by this execution.

## Observations and Limitations

- Direct unauthenticated navigation to `/inventory.html` returned HTTP 404 before the login page and access-control message were displayed.
- SauceDemo is a public demonstration environment controlled by a third party.
- Testing was performed primarily in Google Chrome.
- Backend, API, database, performance, security, accessibility, and full cross-browser testing were outside the current scope.
- PDF order generation was observed but not tested.

## Exit Criteria Evaluation

- Planned functional scenarios were executed.
- All high-priority automated scenarios passed.
- Failed test attempts were investigated and corrected.
- Results and limitations were documented.
- The automated regression suite passed in continuous integration.

## Conclusion

The planned functional scope was completed successfully. All 22 automated tests passed locally and the regression suite also passed in GitHub Actions.