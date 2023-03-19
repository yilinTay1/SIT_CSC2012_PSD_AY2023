# Business Dashboard Web Application
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
This project contains the source code for a online food order website for restaurants to repurpose their excess ingredients into other dishes which are not on their actual main menus. This helps to provide more affordable food options for consumers as well as reduce food wastage for restaurants in the food and beverage industry.

## Getting Started
To access the website, you will need to log in with your customer credentials. To do this, go to http://localhost:3000/customer/login and enter your email address and password. After logging in, you will be redirected to http://localhost:3000/customer/home, which is the main page for the website. It will show a list of restaurant categories and featured restaurants

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
- http://localhost:3000/customer/setting: Allows you to view the account details, change password and set notifications

Once clicked into a restaurant
- User will be redirected to the restaurant's order page http://localhost:3000/customer/order/mcd which allows user to be redirected to the Mcdonalds order page in this case. User can view the restaurant details and food items which they can add to cart and order.
- Once confirm checkout, the order will be submitted to the database and displayed in order history.

To logout, users can click on the profile beside the shopping cart and logout from there.























## Quick start

- [Download from Github](https://github.com/devias-io/material-kit-react/archive/master.zip)
  or [Download from Devias](https://devias.io/products/material-kit-react) or clone the
  repo: `git clone https://github.com/devias-io/material-kit-react.git`

- Make sure your Node.js and npm versions are up to date for `React 18`

## Updates (as of 23 Feb)

- Install dependencies: `npm install` or `yarn`

- Install react-bootstrap: `npm install react-bootstrap bootstrap`

- Start the server: 
`cd client `
`npm run dev` or `yarn dev`

- Views are on: `localhost:3000`

## FYI (Frontend)

We are using react-bootstrap and mui:
https://mui.com/material-ui/getting-started/usage/
https://react-bootstrap.github.io/components/alerts/

# Customer updates
Where to find customer pages:
- client > public > src > pages > customer

Components:
- client > public > src > components > customer_view

client > src > theme > index.js
-> change the mui theme css for frontend

To access customer view:
http://localhost:3000/customer/page_name

1. There is a navigation folder for top bar navigation
    a. FYI: Login and Main page top bar navigation will look different

## FRONTEND NEED HELP FROM BACKEND
Parts need help will be commented ( //NEED HELP: )
### Customer View
1. Reset password
client > src > pages > customer > reset_pwd.js
- need help to authenticate email to reset password
- update new password

## Databases
The project contains the following databases:
### FireStore
| Collection | Description |
| --- | --- |
| customers | Buyers |
| Business | Sellers |
| Listings | Items to be sold |
| profitDaily | Daily profits |
| orders | Order summary |
