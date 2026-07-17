# Session Test Cases

## SESSION-001: Log out from an authenticated session

- **Priority:** Medium
- **Type:** Positive
- **Precondition:** The user is authenticated.

### Steps

1. Open the side menu.
2. Click **Logout**.

### Expected Result

- The user is redirected to the login page.
- The username and password fields are displayed.
- Protected application content is no longer visible.

### Actual Result

- The user was redirected to the login page.
- The authentication fields were displayed.
- Protected application content was no longer visible.

- **Status:** Passed
- **Execution date:** 2026-07-17

---

## SESSION-002: Access a protected page without authentication

- **Priority:** High
- **Type:** Negative
- **Precondition:** The user is logged out.

### Steps

1. Open `https://www.saucedemo.com/inventory.html` directly.

### Expected Result

- The user is redirected to the login page.
- The **Products** page is not displayed.
- An access-control error is displayed.

### Actual Result

- The user was redirected to `/`.
- The **Products** page was not displayed.
- The following error was displayed: `Epic sadface: You can only access '/inventory.html' when you are logged in.`

- **Status:** Passed
- **Execution date:** 2026-07-17

## Execution Information

- **Browser:** Google Chrome
- **Environment:** SauceDemo public demo site
- **Executed by:** Felipe de Jesús Ramírez Sáenz