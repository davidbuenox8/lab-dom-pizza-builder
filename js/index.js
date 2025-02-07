// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(mush => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  });
}




function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach(greenPep => {
    if (state.greenPeppers) {
      greenPep.style.visibility = 'visible';
    } else {
      greenPep.style.visibility = 'hidden';
    }
  });
}




function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  document.querySelectorAll('.sauce').forEach(sauce => {
    if (!state.whiteSauce) {
      sauce.classList.remove('sauce-white')
    } else {
      sauce.classList.add('sauce-white')
    }
  })

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(crust => {
    if (!state.glutenFreeCrust) {
      crust.classList.remove('crust-gluten-free')
    } else {
      crust.classList.add('crust-gluten-free')
    }

  })

}



function renderButtons(str) {
  // Iteration 3: add / remove the class "active" of each`<button class="btn">`
  if (state.pepperoni === true) {
    document.querySelector('.btn-pepperoni').classList.add('active')
  } else {
    document.querySelector('.btn-pepperoni').classList.remove('active')
  }
  if (state.mushrooms === true) {
    document.querySelector('.btn-mushrooms').classList.add('active')
  } else {
    document.querySelector('.btn-mushrooms').classList.remove('active')
  }
  if (state.greenPeppers === true) {
    document.querySelector('.btn-green-peppers').classList.add('active')
  } else {
    document.querySelector('.btn-green-peppers').classList.remove('active')
  }
  if (state.whiteSauce === true) {
    document.querySelector('.btn-sauce').classList.add('active')
  } else {
    document.querySelector('.btn-sauce').classList.remove('active')
  }
  if (state.glutenFreeCrust === true) {
    document.querySelector('.btn-crust').classList.add('active')
  } else {
    document.querySelector('.btn-crust').classList.remove('active')
  }
}




function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let list = '';
  let price = 10;
  for (let ingredient in state) {
    if (state[ingredient]) {
      list += `<li>$ ${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`
      price += ingredients[ingredient].price;
    }
  }
  document.querySelector('.panel.price ul').innerHTML = list;
  document.querySelector('.panel.price strong').innerText = `$${price}`;

}






renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();


});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();

});


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})