![AssetOptimizex](https://i.ibb.co.com/ccvTTmN6/Screenshot-2025-02-05-155218.png)
# AssetOptimizex

AssetOptimizex is a robust and efficient **Digital Asset Management System** designed to streamline the organization, management, and collaboration of digital assets within an organization. Built with a modern tech stack, it ensures high performance, security, and scalability.


## 🌟 Features

- **Organization Management**: Create or join organizations using unique joining codes.
- **User Authentication**: Secure JWT-based token authentication.
- **Email Verification**:  Confirm organization account access via email verification, send member join links via email, and support password reset emails with a reset timeout of 900 seconds.
- **Member Management**: Add members to an organization and assign specific permissions.
- **Asset Library**: Create libraries and manage assets efficiently.
- **Version Control**: Keep track of different versions of assets, including revisions and updates. Restore or roll back to previous versions when necessary.
- **Search Features**: Search assets and libraries for quick and easy access.
- **Asset Permissions**: Control access and manage permissions for assets.
- **Premium Access**: Upgrade to premium plans with SSLCommerz integration.


## 🛠️ Tech Stack

### **Backend**
- Django Rest Framework (DRF)

### **Frontend**
- React
- TailwindCSS

### **Authentication**
- JWT Token-based Authentication

### **Payment Integration**
- SSLCommerz


## 📦 Features Overview

### **Organization Management**
- **Create Organization**: Users can create a new organization during registration.
- **Join Organization**: Use a unique joining code to join existing organizations.

### **Member Management**
- Add members to an organization.
- Assign specific permissions to members.

### **Asset Library**
- Create libraries to store and organize assets.
- Add and manage assets within the library.

### **Version Control**
- Keep track of different versions of assets, including revisions and updates.
- Restore or roll back to previous versions when necessary.

### **Search Features**
- Search assets and libraries for quick and easy access.

### **Asset Permissions**
- Set permissions for accessing or editing assets.

### **Premium Access**
- Upgrade to premium using SSLCommerz for advanced features.


## 📧 Email Verification
- Users registering for an organization account receive a confirmation email.
- Email verification ensures secure and legitimate access to organization accounts.
- Member join links are sent via email to streamline the onboarding process.
- Password reset emails are sent with a reset timeout of 900 seconds.


## 🔒 Security
- JWT-based authentication ensures secure and stateless sessions.
- Role-based permissions for organization members.



## 💡 Contributors

| Name           | Role           |
|----------------|----------------|
| Mainul Hasan   | Team leader    |
| Abdul Hasib    | Team member    |


## 📬 Contact
For inquiries or support, please contact:
- **Email**: assetoptimizex@gmail.com
- **Website**: [AssetOptimizex](https://assetoptimizex.netlify.app/home)

## 📦 Dependencies Used

- Django: Web framework for the backend.

- Django REST Framework: For creating APIs.

- React: JavaScript library for building the frontend.

- TailwindCSS: Utility-first CSS framework for styling.

- JWT: For secure user authentication.

You can install the dependencies with:

Backend:

```bash
pip install -r requirements.txt
```
Frontend:
```bash
npm install
```

## 🚀 Run the Project Locally

Follow these steps to get your project up and running on your local machine:

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (for React frontend)
- [Python](https://www.python.org/) (for Django backend)
- [Git](https://git-scm.com/)


### 1. Clone the Repository

Start by cloning the repository to your local machine using the following command:

```bash
git clone https://github.com/abdulHasib2030/AssetOptimizeX.git
```

### 2. Set up the Backend

Navigate to the backend directory and install the required Python packages:

```bash
cd asset_optimizeX_server
pip install -r requirements.txt
```

### 3. Start the Backend Server

Once the dependencies are installed, run the Django development server with the following command:

```bash
python manage.py runserver
```

### 4. Set up the Frontend

Next, navigate to the frontend directory and install the required JavaScript packages:

```bash
cd asset_optimizeX_client
npm install
```

### 5. Start the Frontend Server

After the dependencies are installed, start the React development server by running:

```bash
npm run dev
```


