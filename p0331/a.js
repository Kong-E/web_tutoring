// callback
/* console.log("-------setTimeout-------");

function a(b, c) {
  setTimeout(() => {
    console.log("setTimeout a");
    b();
    c();
  }, 0);
}

a(
  () => {
    console.log("setTimeout b");
  },
  () => {
    console.log("setTimeout c");
  }
);
console.log("b");
console.log("c"); */

// promise

// async await
console.log("-----async await-----");

async function a(b, c) {
  await console.log("async a");
  b();
  c();
}

a(
  (b = () => {
    console.log("async b");
  }),
  (c = () => {
    console.log("async c");
  })
);

console.log("b");
console.log("c");

/* 
// 일반 함수
function a() {
  console.log(this); // 부모요소
  return "1";
}

// 화살표 함수 - 의존성 관리를 위해서
const a = () => {
  console.log(this); // 윈도우
  return "1";
};

// 익명 함수
(function () {
  return "1";
})(); 
*/

// 오류 설명
/* function a(b) {
  b();
  return "1";
}
function b() {
  return "1";
}
// 오류발생
// a(b());
// 정상
console.log(a(b));
console.log(a(() => b())); // arrow 익명 함수 */
