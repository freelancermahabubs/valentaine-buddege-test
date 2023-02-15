function getInputFieldValueById(inputFieldId){
const inputFieldValue = document.getElementById(inputFieldId);
const inputFieldValueString = inputFieldValue.value;
const inputFieldValues = parseInt(inputFieldValueString);
inputFieldValue.value = "";
return inputFieldValues;
};

function setTextElementValueById(elementId, newValue){
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;

};
 
function total(){
  const chocolate = document.getElementById("chocolate").innerText;
  const rose = document.getElementById("rose").innerText;
  const diary = document.getElementById("diary").innerText;
  const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
  setTextElementValueById("total", totalSum);
};

document.getElementById("kitkat-buy-btn").addEventListener("click", function(){
 const kitkatQuantity = getInputFieldValueById("kitkat-quantity");
 const totalKitkat = kitkatQuantity * 200;
 setTextElementValueById("chocolate", totalKitkat);
 total();
});
document.getElementById("rose-buy-btn").addEventListener("click", function(){
 const roseQuantity = getInputFieldValueById("rose-quantity");
 const totalRose = roseQuantity * 100;
 setTextElementValueById("rose", totalRose);
 total();
});

document.getElementById("diary-buy-btn").addEventListener("click", function(){
 const diaryQuantity = getInputFieldValueById("diary-quantity");
 const totalDiary = diaryQuantity * 100;
 setTextElementValueById("diary", totalDiary);
 total();
});




document.getElementById("promoapply-btn").addEventListener("click", function(){
  const promoCode = getInputFieldValueById("promo-code");
  if(promoCode == 101){
    const total = document.getElementById("total").innerText;
    const sum = total - parseInt(total) * 0.1;
    setTextElementValueById("all-total", sum);
  }

  else{
    alert("Wrong Promo code try again with valid code");
  };
  const allTotalCost = document. getElementById("all-total").innerText;
  const previousMyBudget = document. getElementById("mybudget").innerText;
  const remaingMyBalance = previousMyBudget - allTotalCost;
  setTextElementValueById("mybudget", remaingMyBalance);
 
});


