/* 
  Name: Brandon Karl, brandon_karl@student.uml.edu
  Computer Science Department, UMass Lowell
  Comp.4610, GUI Programming I
  File: /usr/cs/2018/bkarl/public_html/
  Created: 16-nov-2017
  Last updated by BK: 30-Nov-2017, 8:17  
*/

// Global data object for data persistance
let data = {
  milesDriven: 0,
  costPG: 0,
  price1: 0,
  price2: 0,
  price3: 0,
  prices: [],
  mpgs: [],
  numtabs: 1
}

// Wait for document tp be ready before you do anything
$(document).ready(function() {

  // When document is ready, make tabs
  $( "#tabs" ).tabs();
  const initialTabs = $("#tabs")
  console.log(initialTabs)

  // Setup validation
  let initialForm = setupInitialValidation()
  // Setup sliders
  setupInitialSliders()
  $("#initialForm").submit(function(event) {
    event.preventDefault()
    // Make sure the form is valid
    if (initialForm.valid()) {
      // Store values
      data.milesDriven = Number($("#milesDriven").val()).toFixed(0)
      data.costPG = Number($("#costPG").val()).toFixed(2)
      $("#milesDriven").val('')
      $("#costPG").val('')
      // Show next form
      $("#initialJumbo").css("display", "none")
      $("#carPricesJumbo").css("display", "initial")
      $("#ui-id-" + data.numtabs).html(data.milesDriven + " miles / $" + data.costPG + " per gallon" + " <span id='close'>x</span>")
    }
  })

  // Setup validation
  let carPricesForm = setupPricesValidation()
  // Setup sliders
  setupPriceSliders()
  $("#carPricesForm").submit(function(event) {
    event.preventDefault()
    // Make sure the form is valid
    if (carPricesForm.valid()) {
      // Store values
      data.price1 = Number($("#price1").val()).toFixed(2)
      data.price2 = Number($("#price2").val()).toFixed(2)
      data.price3 = Number($("#price3").val()).toFixed(2)
      $("#price1").val('')
      $("#price2").val('')
      $("#price3").val('')
      data.prices.push(data.price1, data.price2, data.price3)
      // Show next form
      $("#carPricesJumbo").css("display", "none")
      $("#mpgJumbo").css("display", "initial")
      // Make a table
      let container = $("#tableContainer" + data.numtabs)
      let table = $("<table>")
      // Make a table row
      let tr = $("<tr>")
      // First td is key
      tr.append('<td>' + 'Cost/mpg' + '</td>')
      // Rest of td's are the entered data
      data.prices.forEach(function(price) {
        tr.append('<td>' + '$' + price + '</td>')
      })
      table.attr("id", "dyTable" + data.numtabs)
      table.append(tr)
      // Display the key
      $('.tableKey').css("display", "initial")
      $('#keyMiles' + data.numtabs).text(data.milesDriven)
      $('#keyCost' + data.numtabs).text(data.costPG)
      $('#placeholder').css("display", "none")
      // Add the table to the document
      container.append(table)
    }
  })

  // Callback when new tab is created
  $('.newTab').on('click', function() {
    data.numtabs += 1
    var tabs = $("#tabs").tabs();
    var ul = tabs.find( "ul" );
    // Make tab, with table info
    var newTab = $( "<li><a href='#tabs-" + data.numtabs +"'>New Tab</a></li>" )
    newTab.appendTo( ul );
    // WHen clicking to close a tab
    $(newTab).on('click', "#close", function() {
      // Delete unused tabs
      var tabList = $("li a")
      for (var i = 0; i < tabList.length; i++) {
        if(tabList.eq(i).text() === "New Tab") {
          tabList.eq(i).remove()
          data.numTabs -= 1
        }
      }
      // Remove clicked tab
      newTab.remove()
      data.numTabs -= 1
      // Show new tab jumbo
      $("#initialJumbo").css("display", "none")
      $("#carPricesJumbo").css("display", "none")
      $("#mpgJumbo").css("display", "none")
      $("#newTabJumbo").css("display", "initial")
      tabs.tabs("refresh")
    })

    // Fill information into the tab
    $( "<div id='tabs-" + data.numtabs + "'>" + 
        "<div class='tableKey'>" +
          "<div class='info'></div>" +
          "<span>= Total Cost/Cost per Mile of the Car.</span>" +
          "<p>Calculated assuming you drive <span id='keyMiles" + data.numtabs +"'>X</span> miles over the life of the car at $<span id='keyCost" + data.numtabs + "'>X</span> per gallon.</p>" +       
          "<div id='tableContainer" + data.numtabs + "'></div>" + 
       "</div>" +
      "</div>" ).appendTo( tabs );

    // Reset data
    tabs.tabs( "refresh" );
    data = {
      milesDriven: 0,
      costPG: 0,
      price1: 0,
      price2: 0,
      price3: 0,
      prices: [],
      mpgs: [],
      numtabs: data.numtabs
    }
    $("#initialJumbo").css("display", "initial")
    $("#mpgJumbo").css("display", "none")
    $("#newTabJumbo").css("display", "none")
    $("#tabs").tabs({ active: data.numtabs - 1 })
  })

  // Setup validation
  let mpgForm = setupMpgValidation()
  // Setup sliders
  setupMpgSlider()
  $("#mpgForm").submit(function(event) {
    event.preventDefault()
    // Make sure the form is valid
    if (mpgForm.valid()) {
      let row = []
      // Store value
      let mpg = Number($("#mpg").val()).toFixed(2)
      // Create array of processed values to add to table
      data.prices.forEach(function(price) {
        let total = Number(price) + ((data.milesDriven / mpg) * data.costPG)
        total = Number(total)
        total = total.toFixed(2)
        row.push(total)
      })
      // Reset form
      data.mpgs.push(row)
      $("#mpg").val("")
      // Find table
      let table = $("#dyTable" + data.numtabs)
      let tr = $("<tr>")
      // Add new row using mpg entered as well as processed data
      tr.append('<td>' + mpg + 'mpg' + '</td>')
      tr.append('<td class="total">' + '$' + row[0] + '</td>')
      tr.append('<td class="total">' + '$' + row[1]  + '</td>')
      tr.append('<td class="total">' + '$' + row[2]  + '</td>')
      // Add new row to table
      table.append(tr)
    }
  })
})
