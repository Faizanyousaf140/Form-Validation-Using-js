# 📋 Form Validation Using JavaScript

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A clean, responsive front-end form validation project featuring a **Sign Up** and **Sign In** form — built with pure HTML, CSS, and vanilla JavaScript. No libraries, no frameworks — just the fundamentals done right.

---

## ✨ Features

- ✅ Real-time client-side form validation
- 🔐 Sign Up with 9 input fields covering diverse input types
- 🔑 Sign In with username and password validation
- 📱 Responsive, centered card layout
- ❌ Inline error messages displayed below each invalid field
- 🎨 Clean UI with hover effects and smooth styling
- 🔗 Navigation links between Sign In and Sign Up pages

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and form markup |
| CSS3 | Styling, layout, and responsiveness |
| JavaScript (ES6+) | DOM manipulation and validation logic |

---

## 📂 Project Structure

```
Form-Validation-Using-js/
│
├── signin.html       # Sign In page
├── signup.html       # Sign Up page
├── Style.css         # Shared stylesheet for both pages
└── Script.js         # Validation logic for both forms
```

---

## 📝 Form Fields & Validation Rules

### 🔏 Sign Up Form

| Field | Type | Validation Rule |
|---|---|---|
| Full Name | Text | Required — must not be empty |
| Email | Email | Must match valid email format (e.g. `user@example.com`) |
| Password | Password | Minimum 6 characters, must include at least one number and one special character (`!@#$%^&*`) |
| Age | Number | Must be between **18** and **60** |
| Phone Number | Tel | Must be exactly **11 digits** |
| Gender | Select | Must select an option (Male / Female / Other) |
| Address | Text | Required — must not be empty |
| City | Text | Required — must not be empty |
| Country | Text | Required — must not be empty |

### 🔑 Sign In Form

| Field | Type | Validation Rule |
|---|---|---|
| Username | Text | Required — must not be empty |
| Password | Password | Minimum 6 characters, must include a number and special character |

---

## 🚀 Getting Started

No build tools or dependencies required. Simply open the project in a browser:

1. **Clone the repository**

   ```bash
   git clone https://github.com/Faizanyousaf140/Form-Validation-Using-js.git
   ```

2. **Navigate to the project folder**

   ```bash
   cd Form-Validation-Using-js
   ```

3. **Open `signup.html` or `signin.html` in your browser**

   ```bash
   # macOS
   open signup.html

   # Windows
   start signup.html

   # Linux
   xdg-open signup.html
   ```

   Or simply double-click either HTML file in your file explorer.

---

## 🖥️ How It Works

- On form **submit**, the JavaScript validation functions run and check each field.
- If a field fails validation, a red error message appears directly below it.
- If **all fields pass**, a success alert is shown and the form resets.
- The Sign Up and Sign In pages are linked — users can navigate between them via the links at the bottom of each form.

---

## 📁 Key Validation Logic (Script.js)

```js
// Email format check
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// Password: 6+ chars, at least one number and one special character
/^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/

// Phone: exactly 11 digits
/^\d{11}$/
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 👤 Author

**Faizan Yousaf**
- GitHub: [@Faizanyousaf140](https://github.com/Faizanyousaf140)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
