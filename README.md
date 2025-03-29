# CopyShop Automation Project

This project is a full-stack web application that integrates a Next.js frontend with a Django backend. The Next.js app fetches data from the Django API and displays it dynamically.

## Features
- **Next.js frontend** with Tailwind CSS for styling.
- **Django backend** serving API endpoints.
- **Fetch API integration** to get dynamic data from Django.
- **Deployable** to Vercel (for Next.js) and any Django-compatible hosting service.

## Prerequisites
- Node.js (v18+ recommended)
- Python (v3.8+ recommended)
- Django (v4+ recommended)

## Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone [https://github.com/nexussjcet/canteen_copyshop_Automation.git cd canteen_copyshop_Automation]
```

### 2️⃣ Set Up the Django Backend
#### Install dependencies:
```sh
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```
#### Run the development server:
```sh
python manage.py runserver
```
#### API Endpoint Example:
The Django backend provides an API at:
```
http://127.0.0.1:8000/api/message/
```

### 3️⃣ Set Up the Next.js Frontend
#### Install dependencies:
```sh
cd frontend
npm install
```
#### Start the development server:
```sh
npm run dev
```
Now visit `http://localhost:3000/` to see the Next.js app running.

## Project Structure
```
/your-repo
│── backend/       # Django backend
│   ├── api/       # Django app containing API endpoints
│   ├── manage.py  # Django project manager
│   ├── ...        # Other Django files
│
│── frontend/      # Next.js frontend
│   ├── pages/     # Next.js pages
│   ├── public/    # Static assets
│   ├── styles/    # Global styles
│   ├── ...        # Other frontend files
│
│── README.md      # Project documentation
```

## API Endpoint Example
The Django backend provides the following API:

| Method | Endpoint          | Description                     |
|--------|------------------|---------------------------------|
| GET    | `/api/message/`  | Returns a message from backend |

## Deployment

### Deploying Next.js to Vercel
```sh
vercel
```
Follow the instructions to deploy your frontend.

### Deploying Django Backend
- Use **Railway**, **Render**, or **Heroku** to deploy your Django backend.

## Troubleshooting
- Ensure both the **backend** and **frontend** are running.
- If API calls fail, check CORS settings in Django.
- Run `npm run lint` to check for frontend errors.

## License
This project is licensed under the MIT License.

---

Happy coding! 🚀

