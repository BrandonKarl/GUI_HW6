/* 
  Name: Brandon Karl, brandon_karl@student.uml.edu
  Computer Science Department, UMass Lowell
  Comp.4610, GUI Programming I
  File: /usr/cs/2018/bkarl/public_html/
  Created: 16-nov-2017
  Last updated by BK: 16-Nov-2017, 8:17  
*/

/*
  This function sets up the validation for the first form,
  miles driven and cost per gallon of gas.
*/
function setupInitialValidation() {
  let initialForm;
  initialForm = $("#initialForm").validate({
    // No 0 or negative values
    rules: {
      milesDriven: {
        min: 1
      },
      costPG: {
        min: 1
      }
    },
    // If number is negative, user cant even enter non-numbers
    messages: {
      milesDriven: 'Please enter a positive number',
      costPG: 'Please enter a positive number'
    },
    errorClass: "error"
  })
  // Return the actual form so we can check if valid before submitting
  return initialForm
}

/*
  This function sets up the validation for the second form,
  the 3 possible car prices.
*/
function setupPricesValidation() {
  let pricesForm;
  pricesForm = $("#carPricesForm").validate({
    // No 0 or negative values
    rules: {
      price1: {
        min: 1
      },
      price2: {
        min: 1
      },
      price3: {
        min: 1
      }
    },
    // If number is negative, user cant even enter non-numbers
    messages: {
      price1: 'Please enter a positive number',
      price2: 'Please enter a positive number',
      price3: 'Please enter a positive number',
    },
    errorClass: "error"
  })
  // Return the actual form so we can check if valid before submitting
  return pricesForm
}

/*
  This function sets up the validation for the third form,
  the recurring mpg form.
*/
function setupMpgValidation() {
  let mpgForm;
  mpgForm = $("#mpgForm").validate({
     // No 0 or negative values
    rules: {
      mpg: {
        min: 1
      }
    },
    // If number is negative, user cant even enter non-numbers
    messages: {
      mpg: 'Please enter a positive number'
    },
    errorClass: "error"
  })
  // Return the actual form so we can check if valid before submitting
  return mpgForm
}