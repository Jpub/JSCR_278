const targetString = 'JavaScript를 배우자';

document.querySelector('.result1').innerHTML = targetString.indexOf('JavaScript');
document.querySelector('.result2').innerHTML = targetString.indexOf('배우자');
document.querySelector('.result3').innerHTML = targetString.indexOf('JavaScript', 5);
document.querySelector('.result4').innerHTML = targetString.indexOf('HTML');
document.querySelector('.result5').innerHTML = targetString.indexOf('a');
document.querySelector('.result6').innerHTML = targetString.lastIndexOf('a');
