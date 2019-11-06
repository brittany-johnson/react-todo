This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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


Loggin my steps to create a blog post once the app is done: 

npx create-react-app react-todo
cd react-todo 
yarn start 

Downloaded the photoshop file of the design I'm referencing 

Renamed `App-header` to `App-main` in `App.js` and `App.css`
Changed <header> to <main>

Changed the background color of `App-main` to match the design 

Removed unneeded JSX like the logo, <p>, etc. All content between main, unneeded logo import, and delete logo file. 

Look at design and break elements into component files

Create `components` folder in /src. In it create `date.js` `todoItem.js` and `todoList.js`

Create basic component boilerplate in each file to test that they were being imported and redered properly. 

Tried using `new Date()` to create a instance of the JS date object in `TodoList.js`, but was unsucessful at first becuase I was importing a component also named `Date` and rendering it in my `TodoList` componenet.
This is the error I got: `TypeError: d.getMonth is not a function`. This looks like it was looking for the `getMonth` function from the `Date` component import. Time to rename my compoent to `CalendarDate`.

I moved my `new Date` instance to `CalendarDate.js` and then create a `month`, `year`, and `day` variables using the methods on the `Date` object. 

Then I create arrays for `months` and `days` becuase their methods return numbers from 0, which is perfect to retreive the text value from an array. 

To make sure that my dates were correct, I added them to my component with curly braces.

Next, I have to figure out how to update the calendar date when the foward and back buttons are pressed. 

My first thought it to add 1 to months and days until you reach the last item of the array, then start at the back at the first item. The year I can also just add 1. The date is a little tricky since each month has different dates, and sometimes if its a leap year Febuary will be different as well. I could update everything else first and then the date last. The date could check the month and year and depending on the value, it would know whether to contiue or restart at 1. 

I'll go with this idea for now and if I think of something better later, I'll try that. 

First, I added the `onClick` attribute to my buttons and created functions that console.log so I could make sure that they were working.

I then moved my month, year, day, and date variables into my componet and set my initial componenet state with them. I did this because I realized that when these values change, I want the CalendarDate component to rerender, so because of that, these values should be set in the componet's state. When a state value is used in the compoennt and is changed, the componenet rereders. 

Next, I want to test updating the CalendarDate componenet when clicking the button. I used the navigateForwards function to alter the state of the month by using setState and adding 1 to state.month. 

Because my month, year, date, and day values will increase, decrease and restart based on different rules, I think I would like to make seperate functions to handle the update of each properly.

Can not go backwards from current present date

First I'll start with the month:

If this.state.month is 0 -> 
    - navigateBackwards will return 11
    - navigateForwards will += 1 
If this.state.month is 1-10 -> 
    - navigateBackwards will -= 1
    - navigateForwards will += 1
If this.state.month is 11 -> 
    - navigateBackwards will -= 1
    - navigateForwards will return 0

Next I'll define cases for the year, day, and date:

Year ->
navigateForward += 1 
navigateBackwards -= 1

Date -> 
Each month has either 28, 30, or 31 days. During a leap year an extra day is added to Feb. The day must check for the state of the month and the state of the year. Because there is now extra month data, I'm thinking of changing my months array into a months array of objects instead of an array of strings.

I will also create an array for the leap years

The value of Date must not be greater than 31


Jan - 31
Feb - 28 or 29
March - 31
April - 30
May - 31
June - 30
July - 31 
August - 31 
Sep - 30
Oct - 31
Nov - 30 
Dec - 31

If this.state.date is 1
    - navigateForward will += 1 
    - navigateBackwards will return 
        - 31 if Jan, March, May, July, August, Oct, Dec 
        - 30 if April, June, Sep, Nov 
        - 29 if Feb && this.state.year is equal to leapYears[ i ]
        - 28 if Feb 
If this.state.date is 2-27 
    - navigateForward will += 1 
    - navigateBackwards will -= 1
If this.state.date is 28 && this.state.month is Feb
    - navigateForward will check if its a leap year
        - leap year: += 1
        - not leap year: return 1 
    - navigateBackwards -= 1
If this.state.date is 29 && this.state.month is Feb
     - navigateForward return 1 
     - navigateBackwards -= 1
If this.state.date is 30 && month is April, June, Sep, Nove
    - navigateForward return 1 
    - navigateBackwards -= 1
If this.state.date is 31 
    - navigateForward return 1 
    - navigateBackwards -= 1

Now I'm translating all of the logic above into JS. I'm finding that my logic is very long winded, and messy. I don't like how long the checkDate function has become. 

I've also run into a little road block that is making me think that I should rewrite this function and break it into smaller functions. Maybe one checking the month, and that is what is evaluated onClick and inside the checking the month function, call a function that handles the naviagation based on the date. 

Possible order of checks: 

- Going forward or backwards?
    - This is checked when a button is clicked. I currently have two functions for each direction and they are being called on the appropriate button. 
- What month is it? 
    - I think i should be checking for this next because I can group the logic in a cleaner way. All of the months fall into 4 catgories based on the number of days they have. 
- What date is it? 


For the checkDate function I can pass in the number of days the month has. 

*NEED TO UPDATE NOTES*

Todo data will be stored in an object called `todoItems`. This object will contain dates as properties and the values of those dates will be an array of objects containing the todo item as the property and the state of the todo item (true or false)




