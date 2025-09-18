# 🎉 EventHub

EventHub is a React.js and TailwindCSS-powered web application that enables event organizers to create and showcase their events for greater visibility. The platform also allows users to log in, manage their accounts, and create events that can be marketed to a broader audience.

## 🚀 Features

* **User Authentication** – Secure login and registration.
* **Event Creation** – Organizers can create and manage events.
* **Event Visibility** – Events are displayed on the platform for marketing purposes.
* **Responsive Design** – Optimized for both desktop and mobile devices.
* **Modern UI** – Built with TailwindCSS for a clean and sleek interface.

## 🛠️ Tech Stack

* **Frontend:** React.js, TailwindCSS
* **Authentication:** Firebase Authentication *(if implemented)* or custom auth
* **State Management:** React Context API / Hooks
* **Deployment:** Vercel / Netlify *(or your chosen platform)*

## 📂 Project Structure

```
src/
 ├── components/   # Reusable UI components (Navbar, Footer, Forms, etc.)
 ├── pages/        # Page-level components (Home, Login, Create Event, etc.)
 ├── services/     # Firebase or API integration files
 ├── App.js        # Main app component
 ├── index.css     # TailwindCSS styles
 └── main.js       # Application entry point
```

## ⚙️ Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/eddyfranc/eventhub.git
   cd eventhub
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

## 🚀 Deployment

This project can be deployed easily on:

* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)

To deploy:

```bash
npm run build
```

Th