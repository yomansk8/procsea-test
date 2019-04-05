# Tricount like mobile

> The goal of this app is to reproduce a "tricount like" page where we can add expenses associated to users and amount, see the total, and filter them.
> The app should be usable on the iPhone 6/7/8 device target.
> The app should use React & Redux

## Run the project

To run this project, clone it locally, install the dependencies (`yarn` or `npm i`), then start it with `yarn start` or `npm run start`.
Once built, the app will be accessible on the `3000` port. (Normally it will automatically open your browser on the right address :wink:).

## What has been done

I've used [CRA](https://github.com/facebook/create-react-app) as a start point to quickstart this project. Added react-redux for the app state management, and styled-components for the styling part.

I've implemented :

- The listing of the expenses
- The add of an expense
- The filtering of the expenses by user
- The display of the total amount
- The save/restore of the app state from localStorage

## What left to do

I can add the ability of adding a new user (They're actually already in the state, I've just not implemented the user addition action and UI).
We can easily imagine implementing a `removeExpense`, or an `updateExpense`, etc..

Also, we can make the design way more beautiful/polish. I've focused on the ability to display the app correctly on small device target more than on the UI aspect here.

## Time spent

I've took an evening to do this (around three/three and half hours).
