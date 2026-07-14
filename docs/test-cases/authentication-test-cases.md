# Authentication Test Cases

## AUTH-001: Login with valid credentials

- **Priority:** High
- **Type:** Positive
- **Precondition:** The login page is available.
- **Test data:**
  - Username: `standard_user`
  - Password: `secret_sauce`

### Steps

1. Open the SauceDemo login page.
2. Enter the valid username.
3. Enter the valid password.
4. Click **Login**.

### Expected Result

- The user is redirected to `/inventory.html`.
- The **Products** page is displayed.
- No authentication error is shown.

### Actual Result

- The user was redirected to `/inventory.html`.
- The **Products** page was displayed.
- No authentication error was shown.

- **Status:** Passed
- **Execution date:** 2026-07-13

---

## AUTH-002: Login with a locked-out user

- **Priority:** High
- **Type:** Negative
- **Precondition:** The login page is available.
- **Test data:**
  - Username: `locked_out_user`
  - Password: `secret_sauce`

### Steps

1. Open the SauceDemo login page.
2. Enter the locked-out username.
3. Enter the valid password.
4. Click **Login**.

### Expected Result

- The user remains on the login page.
- An error explaining that the user is locked out is displayed.

### Actual Result

- The user remained on the login page.
- The **Products** page was not displayed.
- The following error was displayed: `Epic sadface: Sorry, this user has been locked out.`

- **Status:** Passed
- **Execution date:** 2026-07-13

---

## AUTH-003: Login with an invalid password

- **Priority:** High
- **Type:** Negative
- **Precondition:** The login page is available.
- **Test data:**
  - Username: `standard_user`
  - Password: `invalid_password`

### Steps

1. Open the SauceDemo login page.
2. Enter the valid username.
3. Enter an invalid password.
4. Click **Login**.

### Expected Result

- The user remains on the login page.
- An authentication error is displayed.

### Actual Result

- The user remained on the login page.
- The **Products** page was not displayed.
- The following error was displayed: `Epic sadface: Username and password do not match any user in this service`

- **Status:** Passed
- **Execution date:** 2026-07-13
---

## AUTH-004: Login without a username

- **Priority:** Medium
- **Type:** Negative
- **Precondition:** The login page is available.
- **Test data:**
  - Username: Empty
  - Password: `secret_sauce`

### Steps

1. Open the SauceDemo login page.
2. Leave the username field empty.
3. Enter the valid password.
4. Click **Login**.

### Expected Result

- The user remains on the login page.
- A required username error is displayed.

### Actual Result

- The user remained on the login page.
- The **Products** page was not displayed.
- The following error was displayed: `Epic sadface: Username is required`

- **Status:** Passed
- **Execution date:** 2026-07-13
---

## AUTH-005: Login without a password

- **Priority:** Medium
- **Type:** Negative
- **Precondition:** The login page is available.
- **Test data:**
  - Username: `standard_user`
  - Password: Empty

### Steps

1. Open the SauceDemo login page.
2. Enter the valid username.
3. Leave the password field empty.
4. Click **Login**.

### Expected Result

- The user remains on the login page.
- A required password error is displayed.

### Actual Result

- The user remained on the login page.
- The **Products** page was not displayed.
- The following error was displayed: `Epic sadface: Password is required`

- **Status:** Passed
- **Execution date:** 2026-07-13