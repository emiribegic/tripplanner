# FEND Capstone - Travel App

Final project at [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) Front End Web Developer Nanodegree program.

This project aims to build a web app using all of the skills I have learned in Nanodegree program which are listed below [Built-with](#Built-with) section. The app allows users to create trip plans. When a user submit a city name with trip date, the web page then dispalys destination with its photo and 3-day weather forecast returned from external APIs.

## Built-with

-   HTML
-   CSS
-   JavaScript
-   Node
-   Express
-   Webpack
-   [GeoNames API](http://www.geonames.org/)
-   [OpenWeather](https://openweathermap.org/)
-   [pixabay](https://pixabay.com/api/docs/#)
-   Jest
-   supertest
-   Workbox

## Installation

### Prerequisites

Make sure Node and npm are installed from the terminal.

```
node -v
npm -v
```

1. Move to the project folder

```
cd <project directory>
```

2. Clone the repo

```
git clone <repo>
```

3. Install npm

```
npm install
```

4. Install loaders and plugins

```
# Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```

5. Sign up for API keys at:

-   [GeoNames API](http://www.geonames.org/)
-   [OpenWeather](https://openweathermap.org/)
-   [pixabay](https://pixabay.com/api/docs/#)

6. Configure environment variables using dotenv package
    1. Install the dotenv package
    ```
    npm install dotenv
    ```
    2. Create a new `.env` file in the root of your project
    3. Fill the `.env` file with your API keys like this:
    ```
    API_KEY=**************************
    username=**************************
    apikey=**************************
    ```
7. Start the project

|       Command        |    Action     |
| :------------------: | :-----------: |
| `npm run build-prod` | Build project |
|     `npm start`      |  Run project  |

8. Open browser at http://localhost:8081/
