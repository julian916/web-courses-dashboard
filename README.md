# Notes or Concerns

- First I will think of the dashboard as a module that will be consumed from a bigger web app. Because of that, I will not be doing the part of the sidebar with routing to different pages.
- Commonly I would have a Figma design (or a design in some similar platform) where I could get the exact colours, fonts and size for the design, so I could keep the pixel perfect technique. In this case, I will try to do something similar without that.
- The filter button at the right of language is quite not defined in what should show inside there, I will define that as a modal prompt displaying current filters allowing to remove them.
- It is missing some information in the course status (for the “All-Active-Completed”). I define that Active refers to courses that have been started but not completed.
- In the getCourses request, I will add the filter logic in an async function to represent what backed would do, with that I will be able to build filter feature
- For text filter I will only look for matches in courses names

------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


