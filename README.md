# Onboarding with HTML5 Music App
### Introdution to web development
The goal is to build a music player app from scratch while learning the basic concepts of HTML , CSS, JS (Basic JS, ES6, Typescript and Framework).
### Objective for each day
- Conduct Morning session (1-2 hrs) on the objective of the day, technical session and provide resources.
- Candidate will by the end of the day move their code into a different branch in this repository.
- Mentors / Buddies reviews the code and provides input and feedbacks.
### Timeline
- [Day 1 - HTML, CSS](#day-1-html-css)
- [Day 2/3 - Introduction to JS](#day-23-introduction-to-JS)
- [Day 4 - Async programming, Typescript](#day-4-async-programming-typescript)
- [Day 5 - Frameworks](#day-5-frameworks)

## Day 1 (HTML, CSS)
### Concepts
- Basics of HTML, CSS
### Exercises
- Create HTML, CSS for the music play app with the design provided.
- Integrate Font Awesome to include icons.
### Resources
- [HTML & CSS tutorial](https://learn.shayhowe.com/html-css/getting-to-know-html/)
- [Flex](https://www.youtube.com/watch?v=k32voqQhODc)
- [Font Awesome](https://github.com/FortAwesome/Font-Awesome)

## Day 2/3 (Introduction to JS)
### Concepts
- JS fundamentals
  - ES6 vs ES5 - Use ES6 wherever you can
    - Stay away from
        - prototype
        - classes defined as functions
  - console commands
  - variables
  - control flow, operators
  - JSON
  - functions - normal, arrow
  - scopes and closure
  - classes
  - map, reduce, filter, some, find
  - lodash utilities
  - setTimeout, setInterval, clearTimeout, clearInterval
- DOM manipulation
  - Getting dom elements
    - document.getElementById
    - document.getElementByClassName
    - docuement.querySelector
    - document.querySelectorAll
  - Traversing dom
    ```
    myElement.children
    myElement.firstElementChild
    myElement.lastElementChild
    myElement.previousElementSibling
    myElement.nextElementSibling
    ```
  - Get / set DOM attributes, html, text, styles
  - Dom events
- Chrome dev tools - Intro to consoles, sources, inspect elements.
### Exercises
- Implement interactions with dummy data
  - Implement play / pause toggle
  - Implement next song / prev song with changes to cover, and song info
  - Show / hide playlist
  - Shuffle songs
  - Make progress bar ticking
### Resources
- Javascript
  - [Javascript Cheatsheet](https://www.notion.so/Javascript-Cheatsheet-82c719fa8ea446d89a811997e54668dd)
  - [Simplify your javascript using map, reduce and filter](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d)
  - [Understanding Closures](https://medium.com/madhash/understanding-closures-in-javascript-in-3-minutes-557ebb8a215b)
  - [Javascript Scope](https://dmitripavlutin.com/javascript-scope/)
- DOM manipulation
  - [DOM Navigation](https://javascript.info/dom-navigation)
  - [DOM Manipulation](https://www.theodinproject.com/courses/web-development-101/lessons/dom-manipulation)
- Chrome dev tools
  - [Debugging Chrome](https://javascript.info/debugging-chrome)
  - [Console Commands](https://css-tricks.com/a-guide-to-console-commands/)

## Day 4 (Async programming, Typescript)
### Concepts
- Introduction to async programming in JS
  - Event loop?
  - Callbacks
  - Promises
  - Async / await
- Typescript
  - Introduction to typescript - Why? How
  - Basic typescript concepts
  - How to refactor js to ts
### Exercises
- Wire up music player app with the backend (node js server provided)
  - Get playlist info
  - Playlist CRUD
  - Search API
  - Get song info
  - Like song API
  - Play / pause / seek song
- Refactor app to typescript (build setup already provided)
### Resources
TODO

## Day 5 (Frameworks)
### Concepts
- Why use frameworks?
- Introduction to React - Bare minimum
### Exercises
- Refactor app to react
- Use create-react-app to bootstrap
- Have separate UI components (presentation) and container components
### Resources
TODO

# Design
![Design](/public/mock.png?raw=true "Music app for onboarding")
For measurement, please refert to `/public/measurement.png` file found in this repository.

> Happy Codding
