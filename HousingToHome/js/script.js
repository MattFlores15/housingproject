/*
=====================================================================================================================
                          Ajax Onload Function (By clicking the explore eindhoven button)
=====================================================================================================================
*/

$(document).ready(function(){
  $("#explore-button").click(function(){
    $("#explore").load("sorry.txt");
  });
});


/*
=====================================================================================================================
                          Code for image slideshow
=====================================================================================================================
*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

/*
=====================================================================================================================
													Code for Form validation
=====================================================================================================================
*/
const FirstName = document.getElementById('FirstName');
const LastName = document.getElementById('LastName');
const Email = document.getElementById('Email');
const Message = document.getElementById('Message');

const form = document.getElementById('form');
const errorElement = document.getElementById('error');

//To prevent refreshing the page when hitting submit.
form.addEventListener('submit', (e) => {
  //but only with an error message
  let messages = []
  if (FirstName.value === '' || FirstName.value == null) {
    messages.push('First Name is required');
  }
  if (LastName.value === '' || LastName.value == null) {
    messages.push('Last Name is required');
  }
  if (Email.value === '' || Email.value == null) {
    messages.push('Email is required');
  }
  if (Message.value === '' || Message.value == null) {
    messages.push('A message is required');
  }
  //if we do get a error message
  if (messages.length > 0) {
    e.preventDefault();
    //When more error's occur it will devide them with a comma.
    errorElement.innerText = messages.join(', ')
    document.getElementById("error").style.visibility = "visible";
  }
})
/*
=====================================================================================================================
													Code for Filter
=====================================================================================================================
*/
function getCitySelectValue()
{
   var selectedValue = document.getElementById("City").value;
   //Checks to filter for cities.
   if (selectedValue == "Eindhoven") 
   {
    document.getElementById("Eindhoven").style.display = "block";
    document.getElementById("Amsterdam").style.display = "none";
    document.getElementById("Rotterdam").style.display = "none";
    document.getElementById("Den_Haag").style.display = "none";
   }

   if (selectedValue == "Amsterdam") 
   {
    document.getElementById("Eindhoven").style.display = "none";
    document.getElementById("Amsterdam").style.display = "block";
    document.getElementById("Rotterdam").style.display = "none";
    document.getElementById("Den_Haag").style.display = "none";
   }

   if (selectedValue == "Rotterdam") 
   {
    document.getElementById("Eindhoven").style.display = "none";
    document.getElementById("Amsterdam").style.display = "none";
    document.getElementById("Rotterdam").style.display = "block";
    document.getElementById("Den_Haag").style.display = "none";
   }

   if (selectedValue == "Den_Haag") 
   {
    document.getElementById("Eindhoven").style.display = "none";
    document.getElementById("Amsterdam").style.display = "none";
    document.getElementById("Rotterdam").style.display = "none";
    document.getElementById("Den_Haag").style.display = "block";
   }
}
getCitySelectValue();
//function to search trough the room possibilities
function getRoomSelectValue() {
  var RoomSelectValue = document.getElementById("Rooms").value;
   if (RoomSelectValue == "Studio") 
   {
    document.getElementById("Eindhoven").style.display = "none";
    document.getElementById("Amsterdam").style.display = "block";
    document.getElementById("Rotterdam").style.display = "block";
    document.getElementById("Den_Haag").style.display = "none";
   }
   if (RoomSelectValue == "Private") 
   {
    document.getElementById("Eindhoven").style.display = "block";
    document.getElementById("Amsterdam").style.display = "none";
    document.getElementById("Rotterdam").style.display = "none";
    document.getElementById("Den_Haag").style.display = "block";
   }
}
getRoomSelectValue()

function getCurrencySelectValue() {
  var CurrencySelectValue = document.getElementById("Currency").value;

   if (CurrencySelectValue == "Euro") 
   {
    document.getElementById("PriceEin").textContent  = "Price: €415, ";
    document.getElementById("PriceAms").textContent  = "Price: €645, ";
    document.getElementById("PriceRot").textContent  = "Price: €450, ";
    document.getElementById("PriceDen").textContent  = "Price: €525, ";
   }
   if (CurrencySelectValue == "Dollar") 
   {
    document.getElementById("PriceEin").textContent  = "Price: $502,95, ";
    document.getElementById("PriceAms").textContent  = "Price: $781,70, ";
    document.getElementById("PriceRot").textContent  = "Price: $545,37, ";
    document.getElementById("PriceDen").textContent  = "Price: $636,27, ";
   }
   if (CurrencySelectValue == "Pound") 
   {
    document.getElementById("PriceEin").textContent  = "Price: £356,41, ";
    document.getElementById("PriceAms").textContent  = "Price: £553,93, ";
    document.getElementById("PriceRot").textContent  = "Price: £386,47, ";
    document.getElementById("PriceDen").textContent  = "Price: £450,88, ";
   }
   if (CurrencySelectValue == "Canadian_Dollar") 
   {
    document.getElementById("PriceEin").textContent  = "Price: $612,70, ";
    document.getElementById("PriceAms").textContent  = "Price: $952,26, ";
    document.getElementById("PriceRot").textContent  = "Price: $664,37, ";
    document.getElementById("PriceDen").textContent  = "Price: $775,10, ";
   }
}
getCurrencySelectValue()
//since you need to have everything covered this will be a long text of code.
function getPriceSelectValue() {
  var PriceSelectValue = document.getElementById("Price").value;
  var CurrencySelectValue = document.getElementById("Currency").value;
  //when the price value is less then 400 (in any currency)
  if (PriceSelectValue == "lessThen" && CurrencySelectValue == "Euro")
  {
  document.getElementById("Eindhoven").style.display = "none";
    document.getElementById("Amsterdam").style.display = "none";
    document.getElementById("Rotterdam").style.display = "none";
    document.getElementById("Den_Haag").style.display = "none";
  }
  if (PriceSelectValue == "lessThen" && CurrencySelectValue == "Dollar")
  {
  document.getElementById("Eindhoven").style.display = "none";
    document.getElementById("Amsterdam").style.display = "none";
    document.getElementById("Rotterdam").style.display = "none";
    document.getElementById("Den_Haag").style.display = "none";
  }
  if (PriceSelectValue == "lessThen" && CurrencySelectValue == "Pound") 
  {
  document.getElementById("Eindhoven").style.display = "block";
    document.getElementById("Amsterdam").style.display = "none";
    document.getElementById("Rotterdam").style.display = "block";
    document.getElementById("Den_Haag").style.display = "none";
  }
  if (PriceSelectValue == "lessThen" && CurrencySelectValue == "Canadian_Dollar")
  {
  document.getElementById("Eindhoven").style.display = "none";
    document.getElementById("Amsterdam").style.display = "none";
    document.getElementById("Rotterdam").style.display = "none";
    document.getElementById("Den_Haag").style.display = "none";
  }
  //Checks if the price is in between 400 and 500 (any currency)
  if (PriceSelectValue == "Between" && CurrencySelectValue == "Euro")
  {
  document.getElementById("Eindhoven").style.display = "block";
    document.getElementById("Amsterdam").style.display = "none";
    document.getElementById("Rotterdam").style.display = "block";
    document.getElementById("Den_Haag").style.display = "none";
  }
  if (PriceSelectValue == "Between" && CurrencySelectValue == "Dollar")
  {
  document.getElementById("Eindhoven").style.display = "none";
    document.getElementById("Amsterdam").style.display = "none";
    document.getElementById("Rotterdam").style.display = "none";
    document.getElementById("Den_Haag").style.display = "none";
  }
  if (PriceSelectValue == "Between" && CurrencySelectValue == "Pound")
  {
  document.getElementById("Eindhoven").style.display = "none";
    document.getElementById("Amsterdam").style.display = "none";
    document.getElementById("Rotterdam").style.display = "none";
    document.getElementById("Den_Haag").style.display = "block";
  }
  if (PriceSelectValue == "Between" && CurrencySelectValue == "Canadian_Dollar")
  {
  document.getElementById("Eindhoven").style.display = "none";
    document.getElementById("Amsterdam").style.display = "none";
    document.getElementById("Rotterdam").style.display = "none";
    document.getElementById("Den_Haag").style.display = "none";
  }
  //checks if it is above 500 (in any currency)
  if (PriceSelectValue == "MoreThen" && CurrencySelectValue == "Euro")
  {
  document.getElementById("Eindhoven").style.display = "none";
    document.getElementById("Amsterdam").style.display = "block";
    document.getElementById("Rotterdam").style.display = "none";
    document.getElementById("Den_Haag").style.display = "block";
  }
  if (PriceSelectValue == "MoreThen" && CurrencySelectValue == "Dollar")
  {
  document.getElementById("Eindhoven").style.display = "block";
    document.getElementById("Amsterdam").style.display = "block";
    document.getElementById("Rotterdam").style.display = "block";
    document.getElementById("Den_Haag").style.display = "block";
  }
  if (PriceSelectValue == "MoreThen" && CurrencySelectValue == "Pound")
  {
  document.getElementById("Eindhoven").style.display = "none";
    document.getElementById("Amsterdam").style.display = "block";
    document.getElementById("Rotterdam").style.display = "none";
    document.getElementById("Den_Haag").style.display = "none";
  }
  if (PriceSelectValue == "MoreThen" && CurrencySelectValue == "Canadian_Dollar")
  {
  document.getElementById("Eindhoven").style.display = "block";
    document.getElementById("Amsterdam").style.display = "block";
    document.getElementById("Rotterdam").style.display = "block";
    document.getElementById("Den_Haag").style.display = "block";
  }
}
getPriceSelectValue()