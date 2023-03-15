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

localhost: 3000 will show users customer/home
-> top nav bar suppose to look like customer/login but not sure how to make it such that by default, user no need login

UI flow
will see customer/home page (top nav will not have account logout)
after customer login (top nav will have account logout and settings shown)

## FRONTEND NEED HELP FROM BACKEND
Parts need help will be commented ( //NEED HELP: )
### Customer View
1. Reset password
client > src > pages > customer > reset_pwd.js
- need help to authenticate email to reset password
- update new password

## New update for customer side as of 11 March 2023
1. Change password
Got the Ui up under customer / change_pwd
Would require backend to modify the handleCloseUserMenu = () function that handles logout the functionality
For this feature, it will only appear after the user has logged in succesfully. It will appear in the same menu popup as Logout

2. Reset password
Decided to leave reset password UI the same as if we were to do it similar to Google, more components/pages need to be created.
However, if the Google UI is easier, do let me know, I will make the necessary changes.

## New update for customer side as of 15 March 2023
Search is ok for order and restaurant pages
Problem:
1. Cart
- add to cart
- remove from cart
- display in order summary
- after checkout send to database (need work with backend)

2. Search bar UI

3. ML rating
- should be decided or done as soon as possible as population of data need to do for many pages

4. Customer account settings (backend)
- display first name, last name, email address
