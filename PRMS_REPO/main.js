// 일급객체의 4가지 특징d

// 1) 자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다.
function foo(arg) {
    arg();
}

function bar() {
    console.log('bar');
}
 
foo(bar); // bar

// 2) 함수는 함수의 반환값이 될 수 있다.
// function foo2(arg) {
//     return arg();
// }

// function bar2() {
//     console.log('bar');
// }
 
// foo2(bar2); // 오류남;;

// 3) 자바스크립트 함수는 할당명령문의 대상이 될 수 있다.
// 4) 자바스크립트 함수는 동일 비교의 대상이 될 수 있다.
const foo3 = function (arg) {
    return arg;
};

foo3(1); // 1


// 매개변수
// 1) 기본값 매개변수 default function parameter
function foo4(arg=1) {
    console.log(arg); // 기본값으로 출력
}

foo4(); // 1, 1을 넣지 않으면 기본값인 undefined로 출력

// 2) 나머지 매개변수 Rest parameter
function foo5(arg, ...rest) {
    console.log(rest);
}

foo5(); // []

function foo6(arg, ...rest) { 
// 첫번째 값 'arg'는 argument(함수 내부의 인자)로 할당이 되어서 배열에 들어가지 않음
    console.log(rest);
}

foo6(1, 2, 3, 4); // [2, 3, 4]

// 3) arguments 객체
function foo7(arg) { 
        console.log(arguments);
    }
    
foo7(1, 2, 3, 4); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }


// 함수 선언 방법
// 1) 함수 선언문
function foo8() {
    console.log('foo')
}

foo8(); // foo

// 2) 함수 표현식
const foo9 = function () {
    console.log('foo9')
}

foo9(); // foo9

// 3) Function 생성자 함수
const foo10 = new Function("console.log('foo10')");

foo10(); // foo10

// 4) 화살표 함수 표현식
const foo11 = () => {
    console.log('foo11')
}

foo11(); // foo11



// 함수의 여러가지 형태
// 1) IIFE (즉시 실행 함수)
(function foo12() {
    console.log('foo12');
})() // foo12

// 2) 재귀함수
function foo13(arg) {
    if(arg === 5) return; // 탈출 조건이 없으면 무한히 돌게 됨.
    console.log(arg);
    foo13(arg + 1);
}

foo13(1);
// 1
// 2
// 3
// 4

// 3) 중첩함수
function foo14(arg) {
    function bar() {
        console.log(arg);
    }
    bar();
}

foo14(1); // 1

// 4) 콜백함수
function foo15(arg) {
    arg();
}

foo15(() => {
    console.log(1);
}); // 1