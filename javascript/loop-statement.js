// TODO: 0부터 4까지 숫자 출력하기
// for 반복문을 활용해서 0부터 4까지의 숫자를 출력한다

/* 출력 결과
0
1
2
3
4
*/

for (let i = 0; i < 5; i++) {
	console.log(i);
}

// TODO: 변수 N을 사용한 1부터 N까지 출력하기
// 변수 N에 6을 할당한다
// for 반복문을 활용해서 1부터 N까지의 숫자를 출력한다

/* 출력 결과
1
2
3
4
5
6
*/

let N = 6;
for (let i = 1; i <= N; i++) {
	console.log(i);
}

// TODO: break로 5에서 반복 중단하기
// for 반복문을 활용해서 1부터 10까지 반복 출력하되, 5가 되면 break로 반복을 중단한다

/* 출력 결과
1
2
3
4
5
*/

for (let i = 1; i <= 10; i++) {
	console.log(i);
	if (i === 5) break;
}

// TODO: continue로 3 건너뛰기
// for 반복문을 활용해서 1부터 6까지 반복 출력하되, 3일 때는 continue로 반복을 건너뛴다

/* 출력 결과
1
2
4
5
6
*/

for (let i = 1; i <= 6; i++) {
	if (i === 3) continue;
	console.log(i);
}

// TODO: 10부터 1까지 역순 출력하기
// for 반복문을 활용해서 10부터 1까지의 숫자를 역순으로 출력한다

/* 출력 결과
10
9
8
7
6
5
4
3
2
1
*/

for (let i = 10; i > 0; i--) {
	console.log(i);
}

// TODO: 변수로 범위 지정하여 출력하기
// 변수 start에 5, end에 10을 할당한다
// for 반복문을 활용해서 start부터 end까지의 숫자를 출력한다

/* 출력 결과
5
6
7
8
9
10
*/

let start = 5;
let end = 10;
for (start; start <= end; start++) {
	console.log(start);
}

// TODO: 16의 배수에서 반복 중단하기
// for 반복문을 활용해서 1부터 20까지 반복 출력하되, 변수가 4의 배수가 되면 반복을 중단한다

/* 출력 결과
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
*/

for (let i = 1; i <= 20; i++) {
	if (i % 16 === 0) break;
	console.log(i);
}

// TODO: 홀수 건너뛰고 짝수만 출력하기
// for 반복문을 활용해서 1부터 10까지 반복 출력하되, 홀수일 때는 건너뛰고 짝수만 출력한다

/* 출력 결과
2
4
6
8
10
*/

for (let i = 1; i <= 10; i++) {
	if (i % 2 !== 0) continue;
	console.log(i);
}

// TODO: 2의 배수만 출력하기
// for 반복문을 활용해서 1부터 16까지 반복 출력하면서 2의 배수만 출력한다

/* 출력 결과
2
4
6
8
10
12
14
16
*/

for (let i = 1; i <= 16; i++) {
	if (i % 2 === 0) console.log(i);
}
