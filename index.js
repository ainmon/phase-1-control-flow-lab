function scuberGreetingForFeet(distance){
  if (distance <= 500){
    return 'This one is on me!';
  }
  else if (distance <= 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else if(distance > 2500){
    return 'No can do.';
  }
} 

function ternaryCheckCity(city){
  const rightCity = (city !== 'NYC') ? 'No go.' : 'Ok, sounds good.';
  return rightCity;
}

function switchOnCharmFromTip(tip){

  switch(tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.';
  }
}