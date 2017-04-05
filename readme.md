# Kitchen Sink App

## Approach:
My approach to this app was to provide a solution the cooking and meal planning.  The inspiration came from when you have limited ingredients and need inspiration for what to cook.  Kitchen Sink allows users to input ingredients they'd like to cook with and return search results of recipes which include those ingredients.

[Front End - Built with React JS](https://github.com/jeremypross/kitchen-sink-frontend)

## ERD:
![ERD](/public/img/erd.png)

## Wireframes:
![wireframe1](/public/img/wireframe-search.png)
![wireframe2](/public/img/wireframe-create.png)
![wireframe3](/public/img/wireframe-login.png)
![wireframe4](/public/img/wireframe-dashboard.png)

## User Stories
* Users should be able to login and logout of the app.
* Users should be able to search for recipes based on the ingredients they have available.
* Users should be able to save recipes to their user dashboard.
* Users should be able to comment on each recipe saved to their dashboard.

## Technologies Used:
* HTML
* CSS
* Javascript
* Node / Express - Back End
* React JS - Front End

## Yummly API
Kitchen Sink was created through the use of the Yummly API, which is one of the most robust food APIs with over 2 million recipes aggregated from various food blogs and recipe websites.  
 - Note: in order to successfully use this application you will need to obtain an API ID and key from Yummly. This app was built on a generous academic plan provided by Yummly.

[Yummly API](https://developer.yummly.com/)

## Server-Side Dependencies:
* Users can NPM install upon downloading the app, which will implement the following dependencies:
  - bcrypt (1.0.2)
  - body-parser (1.17.1)
  - cors (2.8.2)
  - dotenv (4.0.0)
  - ejs (2.5.6)
  - express (4.15.2)
  - express-jwt (5.1.0)
  - jsonwebtoken (7.3.0)
  - method-override (2.3.8)
  - morgan (1.8.1)
  - node-fetch (1.6.3)
  - path (0.12.7)
  - pg-promise (5.6.4)

## Unsolved Issues
  * Changing nav upon
