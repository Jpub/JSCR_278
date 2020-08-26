const targetString = 'JavaScript를 배우자';

document.querySelector('.result1').innerHTML = targetString.includes('JavaScript');
document.querySelector('.result2').innerHTML = targetString.includes('배우자');
document.querySelector('.result3').innerHTML = targetString.includes('배우자', 12);
document.querySelector('.result4').innerHTML = targetString.includes('HTML');
document.querySelector('.result5').innerHTML = targetString.startsWith('배우자');
document.querySelector('.result6').innerHTML = targetString.endsWith('배우자');
