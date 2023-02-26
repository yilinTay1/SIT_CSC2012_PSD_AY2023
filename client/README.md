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
