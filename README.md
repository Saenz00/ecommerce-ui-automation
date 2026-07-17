# E-Commerce UI Automation

End-to-end UI test automation project for the [SauceDemo](https://www.saucedemo.com/) e-commerce application using Cypress and JavaScript.

## Objective

Demonstrate a structured QA workflow that includes test planning, manual test design, UI automation, execution evidence, and continuous integration.

## Tech Stack

- Cypress
- JavaScript
- Node.js
- Git and GitHub

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