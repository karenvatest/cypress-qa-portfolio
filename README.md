
# Cypress Automation Practice Suite

## 📌 Overview

This repository contains automated test scenarios developed using Cypress, covering UI and API validation exercises.

The purpose of this project is to demonstrate:

- End-to-end UI automation
- Form validation testing
- API + UI interaction testing
- Clean test structure and best practices

---

## 🧰 Tech Stack

- Cypress
- JavaScript
- Node.js

---

## 🧪 Test Modules

### 1️⃣ Login Automation
- Valid login scenario
- Invalid credentials validation

### 2️⃣ Form Validation
- Required field validation
- Positive submission flow
- Negative validation cases
- Accessibility-based assertions

### 3️⃣ API + UI Validation (ApiUI)
- API request validation 
- Status code assertions
- Response body validation
- UI behavior based on API response

---

## 🏗 Project Structure

```
  cypress/
  ├── e2e/
  │ ├── login.cy.js
  |   ├── pages/
  │     └── LoginPage.js
  |   ├── test/
  │   └── LoginPom.cy.js
  │ ├── forms.cy.js
  │ └── apiui.cy.js
  ├── fixtures/
  ├── support/
  │ └── commands.js
```

---

## 💡 Best Practices Implemented

- Custom reusable commands
- Clean test naming conventions
- Positive and negative scenario separation
- Page Object Model (POM) to separate test logic from UI interaction

---

## 👩‍💻 Author

> Karen Gisela Valdez  
QA Engineer transitioning into Automation  
Focused on scalable, maintainable and reliable test frameworks.
