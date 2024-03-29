
# WorthEat
WorthEats is a web application that connects food retail businesses and restaurants to consumers. The platform allows merchants to list their surplus food items at a discounted price, which would have otherwise been discarded as food waste. The business interface is designed for retail businesses, restaurants, and supermarkets to list their items. On the other hand, the customer interface is for users who want to purchase food items listed by these merchants. 

Customers can search for available food near them, purchase the fresh surplus food at a discounted price, and pick it up at the designated location and time. 

The platform also allows businesses to track their surplus food, plan better for future production, and reduce their operational costs.

# How to Run The Project

1. Clone the repository from GitHub by running the following command in your terminal: `https://github.com/yilinTay1/SIT_CSC2012_PSD_AY2023.git`
2. Install Material UI: `npm install @mui/material @emotion/react @emotion/styled`
3. Install react-bootstrap: `npm install react-bootstrap bootstrap`
4. Install the latest version of Node: `npm install -g npm` 
5. Install dependencies: `npm install`
6. Clone the repository from GitHub by running the following command in your terminal:
    * \SIT_CSC2012_PSD_AY2023-main\SIT_CSC2012_PSD_AY2023-main\server> `cd server` 
    * \SIT_CSC2012_PSD_AY2023-main\SIT_CSC2012_PSD_AY2023-main\server> `npm run dev` 
7. Open another terminal window, and navigate to the client directory by running the following command:
    * \SIT_CSC2012_PSD_AY2023-main\SIT_CSC2012_PSD_AY2023-main\client> `cd client`
    * \SIT_CSC2012_PSD_AY2023-main\SIT_CSC2012_PSD_AY2023-main\client> `npm run dev`
8. View the web application on: `http://localhost:3000`

## If you encounter issues running the project or encounter dependency errors:

- Check your Node.js version: `node -v`. Make sure your Node.js and npm versions are up to date for `React 18`
- Use yarn instead of npm

# Docker

Our application is containerized using Docker, with Frontend and Backend each inside a container of their own, and both containers contained within a top container. Each container will expose their service under a unique PORT with their own API endpoints, and communication between containers are done solely through REST API calls. 

## Service Container
| Service | Port |
| --- | --- |
|Frontend |3000|
|Backend |5000|

## Docker configurations
![image](https://user-images.githubusercontent.com/97490747/227083643-610980a4-520d-4a1b-b1ad-1657a425e6a1.png)


## Getting Started
How to start the application using Docker.
Make sure your have Docker installed in your system. After you have cloned the repository, follow the steps to launch the application.

| Frontend /client folder | Backend /server folder |
| ------------------| -------------------------------------- |
| Step 1 : cd client    | Step 1 : cd server   |
| Step 2 : yarn install | Step 2 : npm install |
| Step 2 : yarn install | Step 2 : npm install |
| Step 3 : yarn build   |                      |
| Step 4 : cd ..        | Step 3 : cd ..       |
| Final step : docker compose up |

![image](https://user-images.githubusercontent.com/97490747/227086037-62a1f1fc-8fd9-4cd0-9955-546c0b393359.png)


# Backend

## Authentication

The project contains the following authentication providers:

### Google Firebase Authentication (Cloud Service)

| Provider           | Description                            |
| ------------------| -------------------------------------- |
| Emails and password| User registered using emails and passwords |

![image](https://user-images.githubusercontent.com/97490747/227077444-e1ee0b7f-2922-4a75-8fef-fe7087ce4731.png)

## Databases

The project contains the following databases:

### Google FireStore Database (Cloud Service)

| Collection | Description                         |
| ---------- | ----------------------------------- |
| `customers`  | Buyers                              |
| `Business`   | Sellers                             |
| `Listings`   | Sellers' listed items               |
| `profitDaily` | Sellers' daily profits              |
| `orders`   | Buyers' order summary               |

![image](https://user-images.githubusercontent.com/97490747/227077774-c6c98081-06f6-45b6-b512-950454b26c8c.png)

## Machine Learning (ML)
In this project, we have used a machine learning algorithm to recommend customers food items based on their previous ratings. This machine algorithm will be integrated in the project under 'Recommended For You' at http://localhost:3000/customer/home whereby a list of recommended food items will be displayed for the user.

### server/ML
| Component | Description |
| --- | --- |
| `ML` | A component for machine learning algorithm of ratings. |

### Implementation of ML
1. Food item recommendations for User 1
* Login as test@test.com (email address) and 123456 (password)
* At http://localhost:3000/customer/home , view recommendations for User 1 at 'Recommended For You'

![image](https://user-images.githubusercontent.com/112333943/227071546-487950ec-7eff-4526-9785-71b5d7ec375b.png)

2. Food item recommendations for User 2
* Login as test2@test.com (email address) and 123456 (password)
* At http://localhost:3000/customer/home , view recommendations for User 2 at 'Recommended For You'

![image](https://user-images.githubusercontent.com/112333943/227071721-43cdae26-f865-40da-9422-9485c854ebb8.png)

### Inside server/ML/
| Component | Description |
| --- | --- |
| `foodData.csv` | Sample dataset of food items |
| `FoodRecommend.js` | Food item recommendation based on the machine learning algorithm in `RecommendEngine.js`. Food items will be generated based on the machine learning algorithm and displayed in http://localhost:3000/customer/home under 'Recommended For You'. |
| `ratings.csv` | Sample dataset of ratings given by various users |
| `RecommendEngine.js` | Machine learning algorithm to recommend food items based on past ratings. |

# Business Dashboard Web Application
![image](https://user-images.githubusercontent.com/112333943/226602007-003a92a0-6f62-4980-ab33-e2dd1c9b3a3e.png)

This project contains the source code for a business dashboard web application that allows users to manage their business listings, view order history, and update account settings.

## Getting Started
To access the dashboard, you will need to log in with your business credentials. To do this, go to http://localhost:3000/business/login and enter your email address and password. After logging in, you will be redirected to http://localhost:3000/business/dashboard, which is the main dashboard for your business.

## Components
The project contains the following components:

### src/components/business
| Component | Description |
| --- | --- |
| `settings` | A component that allows users to update their account settings, such as their email address and password. |
| `history` | A component that displays the order history for the user's business, including the date, time, and items ordered. |
| `addListing` | A component that allows users to add a new listing for their business, including the name, description, price, and images. |
| `dashboard` | A component that serves as the main dashboard for the business user, displaying an overview of their listings and orders. |
| `business` | A component that displays the details of the user's business, including the name, logo, and contact information. |
| `dashboard-layout.js` | A component that defines the layout of the dashboard, including the header, sidebar, and main content area. |
| `dashboard-navbar.js` | A component that displays the navigation bar for the dashboard, including links to the various pages and actions. |
| `dashboard-sidebar.js` | A component that displays the sidebar for the dashboard, including links to the user's listings and settings. |

### client/src/pages/business
| Page | Description |
| --- | --- |
| `login.js` | A page that displays the login form for the business user, including fields for their email address and password. |
| `dashboard.js` | A page that displays the main dashboard for the business user, including summary information about their listings and orders. |
| `history.js` | A page that displays the order history for the user's business, including a table of all the orders and the ability to filter and sort them. |
| `addListing.js` | A page that allows users to add a new listing for their business, including a form for entering the details and uploading images. |
| `register.js` | A page that displays the registration form for the business user, including fields for their business name, email address, and password. |
| `order.js` | A page that displays the details of an individual order, including the customer's name and contact information, the items ordered, and the total price. |
| `settings.js` | A page that allows users to update their account settings, including their email address and password. |

## Usage
After logging in at http://localhost:3000/business/login, you can access the following pages:

- http://localhost:3000/business/dashboard: The main dashboard for your business, displaying an overview of your listings and orders.
- http://localhost:3000/business/addListing: Allows you to add a new listing for your business, including the name, description, price, and images.
- http://localhost:3000/business/order: Allows you to view your orders, including the customer's name and contact information, the items ordered, and After logging in at http://localhost:3000/business/login, you can access the following pages:
- http://localhost:3000/business/dashboard: The main dashboard for your business, displaying an overview of your listings and orders.
- http://localhost:3000/business/addListing: Allows you to add a new listing for your business, including the name, description, price, and images.
- http://localhost:3000/business/order: Allows you to view your orders, including the customer's name and contact information, the items ordered, and the total price.
- http://localhost:3000/business/history: Allows you to view your past 6 months of income, including the date, total sales, and total revenue.
- http://localhost:3000/business/settings: Allows you to update your account settings, including your email address and password.

# Customer Online Food Order Web Application
![image](https://user-images.githubusercontent.com/112333943/226601743-dd1649ce-85e4-4a20-8130-a1aaaf0bbbb9.png)
![image](https://user-images.githubusercontent.com/112333943/226988039-0ab34d39-eafb-4b5a-8e48-74fb111e87c7.png)


This project contains the source code for a online food order website for restaurants to repurpose their excess ingredients into other dishes which are not on their actual main menus. This helps to provide more affordable food options for consumers as well as reduce food wastage for restaurants in the food and beverage industry.

## Getting Started
To access the website, you will need to log in with your customer credentials. To do this, go to http://localhost:3000/customer/login and enter your email address and password. After logging in, you will be redirected to http://localhost:3000/customer/home, which is the main page for the website. It will show a list of restaurant categories, featured restaurants and recommended for you food items.

## Components
The project contains the following components:

### src/components/customer_view
| Component | Description |
| --- | --- |
| `history` | A component that displays the customer's past order history which includes: order number, date, restaurant name, order items, total price and ratings |
| `home` | A component that displays the restaurant cuisines categories. |
| `navigation` | A component that contains a navbar for the main page after user has logged in and another navbar (loginNav.js) for the login page before user logins with their credientials |
| `restaurant` | A component that briefly describes the restaurant details when user clicks into restaurant. |
| `settings` | A component that displays the user's account details and also allows users to change password and save notification preferences. |
| `searchbar.js` | A component that displays the search bar used throughout the website. |

### client/src/pages/customer
| Page | Description |
| --- | --- |
| `order` | Consists of the individual restaurant pages which users can click to view the restaurant details and place order for their food choices |
| `cafe.js` | A page that displays all the restaurants under cafe cuisine category. |
| `change_pwd.js` | A page that allows authenticated users to change their password. |
| `chinese.js` | A page that displays all the restaurants under chinese cuisine category. |
| `history.js` | A page that displays all the order history of the user. |
| `home.js` | A page that displays the website's home page details that shows the list of restaurant cuisine categories and the list of featured restaurants. |
| `japanese.js` | A page that displays all the restaurants under japanese cuisine category. |
| `login.js` | A page that displays the login page for users. |
| `register.js` | A page that displays the sign up page for users. |
| `reset_pwd.js` | A page that allows users to reset their password. |
| `setting.js` | A page that allows users to view their account details, change password and set notification preferences. |
| `western.js` | A page that displays all the restauarants under western cuisine category. |

## Usage
After logging in at http://localhost:3000/customer/login, you can access the following pages:

- http://localhost:3000/customer/home: The main home page of the website where users can see the list of restaurant cuisines, featured restaurants.
- http://localhost:3000/customer/history: Allows you to view past order history made previously by the user.
- http://localhost:3000/customer/settings: Allows you to view the account details, change password and set notifications

Once clicked into a restaurant
- User will be redirected to the restaurant's order page (example: http://localhost:3000/customer/order/mcdonalds) which allows user to be redirected to the Mcdonalds order page in this case. User can view the restaurant details and food items which they can add to cart and order.

![image](https://user-images.githubusercontent.com/112333943/226990498-fa096b90-e9a5-48e8-9260-2f5b466702f2.png)
![image](https://user-images.githubusercontent.com/112333943/226990838-e199c17e-2aa5-4da4-b075-bff0c3f5eb9f.png)

- Once confirm checkout, the order will be submitted to the database and displayed in order history.

To logout, users can click on the profile beside the shopping cart and logout from there.


