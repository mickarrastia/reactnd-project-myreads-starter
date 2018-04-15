# MyReads Project

This is Michael Arrastia's submission for the final assessment project for Udacity's React Fundamentals course.

## How to install

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Application Description

Application state is held in App.js. This includes:
 - a list of books, the reading activity. This is populated on load using the BooksAPI provided by Udacity.
 - a fixed list of shelves to group books according to their lifecycle in the reading activity (current, want, read).

App.js is singularly responsible for handling updates to the state. The function that performs the update is passed 
down as a property to child components. This function not only updates the local state but also updates the backend so
that state is preserved upon application refreshes.

The application is comprised by two pages:

- Main Page: Shows the list of managed books arranged in shelves
- Search Page: Allows the user to search and add further books to the managed reading activity

### Main page

Includes the following React components:

- ListBooks: The entry point to the MyReads application. Lists all managed books grouped in shelves. There are three
types of shelf: Currently Reading, Want to Read, Read.

- BookShelf: A book shelf. Each shelf has a type (currentlyReading, wantToRead, Read) and filters the list of managed
books to only display those books that match the shelf type.

- Book: A book displaying basic details such as cover, title, authors.

- ShelfChanger: An interactive component that allows the user to change the shelf assigned to a book. For example, when
the user finishes reading a book in the "Currently Reading" shelf the user can use this component to send the book to
the "Read" shelf. This component submits the request to the App component to perform the book state update.

The component in the application have the following parent-child structure:

App -> ListBooks -> BookShelf -> Book -> ShelfChanger

## File structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # UPDATED COMPONENT, see description above.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Book.js # NEW COMPONENT, see description above.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BookShelf.js # NEW COMPONENT, see description above.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── ListBooks.js # NEW COMPONENT, see description above.
    ├── ShelfChanger.js # NEW COMPONENT, see description above
```

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
