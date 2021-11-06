# Piggy Bank 🐷💰

Welcome to Piggy Bank, a full-stack web application using the MVC paradigm created to teach kids financial responsibility and save them from a lifetime of frustration! Piggy Bank simple and easy-to-use, a place where kids can virtually track their money and visualize actual spending by category. It helps a kid with the understanding of basic financial lessons such as cash inflow, expenses (outflow) and the running balance.

## Table of Contents 

- Project Requirements.
- Technologies Used.
- Useage.
- Devolpers.

## Project Requirements 

- [x] Use Node.js and Express.js to create a RESTful API.
- [x] Use Handlebars.js as the template engine.
- [x] Use MySQL and the Sequelize ORM for the database.
- [x] Have both GET and POST routes for retrieving and adding new data.
- [x] Use at least one new library, package, or technology that we haven’t discussed.
- [x] Have a folder structure that meets the MVC paradigm.
- [x] Include authentication (express-session and cookies).
- [x] Protect API keys and sensitive information with environment variables.
- [x] Be deployed using Heroku (with data).
- [x] Have a polished UI.
- [x] Be responsive.
- [x] Be interactive (i.e., accept and respond to user input).
- [x] Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
- [x] Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Technologies Used:

- Node.js
- Express.js
- Handlebars.js 
- MySQL
- Sequelize ORM
- HTML
- CSS
- Chart.js

## Setup

1. Run `npm i`.
2. You will need an existing MySQL database.
3. Create `.env` file with MySQL credentials for local development and a SECRET. Refer to [.env.EXAMPLE](./.env.EXAMPLE)
4. Run `npm start` to start the app.


## Sessions

[express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) are used for session management. Configure cookies and sessions in [config/session.js](./config/session.js)

## Authentication

Passwords are hashed using [bcrypt](https://www.npmjs.com/package/bcrypt). Middleware for protected routes redirects to `/login`. This can be modified by updating [util/withAuth.js](./util/withAuth.js).

## Templates

[Handlebars.js](https://handlebarsjs.com/) and [express-handlebars](https://www.npmjs.com/package/express-handlebars) are used for rendering templates.

You can add your own custom helper functions by exporting them from [util/helpers.js](./util/helpers.js).

## Code Style

[ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) are included for enforcing consistent code quality and format. The default configuration includes the ESLint recommended plugin, the Prettier plugin, plus a couple of additional rules. Modify [.eslintrc.js](./.eslintrc.json) to customize the rules.

## Potential features for future development 

- Ability to set weekly spending limits
    - Kids can create weekly spending limits. If a user exceeds their set amount, the app will alert the user. 
-  AutoSave
    - If the user adds funds, the app can automatically save a percentage of those funds. The user can set the percentage value. The saved amount will not display as a part of the total amount in the account. Instead, it will be displayed as a separate value.
- Ability to create savings goals 
    - The user can create savings goals. Each savings goal should have its own name and description. The user can assign any available amount from the savings fund to a savings goal. The user can continue to save without assigning funds from the savings to a goal. 
- Categorize and choose expenses
    - Kids can categorize their future expenses and be able to visualize with a chart where their future expenses will go. If a kid would like to spend a larger or a smaller percentage of their total expenses in one category of expenses, the app will be able to calculate how much less or more the kid can spend to achieve that amount. For example, if a child wants to only spend 30% of their total future expenses on toys, the app will give a dollar amount of how much less or more the kid can spend. 

### Developers:

## This application was developed by:

- [https://github.com/vaal96] Valeria Aguilar.
- [https://github.com/Raghadmalallah] Raghad Malallah.
- [https://github.com/bridgettequiambao] Bridgette Quiambao.

## License 

MIT License

Copyright (c) [2021] [Valeria Aguilar, Raghad Malallah, Bridgette Quiambao]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
