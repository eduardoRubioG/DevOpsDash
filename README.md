# DevOps Dashboard 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Application Structure
### File Tree Breakdown
// Explain the file structure in here 

## Creating new components, or "Tiles"
// Adding the component in the component dir and also where to import them 
// and what general structure they should follow (mentioning the utils and how they work) 

## Adding New Utilities 
### What is a utility in the context of this application? 
### Adding new utilities 
// Adding the js file in the Util folder and also where to import the new functions
// aka, the purpose of the `index.js` file in the util folder
Your utilities, or JavaScript files that internally make any API calls and return consumable data, should all live in the `Utils` directory. However, there is one file in the `Utils` directory, named `index.js`, that will import all of the exported functions from the files in `Utils`. Then, `index.js` exports them as one so that you may, in the `App.js` file, call any of these functions from a single import. 

So, in order to uniformly call a new util: 
 * Create a new JavaScript file, `foo.js`, in the `Utils` folder and export the main function, `fooFunction` 
 * Import `fooFunction` in the `index.js` file 
 * add the newly imported function to the `index.js` exports
 * You may now call this function as `Utils.fooFunction` in `App.js`

## Authentification Handling 
// Adding secrets to the .env file (or whatever)

## "This sucks. I want my own version"
## Dynamic Structure 
// Talk about Bootstrap dynamic compositions and walk over 
// the general App.js structure and how it could be modified 
//Include image of application on mobile 

## Wishlist: Looking Forward

# End of my README

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


