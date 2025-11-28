Below is a **clean, clear, interview-ready explanation** of your full project (Frontend + Backend + Test Case Evaluation).

I have rewritten everything **properly, in technical English**, so you can speak this confidently in interviews.

---

# ✅ **Final Explanation for Interview (Clean + Professional)**

Use this exact script:

---

## **1. Frontend Development**

We built the frontend using **simple HTML, CSS, and JavaScript**, without any framework.
To make the interface similar to LeetCode or HackerRank:

### ✔ Split Screen Layout

We used **CSS Flexbox** to divide the screen into two parts:

* **Left side:** Problem statement
* **Right side:** Code editor + Run/Evaluate output

This provides a clean dashboard-like interface for the user while coding.

### ✔ Dark Mode Toggle

A small JavaScript function toggles a `.dark-mode` class on the body
so the whole UI switches between light and dark themes.

---

## **2. Code Editor (Monaco Editor)**

Instead of using a normal `<textarea>`, we integrated **Monaco Editor**,
the same editor that VS Code uses.

* Installed via CDN
* Initialized using `monaco.editor.create()`
* Used `editor.getValue()` to extract user-written code

This makes the coding experience realistic.

---

## **3. Backend Server (Node.js + Express)**

We created a backend using **Express.js**.
The backend is responsible for:

* Serving different HTML pages using **GET routes**
* Receiving the user's code using **POST routes**
* Running the Python code
* Evaluating test cases
* Sending the result back to the frontend

### ✔ Routing

We made **separate routes** such as:

* `/` → home page
* `/problem/:id` → serves specific problem HTML
* `/run` → runs user code
* `/evaluate` → checks test cases

---

## **4. Connecting Frontend to Backend (REST APIs)**

We used `fetch()` API with **async/await** to send code to backend:

```js
const res = await fetch("http://localhost:8000/run", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ code })
});
```

The backend receives the code using:

```js
app.post("/run", (req, res) => { ... });
```

This allows **real-time** communication between frontend and backend.

---

## **5. Loading Problems from JSON (Test Case Storage)**

All problem statements and test cases are stored inside a file:

```
problems.json
```

Each problem contains:

* `id`
* `title`
* `description`
* `testCases` (array of `{input, output}` objects)

The backend loads this file:

```js
const problems = JSON.parse(fs.readFileSync("problems.json"));
```

This allows easy addition of new problems.

---

## **6. Running User Code (Python Execution)**

We save the user code into a temporary Python file:

```js
fs.writeFileSync("temp.py", code);
```

Then run it using:

```js
execSync("python temp.py", { input: testcase.input });
```

### ✔ Handling Errors

We use a `try–catch` block:

* If Python throws an error → Categorized as **runtime / compile time error**
* If it runs successfully → Output is compared with expected output

---

## **7. Evaluating Test Cases**

We loop through all test cases:

```js
problem.testCases.forEach((tc, index) => {
    ...
});
```

For each test case:

* Pass the input
* Capture the output
* Trim whitespace
* Compare with expected output
* Store `passed: true/false`

Finally, return the results to frontend:

```json
{
  "results": [
    { "testCase": 1, "passed": true },
    { "testCase": 2, "passed": false }
  ]
}
```

---

## **8. Important Note**

We must load the **correct problem ID**, or else **wrong test cases** will be evaluated.

---

# 🎯 **This is a full LeetCode-like project explanation.

You can say this confidently in your interview.**

If you want, I can also prepare:

✔ A shorter 1-minute version
✔ A long explanation for resume
✔ A project architecture diagram
✔ A complete README.md for GitHub

Just tell me!
