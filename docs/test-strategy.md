# Test Strategy

## Purpose

Define the testing approach for validating the main user workflows of the SauceDemo e-commerce application.

## Testing Approach

The project combines manual testing and Cypress end-to-end automation.

Manual testing is used first to understand application behavior, design scenarios, and identify risks. Stable and repeatable scenarios are then selected for automation.

## Test Types

- Functional testing
- End-to-end testing
- Positive testing
- Negative testing
- Boundary value testing
- Regression testing
- Exploratory testing

## Test Priorities

### High Priority

- Valid user login
- Adding products to the cart
- Cart content validation
- Successful checkout completion

### Medium Priority

- Invalid login attempts
- Required checkout field validation
- Removing products from the cart
- Product sorting
- User logout

## Test Design Techniques

- Equivalence partitioning for valid and invalid inputs
- Boundary value analysis for required text fields
- Decision-based scenarios for authentication results
- User workflow testing for cart and checkout processes

## Automation Approach

Automation will focus on scenarios that are:

- Business-critical within the demo application
- Stable and repeatable
- Suitable for regression testing
- Independent from other tests when possible

Tests will use clear assertions, reusable commands, controlled test data, and selectors provided by the application.

## Test Environment

- **Environment:** SauceDemo public demo site
- **Primary browser:** Google Chrome
- **Automation framework:** Cypress
- **Programming language:** JavaScript

## Test Data

- Use only credentials published by SauceDemo.
- Do not use real personal or payment information.
- Keep reusable test data separate from test logic when appropriate.

## Entry Criteria

- The SauceDemo website is available.
- Test credentials are visible and usable.
- The Cypress project is installed and configured.
- The scenarios to be tested are documented.

## Exit Criteria

- Planned scenarios have been executed.
- High-priority automated tests pass.
- Failed tests have been investigated.
- Confirmed defects, risks, and limitations are documented honestly.

## Defect Reporting

Only reproducible unexpected behavior will be reported as a defect. Expected behavior, test limitations, and improvement ideas will be documented separately.

## Evidence and Reporting

Test execution results may include Cypress logs, screenshots, videos, and summary reports. Evidence will be generated and stored only when it provides value.