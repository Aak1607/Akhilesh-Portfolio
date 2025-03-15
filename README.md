# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### 🚀 **Step-by-Step Guide to Host Your Full-Stack Website for Free**  

Since **GitHub Pages** only supports **static websites**, we will:  
1️⃣ **Deploy the frontend (React) on GitHub Pages**  
2️⃣ **Deploy the backend (Node.js + MySQL) on Render (free hosting)**  
3️⃣ **Use a free MySQL database (Railway or PlanetScale)**  

---

# **🔹 Step 1: Deploy Backend (Node.js + MySQL) on Render**
Render provides free hosting for Node.js applications. Follow these steps:

### ✅ **1.1 Create a Render Account**  
1. Go to **[Render](https://render.com/)**
2. Sign up using **GitHub** or **Google**  
3. Click **"New Web Service"**  

### ✅ **1.2 Connect Your GitHub Repository**  
1. Push your **backend code** (server.js, package.json, etc.) to a new GitHub repo.  
2. In Render, click **"Connect GitHub Repository"** and select your backend repo.  

### ✅ **1.3 Configure Render Deployment**  
- Set **Environment** to `Node.js`  
- Set **Build Command:**  
  ```sh
  npm install
  ```
- Set **Start Command:**  
  ```sh
  node server.js
  ```
- Click **"Create Web Service"** and wait for deployment.

🎉 **Your backend API is now live!**  
👉 Copy the **Render API URL** (e.g., `https://your-backend.onrender.com`).

---

# **🔹 Step 2: Set Up Free MySQL Database (Railway or PlanetScale)**
Since GitHub Pages **cannot store data**, you need an external MySQL database.

### ✅ **Option 1: Railway (Easiest)**
1. Go to **[Railway](https://railway.app/)**
2. Sign up using **GitHub**
3. Click **"New Project" → "Provision MySQL"**
4. Copy **Database URL** (e.g., `mysql://user:password@host/dbname`)

### ✅ **Option 2: PlanetScale (More Features)**
1. Go to **[PlanetScale](https://planetscale.com/)**
2. Sign up and **create a new MySQL database**
3. Copy **connection string** and add it to your backend

### ✅ **2.1 Update Backend to Use MySQL**
In your `server.js`, replace MongoDB with MySQL:

#### 🔹 **Install MySQL package**
```sh
npm install mysql2
```

#### 🔹 **Modify `server.js` to use MySQL**
```javascript
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "your-mysql-host",
    user: "your-username",
    password: "your-password",
    database: "your-database-name"
});

db.connect((err) => {
    if (err) {
        console.error("❌ MySQL Connection Failed:", err);
    } else {
        console.log("✅ MySQL connected successfully!");
    }
});

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    db.query("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)", 
    [name, email, message], 
    (err, result) => {
        if (err) {
            res.status(500).send("❌ Error saving message");
        } else {
            res.status(201).send("✅ Message saved successfully!");
        }
    });
});
```

🔹 **Push changes to GitHub**, and **Render will redeploy automatically!**

---

# **🔹 Step 3: Deploy React Frontend on GitHub Pages**
### ✅ **3.1 Install GitHub Pages Package**
Run this inside your **React project**:
```sh
npm install gh-pages --save-dev
```

### ✅ **3.2 Update `package.json`**
Add these lines:
```json
"homepage": "https://your-github-username.github.io/your-repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### ✅ **3.3 Deploy Frontend**
Run:
```sh
npm run deploy
```

🎉 **Your website is now live on GitHub Pages!**  
👉 **Check:** `https://your-github-username.github.io/your-repo-name`

---

# **🔹 Step 4: Connect Frontend to Backend**
Edit your **React Contact Form** (`Contact.js`):

```javascript
<form action="https://your-backend.onrender.com/contact" method="POST">
```
👉 Replace `"https://your-backend.onrender.com"` with your **Render API URL**.

---

# **🔹 Step 5: View Messages in Admin Dashboard**
Modify `AdminDashboard.js` to fetch messages from your **backend API**:

```javascript
useEffect(() => {
    fetch("https://your-backend.onrender.com/messages")
        .then((res) => res.json())
        .then((data) => setMessages(data))
        .catch((error) => console.error("Error fetching messages", error));
}, []);
```

---

# 🎉 **Final Setup**
✅ **Frontend (React) → GitHub Pages**  
✅ **Backend (Node.js) → Render**  
✅ **Database (MySQL) → Railway/PlanetScale**  
✅ **Admin Dashboard to view messages**  

Now, your contact form **works globally** even after deployment! 🚀🔥  

Let me know if you need any help! 🚀💡