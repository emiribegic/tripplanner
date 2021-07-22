# Tripplanner

<img src="https://github.com/emiribegic/fend-capstone-travel-app/blob/main/demo/tripplanner_demo.gif" alt="Tripplanner app" width="700px">
For demo, please visit at https://reiseplaner-app.herokuapp.com/

## Description

Tripplanner is a simple single-page web application that allows users to control their trip plans.
Once a trip is added, it is shown as a card with a destination image and 3-day weather forecast. This trip data is automatically stored in the browser (LocalStorage) so trip cards will be available even after the browser restarts.
<br>
By clicking "DELETE", trips can be deleted.

## Technologies Used

-   JavaScript
-   Node.js / Express.js
-   Day.js
-   nanoid
-   axios
-   Webpack
-   HTML / SCSS
-   Jest
-   supertest
-   Workbox
-   [GeoNames API](http://www.geonames.org/)
-   [Weatherbit.io](https://www.weatherbit.io/)
-   [pixabay](https://pixabay.com/api/docs/#)

## Getting Started

### Prerequisites

Make sure Node and npm are installed from the terminal

```bash
$ node -v
$ npm -v
```

---

### Installation

1. Fork this repo into your own GitHub

2. Clone the repo to your local machine

```bash
# Change to the desired directory
$ cd <desired-directory>

# Clone the repo
$ git clone https://github.com/emiribegic/tripplanner.git

# Change to the project directory
$ cd tripplanner
```

3. Install dependencies

```bash
$ npm install
```

4. **_(Optional)_** Change the port number for DevServer and its proxy setting

```javascript
// In webpack.dev.js
module.exports = {
	devServer: {
		host: 'localhost',
		port: 8000, // Change if needed
		proxy: {
			context: () => true,
			target: 'http://localhost:8081', // Change if needed
			secure: false,
		},
	},
```

**_If you change proxy setting, make sure to change the port in src/server/index.js_**

```javascript
// In index.js
const port = process.env.PORT || 8081; // Change if needed
```

5. Sign up for API keys at:

-   [GeoNames API](http://www.geonames.org/)
-   [Weatherbit.io](https://www.weatherbit.io/)
-   [pixabay](https://pixabay.com/api/docs/#)

6. Configure environment variables using dotenv package
    1. Install the dotenv package
    ```bash
    npm install dotenv
    ```
    2. Create a new `.env` file in the root of your project
    3. Fill the `.env` file with your API keys like this:
    ```bash
    API_KEY=**************************
    username=**************************
    apikey=**************************
    ```
7. Start the project

|    Command     |    Action     |
| :------------: | :-----------: |
| `npm run prod` | Build project |
|  `npm start`   |  Run project  |
| `npm run dev`  | Run DevServer |

8. Run the app in development mode at http://localhost:8000/, in production mode at http://localhost:8081/
   <br>
   **_Port will be varied if you change it at step 4_**

## Error handling

-   Set all the input fields required.
-   If a user selects invalid date (either select the start date past or the end date earlier than the start date), the user will be informed by the error message to verify the date.
-   If no cities / countries are returned for user-entered destionation by the Geolocation API, the user will be informed by error message to verify the destination.
-   If no images are found for user-entered city by pixabay, search images with country name instead.

## Refactoring

This is a rewrite of my final project at [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) Front End Web Developer Nanodegree program.

-   Use MVC architecture pattern for maintainablity and expandability.
-   Store all the data about the app in the state so if:
    -   some data changes in the state, UI reflects it.
    -   something changes in the UI, tthe state reflects it.
-   Use localStorage to store trips in the browser.
-   Create a parent class to reuse methods for the UI.
-   Use dayjs library for date formatting and manipulation.

## Future refactor needed

-   Sort trips with date / destination name.
-   Pop up confirmation when users click "DELETE" button.
-   Handle error when Network Error.
