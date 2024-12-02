# node, npm install on ubuntu
```
sudo apt update -y
sudo apt install -y nodejs npm
```



Project: Frontend (React) and Backend (NodeJS) 
 
# Usage

## To Build and Run - Frontend (ReactJS app)

```
cd ./frontend
npm install
npm start
```

To access the Frontend application: http://localhost:3000

## To Build and Run - backend (NodeJS app)

```
cd ./backend
npm install
npm start
```

backend run on url: http://localhost:9000


## Demo steps 

1. Run backend first and then run frontend 
   > **Note:**
   If you intend to change the backend port to a new port number, you must update the corresponding new port in the frontend code (frontend/Dashboard.js, frontend/LoginForm.js).
2. To access the Frontend application: http://localhost:3000
   > **Note:** 
   If you execute the command “npm start,” npm will typically open in the default browser. You can manually access the application using the provided URL.
3. Login with username: admin and Password: admin 
   > **Note:** 
   The password can be modified in the backend/server.js file. 

4. Login page: http://localhost:3000
   ![Alt text](frontend/LoginForm.png) 
   Dashboard after login: 
   ![Alt text](frontend/DashBoard.png) 
> [!CAUTION]
   If you are running this in AWS EC2 with http, use a different browser instead of Google Chrome. Chrome enforces stricter policies for private network requests when the client is not served over HTTPS. 
