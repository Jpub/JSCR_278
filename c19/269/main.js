// MyClass1.js 가져오기
import { MyClass1 } from './MyClass1.js';
// MyClass2.js 가져오기
import { MyClass2 } from './MyClass2.js';

// MyClass1 메소드로 문자열 가져오기
const message1 = new MyClass1().myMethod1();
// MyClass2 메소드로 문자열 가져오기
const message2 = new MyClass2().myMethod2();

// #log 요소에 출력
const log = document.querySelector('#log');
log.innerHTML += `<p>${message1}</p>`;
log.innerHTML += `<p>${message2}</p>`;
