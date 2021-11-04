# Piggy Bank 🐷💰

Welcome to Piggy Bank, a full-stack web application using the MVC paradigm created to help kids manage their money. 

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

- Additional Drink Search Parameters
    - Having a choice for Alcoholic vs. Non-Alcoholic would allow for a wider user audience and more inclusive experience.
- Random Ingredient Suggestion
    - If the user does not have an ingredient in mind, having a randomizer would allow our application to be more flexible.
- Better Food-Favorites Functionality
    - Preventing the user from adding a recipe to the favorites twice.
- Recipe Photos 
    - Adding recipe photos would be more enticing and exciting for the user!
- CSS Layout 
    - Development on fonts, backgroud colors, buttons, etc to better user's visual experience. 

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
