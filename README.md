# Scrimba - Invoice Creator solution

This is a solution to the [Invoice Creator solo project on Scrimba](https://scrimba.com/learn/learnjavascript/). Scrimba helps you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Choose which tasks they want to receive
- Get charged just once for same service
- Always see updated services' list with single cost
- Remove tasks one by one
- Get automated total amount cost
- Reset the whole demand clicking on "Send invoice" button
- See hover states for interactive elements

### Screenshot

![screenshot](./screenshots/screenshot.png)

### Links

- Solution URL: [@GitHub](https://github.com/xdelmo/invoice-creator)
- Live Site URL: [@GitHub](https://htmlpreview.github.io/?https://github.com/xdelmo/invoice-creator/blob/master/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid Layout
- Vanilla Javascript

### What I learned

The newest thing I learnt is:

- How to get and manipulate a substring

```js
// Create a function getCost() which returns service's cost
function getCost(services) {
  // The substring method will return the part of the string after the specified character ("$")
  // However, we don't want to include the character in the returned string, so we increment its index by 1.
  // Then use parseInt("", 10) to convert a string into an integer of the specified radix: in this case 10
  return parseInt(services.substring(services.indexOf("$") + 1), 10);
}
```

- How to dynamically remove items from array

```js
// Add onclick="removeService(${i})" to be able to call removeService() function with corrisponding array item's index to delete
listItems += ` <div class="service__chosen">
      <div class="service__package">
          <h3 class="service__title">${services[i]}</h3>
          <p class="btn-remove" onclick="removeService(${i})">Remove</p>
      </div>
      <h3 class="service__cost"><span class="currency">$</span>${cost}</h3>
  </div>`;
```

```js
// Create a function removeService() which deletes from myService, tasks with corrisponding index
function removeService(index) {
  // slice(start, end(NOT INCLUDED)) creates an array with the indexes it receives. We modify myServices array, from the start to the index we want to remove, and concatenate same array from the first position following the one we removed to the end of the array
  myServices = myServices
    .slice(0, index)
    .concat(myServices.slice(index + 1, myServices.length));
  render(myServices);
}
```

### Continued development

I'd like to:

- Use localStorage's browser to save tasks
- ~~Add the ability to remove tasks one by one~~

### Useful resources

- [StackOverlow](https://stackoverflow.com/questions/62762993/how-to-push-innerhtml-of-the-clicked-button-into-an-array-using-addevenlistener) - How to push innerHTML of the clicked button into an array
- [W3Schools](https://www.w3schools.com/jsref/jsref_includes_array.asp) - How to use includes() method
- [GoMakeThings](https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/) - Converting strings to numbers with vanilla JavaScript
- [BoddyHadz](https://bobbyhadz.com/blog/javascript-get-substring-after-specific-character) - Get the Substring after a specific Character in JavaScript
- [Flavio Copes](https://flaviocopes.com/how-to-remove-item-from-array/) - How to remove items from array

## Author

- Website - [Emanuele Del Monte](https://www.emanueledelmonte.it)

## Acknowledgments

A big thank you to [Per Harald Borgen](https://github.com/perborgen) who is a pleasure to listen to and to learn new this in funny and interactive way 👏
