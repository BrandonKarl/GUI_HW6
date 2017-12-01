/* 
  Name: Brandon Karl, brandon_karl@student.uml.edu
  Computer Science Department, UMass Lowell
  Comp.4610, GUI Programming I
  File: /usr/cs/2018/bkarl/public_html/
  Created: 30-nov-2017
  Last updated by BK: 30-Nov-2017, 8:17  
*/

// Sets up the sliders for first jumbotron
function setupInitialSliders() {
  // Setup constraints
  $("#milesDrivenSlider").slider({
    range: "min",
    value: 1,
    step: 1000,
    min: 1000,
    max: 300000,
    slide: function( event, ui) { // 2 way bind
      $("#milesDriven").val(ui.value)
    }
  })
  $("#milesDriven").change(function () { // 2 way bind
    var value = this.value
    $("#milesDrivenSlider").slider("value", value)
  })

  // Setup constraints
  $("#costPGSlider").slider({
    range: "min",
    value: .5,
    step: .10,
    min: .50,
    max: 5.00,
    slide: function( event, ui) { // 2 way bind
      $("#costPG").val(ui.value)
    }
  })
  $("#costPGSlider").change(function () { // 2 way bind
    var value = this.value
    $("#costPGSlider").slider("value", value)
  })
}

// Sets up the sliders for prices jumbotron
function setupPriceSliders() {
  // Setup constraints
  $("#price1Slider").slider({
    range: "min",
    value: 500,
    step: 500,
    min: 500,
    max: 100000,
    slide: function( event, ui) { // 2 way bind
      $("#price1").val(ui.value)
    }
  })
  $("#price1").change(function () { // 2 way bind
    var value = this.value
    $("#price1Slider").slider("value", value)
  })

  // Setup constraints
  $("#price2Slider").slider({
    range: "min",
    value: 500,
    step: 500,
    min: 500,
    max: 100000,
    slide: function( event, ui) { // 2 way bind
      $("#price2").val(ui.value)
    }
  })
  $("#price2").change(function () { // 2 way bind
    var value = this.value
    $("#price2Slider").slider("value", value)
  })

  // Setup constraints
  $("#price3Slider").slider({
    range: "min",
    value: 500,
    step: 500,
    min: 500,
    max: 100000,
    slide: function( event, ui) { // 2 way bind
      $("#price3").val(ui.value)
    }
  })
  $("#price3").change(function () { // 2 way bind
    var value = this.value
    $("#price3Slider").slider("value", value)
  })
}

// Sets up the sliders for mpg jumbotron
function setupMpgSlider() {
  // Setup constraints
  $("#mpgSlider").slider({
    range: "min",
    value: 10,
    step: 5,
    min: 10,
    max: 100,
    slide: function( event, ui) { // 2 way bind
      $("#mpg").val(ui.value)
    }
  })
  $("#mpg").change(function () { // 2 way bind
    var value = this.value
    $("#mpgSlider").slider("value", value)
  })
}