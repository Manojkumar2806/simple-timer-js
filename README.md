# Timer  with user Controlls⏱️

A sleek and responsive web-based timer built using HTML, CSS, and JavaScript. Designed for simplicity and functionality—perfect for productivity, workouts, or study sessions.

## 🔗 Live Link

[View Timer Live](timercontrols.ccbp.tech) 


## 🖼️ Screenshots

| Start View | Running Timer | Paused State |
|------------|----------------|---------------|
| ![Start View](https://github.com/user-attachments/assets/2d3f4613-5c24-4ddc-81ea-aaa7bd4d60e0) | ![Running Timer](https://github.com/user-attachments/assets/1d910328-bb51-4819-ad1e-3f5183671382) | ![Paused State](https://github.com/user-attachments/assets/2e3c2b04-69a8-4a16-9a75-95b7ddb5621e) |


---

## 🚀 Features

- ⏯️ **Start, Pause, and Reset** buttons to control the timer seamlessly.
- ➕➖ **+ / – buttons** to **manually increase or decrease time** before starting the timer.
- 🕒 Real-time timer display in MM:SS format.
- 📱 Fully responsive layout – mobile and desktop friendly.
- ⌛ Accurate time tracking using `setInterval()`.

---

## 🖱️ User Controls

| Button | Function |
|--------|----------|
| ➕ `+` | Increases the timer by 1 minute |
| ➖ `–` | Decreases the timer by 1 minute (if > 0) |
| ▶️ `Start` | Starts the timer countdown |
| ⏸️ `Pause` | Pauses the timer |
| 🔁 `Reset` | Resets the timer to initial state |





---

## 🧠 Challenges & Solutions

| Challenge | Solution |
|----------|----------|
| Accurate pausing and resuming | Used `setInterval()` and stored elapsed time to resume from paused point |
| Implementing + / – time controls | Incremented or decremented total time in seconds and updated display before starting |
| Preventing multiple intervals on repeated starts | Disabled Start button after initial click and re-enabled it only after Pause or Reset |
| Timer formatting | Used helper functions to format time as two-digit HH:MM:SS |
| UI responsiveness | Implemented flexbox and media queries for mobile support |


# Thank you for visiting my repo 💙
