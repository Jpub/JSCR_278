class MyClass {
  // 「customField」のsetter
  set customField(value) {
    this._customField = value;
  }

  // 「customField」のgetter
  get customField() {
    return this._customField;
  }

  constructor(value) {
    this._customField = value;
  }
}

const myInstance = new MyClass();
// 값 설정(set customField(값){ }부분이 실행됨
myInstance.customField = 20;
// 값 가져오기(get customField(값){ }부분이 실행됨
console.log(myInstance.customField); // 결과: 20
