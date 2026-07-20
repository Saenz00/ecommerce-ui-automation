# E-Commerce UI Automation

End-to-end UI test automation project for the [SauceDemo](https://www.saucedemo.com/) e-commerce application using Cypress and JavaScript.

[![E2E Tests](https://github.com/Saenz00/ecommerce-ui-automation/actions/workflows/e2e-tests.yml/badge.svg)](https://github.com/Saenz00/ecommerce-ui-automation/actions/workflows/e2e-tests.yml)

## Objective

Demonstrate a structured QA workflow that includes test planning, manual test design, UI automation, execution evidence, and continuous integration.

## Tech Stack

- Cypress
- JavaScript
- Node.js
- Git and GitHub
- GitHub Actions

## Documentation

- [Requirements Analysis](docs/requirements-analysis.md)
- [Test Scope](docs/test-scope.md)
- [Test Strategy](docs/test-strategy.md)
- [Test Plan](docs/test-plan.md)
- [Manual Test Cases](docs/test-cases/)
- [Automation Results](docs/test-results/)
- [Test Summary Report](docs/test-summary-report.md)

## Getting Started

### Prerequisites

- Node.js 22
- npm
- Google Chrome
- Git

### Installation

```bash
git clone https://github.com/Saenz00/ecommerce-ui-automation.git
cd ecommerce-ui-automation
npm ci
```

### Running the Tests

Run the complete regression suite in Google Chrome:

```bash
npm test
```

Open Cypress in interactive mode:

```bash
npm run cy:open
```

Run Cypress headlessly with its default browser:

```bash
npm run cy:run
```

## Current Coverage

### Authentication

- Valid login
- Locked-out user
- Invalid password
- Required username validation
- Required password validation

### Product Inventory

- Product information display
- Name sorting from A to Z
- Name sorting from Z to A
- Price sorting from low to high
- Price sorting from high to low

### Shopping Cart

- Add one product
- Add multiple products
- Validate selected product information
- Remove one product
- Remove all products

### Checkout

- Required first name validation
- Required last name validation
- Required postal code validation
- Order overview and totals
- Successful order completion

### Session Management

- User logout
- Protected page access without authentication

**Regression result:** 22 automated tests passed in Google Chrome.

## Project Status

The planned authentication, inventory, shopping cart, checkout, and session scenarios have been designed, executed manually, and automated with Cypress.