// TODO: 기본 if 문 실습
// 변수 score에 85를 할당한다
// score가 80 이상이면 "합격입니다"를 출력한다
// 변수 score를 출력한다

/* 출력 결과
합격입니다
85
*/

let score = 85;
if (score >= 80) {
	console.log("합격입니다");
}

// TODO: if-else 조건문 실습
// 변수 age에 18을 할당한다
// age가 20 이상이면 "성인입니다", 아니면 "미성년자입니다"를 출력한다
// 변수 age를 출력한다

/* 출력 결과
미성년자입니다
18
*/

let age = 18;
if (age >= 20) {
	console.log("성인입니다");
} else {
	console.log("미성년자입니다");
}

console.log(age);

// TODO: if-else if-else 조건문 실습
// 변수 grade에 75를 할당한다
// grade가 90 이상이면 "A등급", 80 이상이면 "B등급", 70 이상이면 "C등급", 그 외는 "D등급"을 출력한다
// 변수 grade를 출력한다

/* 출력 결과
C등급
75
*/

let grade = 75;
if (grade >= 90) {
	console.log("A등급");
} else if (grade >= 80) {
	console.log("B등급");
} else if (grade >= 70) {
	console.log("C등급");
} else {
	console.log("D등급");
}

console.log(grade);

// TODO: if문 안의 if문 실습
// 변수 userAge는 25, 변수 isStudent는 true로 할당한다
// userAge가 20 이상이면서 isStudent이면 "성인 학생입니다", 아니면 "성인입니다"를 출력한다
// userAge가 20 미만이면 "미성년자입니다"를 출력한다

/* 출력 결과
성인 학생입니다
*/

let userAge = 25;
let isStudent = true;

if (userAge >= 20) {
	if (isStudent) {
		console.log("성인 학생입니다");
	} else {
		console.log("성인입니다");
	}
} else {
	console.log("미성년자입니다");
}

// TODO: 복합 조건문 실습
// 변수 temperature는 28, 변수 humidity는 60으로 할당한다
// temperature가 25 이상이고 humidity가 70 이상이면 "더운 날씨입니다"를 출력한다
// temperature가 25 이상이고 humidity가 70 미만이면 "따뜻한 날씨입니다"를 출력한다
// temperature가 25 미만이면 "시원한 날씨입니다"를 출력한다

/* 출력 결과
따뜻한 날씨입니다
*/

let temperature = 28;
let humidity = 60;

if (temperature >= 25 && humidity >= 70) {
	console.log("더운 날씨입니다");
} else if (temperature >= 25) {
	console.log("따뜻한 날씨입니다");
} else {
	console.log("시원한 날씨입니다");
}

// TODO: AND 연산자 실습
// 변수 username은 "admin", 변수 password는 "1234"로 할당한다
// username이 "admin"이고 password가 "1234"이면 "로그인 성공", 아니면 "로그인 실패"를 출력한다

/* 출력 결과
로그인 성공
*/

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
	console.log("로그인 성공");
} else {
	console.log("로그인 실패");
}

// TODO: OR 연산자 실습
// 변수 userRole에 "editor"를 할당한다
// userRole이 "admin" 또는 "editor"이면 "접근 권한이 있습니다", 아니면 "접근 권한이 없습니다"를 출력한다

/* 출력 결과
접근 권한이 있습니다
*/

let userRole = "editor";
if (userRole === "admin" || userRole === "editor") {
	console.log("접근 권한이 있습니다");
} else {
	console.log("접근 권한이 없습니다");
}

// TODO: NOT 연산자 실습
// 변수 isLoggedIn에 false를 할당한다
// isLoggedIn이 false이면 "로그인이 필요합니다", 아니면 "이미 로그인되어 있습니다"를 출력한다

/* 출력 결과
로그인이 필요합니다
*/

let isLoggedIn = false;
if (!isLoggedIn) {
	console.log("로그인이 필요합니다");
} else {
	console.log("이미 로그인되어 있습니다");
}

// TODO: 조건부 변수 할당 실습
// 변수 purchaseAmount에 150000을 할당한다
// purchaseAmount가 100000 이상이면 10% 할인된 금액을, 아니면 원래 금액을 finalPrice에 할당한다
// "구매 금액: "과 변수 purchaseAmount를 템플릿 리터럴을 활용해서 출력한다
// "최종 금액: "과 변수 finalPrice를 템플릿 리터럴을 활용해서 출력한다

/* 출력 결과
구매 금액: 150000
최종 금액: 135000
*/

let purchaseAmount = 150000;
let finalPrice;
if (purchaseAmount >= 100000) {
	finalPrice = 0.9 * purchaseAmount;
} else {
	finalPrice = purchaseAmount;
}

console.log(`구매 금액: ${purchaseAmount}`);
console.log(`최종 금액: ${finalPrice}`);

// TODO: 다중 조건 확인 실습
// 변수 userAge는 22, 변수 hasLicense는 true, 변수 hasInsurance는 false로 할당한다
// userAge가 21 이상이고 hasLicense와 hasInsurance가 모두 true이면 "완벽한 운전자"를 출력한다
// userAge가 21 이상이고 hasLicense가 true이면 "운전 가능"을 출력한다
// 그렇지 않으면 "운전 불가"를 출력한다

/* 출력 결과
운전 가능
*/

userAge = 22;
let hasLicense = true;
let hasInsurance = false;
if (userAge >= 21 && hasLicense && hasInsurance) {
	console.log("완벽한 운전자");
} else if (userAge >= 21 && hasLicense) {
	console.log("운전 가능");
} else {
	console.log("운전 불가");
}

// TODO: 복잡한 조건문 조합 실습
// 변수 userType은 "premium", 변수 userPoints는 2500, 변수 isActive는 true로 할당한다
// userType이 "premium"이고 userPoints가 2000 이상이면 "VIP 등급"을 출력한다
// userType이 "premium"이고 userPoints가 1000 이상이면 "프리미엄 등급"을 출력한다
// userType이 "regular"이고 userPoints가 1000 이상이면 "일반 등급"을 출력한다
// 그렇지 않으면 "신규 등급"을 출력한다
// isActive가 false이면 "비활성 계정"을 추가로 출력한다

/* 출력 결과
VIP 등급
*/

let userType = "premium";
let userPoints = 2500;
let isActive = true;
if (userPoints >= 2000 && userType === "premium") {
	console.log("VIP 등급");
} else if (userPoints >= 1000 && userType === "premium") {
	console.log("프리미엄 등급");
} else if (userPoints >= 1000 && userType === "regular") {
	console.log("일반 등급");
} else {
	console.log("신규 등급");
}

if (!isActive) {
	console.log("비활성 계정");
}

// TODO: 양수 확인
// 변수 num에 10을 할당한다
// num이 0보다 크면 "양수입니다"를 출력한다

/* 출력 결과
양수입니다
*/

let num = 10;
if (num > 0) {
	console.log("양수입니다");
}

// TODO: 로그인 상태 확인
// 변수 isLoggedIn에 true를 할당한다
// isLoggedIn이 true이면 "환영합니다!", 아니면 "로그인이 필요합니다."를 출력한다

/* 출력 결과
환영합니다!
*/

isLoggedIn = true;
if (isLoggedIn) {
	console.log("환영합니다!");
} else {
	console.log("로그인이 필요합니다");
}

// TODO: 숫자 부호 판별
// 변수 number에 -5를 할당한다
// number가 0보다 크면 "양수", 0보다 작으면 "음수", 0이면 "0"을 출력한다

/* 출력 결과
음수
*/

let number = -5;
if (number > 0) {
	console.log("양수");
} else if (number < 0) {
	console.log("음수");
} else {
	console.log("0");
}

// TODO: 문자열 일치 확인
// 변수 fruit에 "apple"을 할당한다
// fruit이 "apple"이면 "사과입니다"를 출력한다

/* 출력 결과
사과입니다
*/

let fruit = "apple";
if (fruit === "apple") {
	console.log("사과입니다");
}

// TODO: 날씨 확인
// 변수 isRaining에 false를 할당한다
// isRaining이 true가 아니면 "날씨가 맑습니다"를 출력한다

/* 출력 결과
날씨가 맑습니다
*/

let isRaining = false;
if (!isRaining) {
	console.log("날씨가 맑습니다");
}

// TODO: 시험 점수 평가
// 변수 examScore에 92를 할당한다
// examScore가 90 이상이면 "우수합니다"를 출력한다
// 변수 examScore를 출력한다

/* 출력 결과
우수합니다
92
*/

let examScore = 92;
if (examScore >= 90) {
	console.log("우수합니다");
}
console.log(examScore);

// TODO: 회원 등급 판정
// 변수 memberLevel에 "gold"를 할당한다
// memberLevel이 "gold" 또는 "platinum"이면 "VIP 혜택을 받을 수 있습니다", 아니면 "일반 혜택만 가능합니다"를 출력한다

/* 출력 결과
VIP 혜택을 받을 수 있습니다
*/

let memberLevel = "gold";
if (memberLevel === "gold" || memberLevel === "platinum") {
	console.log("VIP 혜택을 받을 수 있습니다");
} else {
	console.log("일반 혜택만 가능합니다");
}

// TODO: 음료 추천 시스템
// 변수 drinkType은 "coffee", 변수 userAge는 16, 변수 isDecaf는 false로 할당한다
// drinkType이 "coffee"이고 userAge가 18 이상이면 "커피 주문 가능"을 출력한다
// drinkType이 "coffee"이고 userAge가 18 미만이고 isDecaf가 true이면 "디카페인 커피 가능"을 출력한다
// drinkType이 "tea"이면 "차 주문 가능"을 출력한다
// 그렇지 않으면 "음료수만 가능"을 출력한다

/* 출력 결과
음료수만 가능
*/

let drinkType = "coffee";
let isDecaf = false;
userAge = 16;
if (drinkType === "coffee" && userType >= 18) {
	console.log("커피 주문 가능");
} else if (drinkType === "coffee" && isDecaf) {
	console.log("디카페인 커피 가능");
} else if (drinkType === "tea") {
	console.log("차 주문 가능");
} else {
	console.log("음료수만 가능");
}
