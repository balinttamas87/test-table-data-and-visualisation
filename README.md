## To start the project

Clone this repo, `cd` into it and
run 
### `yarn`
from the terminal to install dependencies listed in package.json.

Once all packages are installed you can run 
### `yarn start`

The app will run on the following url: [http://localhost:3000](http://localhost:3000).

To run the tests run
### `yarn test --verbose`
(you might need to hit the letter "a" to run all tests when prompted)

## The following has been built / done for this technical test:
In the following video you can watch the app in action and all its features

https://drive.google.com/file/d/1B0-SD_y1rWydML0aJ6pGiFi3Mh3nC8_D/view?usp=sharing 

- Display supplied JSON data in a table
- Client-side pagination with "next" and "previous" buttons and "per page" (up to 100) input. If there is no previous or next page the buttons are disabled respectively
- Sorting by date of birth, industry and salary when appropriate table header cell is clicked. The sorting direction changes with every click.

- Display data as a set of charts (bar chart to show relationship between salary and experience, bar and pie charts for salary and years of experience comparison)
- Update all charts when sorting or navigating within the table
- Some tests for reducers and pagination component (Jest + react-testing-library)

## Things that I have experimented with for the first time
- redux-toolkit
- organising code into features folder instead of components and containers folders.
- chart.js via react-chartjs-2 library


## Some things that could be improved
- When sorting a new column by clicking on the table header cell we should always start sorting by the same direction (ascending or descending)
- Add ability to clear sorting and filtering
- When sorting empty values should be at the end of the list instead of in the beginning
- Add "up" and "down" arrows to table column header cells to indicate sorting direction
- Split ProfessionalTable component into a container to handle logic and smaller components to render UI
- Move Chart out to be a separate feature from ProfessionalTable
- Could find a better way to compose Chart components 
- Responsive mobile first UI
- Table columns to be fixed-width so they don’t jump
- Indicate loading of the data / table via skeleton UI
- Create my own React components / wrappers for chart.js instead of using a library which does it for me.
- More thorough testing
- Remove legends or position them in a different way to make sure they don’t squash the pie chart when there is too much data or too many legends

---
The project has been bootstrapped with create-react-app. Please see below their readme file
---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
