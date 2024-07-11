
              // function to update the price 
  function increaseTheTotalPrice (){
     TotalPrice = perSeatPrice*selectedSeat
    document.getElementById('total-price').innerText = TotalPrice
    seatPrice.innerText = TotalPrice
    GrandTotal.innerText = TotalPrice
}
// function to revert the price 
function decreaseTheTotalPrice (){
     TotalPrice = TotalPrice-perSeatPrice
    document.getElementById('total-price').innerText = TotalPrice
    seatPrice.innerText = TotalPrice
    GrandTotal.innerText = TotalPrice
}
// function for the new15 coupon code 
function applyDiscount (){
    
    const couponCodeInnerText = couponCode.value

    if(couponCodeInnerText === 'new15' ){
        TotalPrice -= (TotalPrice * 0.15);
        GrandTotal.innerText = TotalPrice
    }
    else if (couponCodeInnerText === 'couple20'){
        TotalPrice -= (TotalPrice * 0.20);
        GrandTotal.innerText = TotalPrice
        
    }

    
}

// get the passenger name 
const passName = document.getElementById('PassengerName')
const passengerName = passName.value

// get the passenger Number 
const passNUmber = document.getElementById('PassengerNumber')
const passengerNumber = passNUmber.value

// get the email id 
const passMail = document.getElementById('PassengerMail')
const passengerMail = passMail.value 



function hide (){
   const firstSection = document.getElementById('sectionOne')
    firstSection.classList.add('hidden')
 
    const secondSection = document.getElementById('sectionTwo')
    secondSection.classList.remove('hidden')

    const passName = document.getElementById('PassengerName')
    const passengerName = passName.value

SetTextElementById('PassengerMemoName',passengerName)

const passengerMemoSeat =  UpdateSeat.innerText

SetTextElementById('memoSeat',passengerMemoSeat)

// get the email id 
const passMail = document.getElementById('PassengerMail')
const passengerMail = passMail.value 

SetTextElementById('PassengerMemoMail',passengerMail)
}
function show(){
    const firstSection = document.getElementById('sectionOne')
    firstSection.classList.remove('hidden')
 
    const secondSection = document.getElementById('sectionTwo')
    secondSection.classList.add('hidden')
 


}

function SetTextElementById (ElementId,value){
    const Element = document.getElementById(ElementId)
    Element.innerText = value
}




