
$(document).ready(function(){
 
//getting chores and textarea index numbers back from storage
var myChores = localStorage.getItem('chores')
 var myInd = localStorage.getItem('ind');
 //splitting the long strings from local storage into arrays of indiv chores and textarea input numbers.
  var splitInd = myInd.split(",")
  var splitChores = myChores.split(",")

//linking chores to corresponding text areas.
var finalNum;
  for (var i = 0; i < splitInd.length; i++) {
  finalNum = (splitInd[i]);
  //changing string indexes to numbers
 num = Number(finalNum);
 var  finalChore = (splitChores[i])
$("textarea").eq(num).text(finalChore);
  console.log(finalChore);
}
  //show date on page
var m = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').html(m);
//putting hour of day in simple 1-24 format
var thishour = moment().format("k");

//changes row color based on hour
$('.spanhour').each(function () {  
    var myhour = $(this).text();
    var myhour2 = Number(myhour)
 //adds 12 to afternoon hours
   if (myhour < 9) {
     myhour2 = myhour2 += 12;
    }
    //adds classes to hour rows based on whether before, after or during current time.
  if (myhour2 < thishour) {
     $(this).closest('.row').addClass('before');
   } else if (myhour2 == thishour) {
    $(this).closest('.row').addClass('now');
   }   else {
    $(this).closest('.row').addClass('after');
    }
    console.log(myhour2, thishour);
 })

 var myindexarray = [];
 var mychoresarray = [];
 // When user enters text, a change event triggered and color changes to red
$('textarea').each(function () {  
$(this).on('change', function() {
    var myChore = $(this).val();
       console.log(myChore);
       $(this).parent().next().addClass('red');
 //creates arrays of saved chores and index numbers of corresponding text areas.
mychoresarray.push(myChore);
var myIndex = $("textarea").index(this);
myindexarray.push(myIndex);
//saves chores and indexes to local storage.
localStorage.setItem('ind', myindexarray);
localStorage.setItem('chores', mychoresarray);
} )
});




$('.saveBtn').each(function () {
    $(this).on('click', function() {
        $(this).removeClass('red');
    
    })
})


//console.log(myLocal);

});
/*
var obj = {key1: "value1", key2: "value2"};
var pair = {key3: "value3"};
obj = {...obj, ...pair};

document.body.innerHTML = JSON.stringify(obj)*/
 //var mysavedtext;
//$('.saveBtn').on('click', (e) => {
 //   var newText = $('input:textarea').val();
 //   console.log(newText);
//})
//console.log(mysavedtext);


//$newItem.on('submit', function(e) {
 //   e.preventDefault();
  //  var newText = $('input:text').val();
   // console.log(newText);
//})



//console.log(mh);
//console.log (moment().isBefore('2020-03-07, 18:00:00', 'hour'));

//if (moment().isBefore('2020-03-07, 18:00:00', 'hour'))



 //console.log(thishour);
//var thishourp = parseInt(thishour);
//console.log(thishourp);


//const isBefore = function () {

    /*
        var myhour = $('.spanhour').text();
        console.log(myhour);
    }*/

 


