---
title: DP Study
date: 2022-08-08T15:51:00.000Z
createdAt: 2022-07-28T06:12:00.000Z
category: Algorithm
---

## 막대기 자르기 문제


| 길이 | 0 | 1 | 2 | 3 | 4 | 5  | 6  | 7  | 8  | 9  | 10 |
| -- | - | - | - | - | - | -- | -- | -- | -- | -- | -- |
| 가격 | 0 | 1 | 5 | 8 | 9 | 10 | 17 | 17 | 20 | 24 | 30 |


> 🎇 위 표에 맞게 주어진 길이의 막대기를 잘라서 얻을 수 있는 최대 가격을 구하여라.


## 풀이


```c
R1 = P1
R2 = MAX (P1 + R1, P2 + R0)
R3 = MAX (P1 + R2, P2 + R1, P3 + R0)
R4 = MAX (P1 + R3, P2 + R2, P3 + R1, P4 + R0)
..
```


이런식으로 나타낼 수 있음.


결국, P0 .. P10 + R(n)의 최댓값이 최대 가격이 됨.


## 최장 공통 부분 수열 (LCS)


> 🎇 두 개의 문자열에서 순서대로 겹치는 문자가 최대 몇 개인지 구하라.


## 풀이


뒤에서부터 본다.


양쪽의 끝자리가 같다면, 그 끝자리를 제외한 나머지의 결과값에 +1한 값이다.


그렇지 않다면, 각각 끝자리를 제외한 나머지의 결과값의 최대값이다.


```c
// LCS('ABCBDAB', 'BDCABA');

DIFF | k: 1, l: 1, A, B. 0 // 다르므로 (1,0), (0,1)을 비교하여 큰 값 = 0
DIFF | k: 1, l: 2, A, BD. 0
DIFF | k: 1, l: 3, A, BDC. 0
SAME | k: 1, l: 4, A, BDCA, 1 // 같으므로 (0, 3)에 1을 더한 값 = 1
DIFF | k: 1, l: 5, A, BDCAB. 1 // 다르므로 (1,4), (0,5)를 비교하여 큰 값 = 1
SAME | k: 1, l: 6, A, BDCABA, 1
SAME | k: 2, l: 1, AB, B, 1
DIFF | k: 2, l: 2, AB, BD. 1
DIFF | k: 2, l: 3, AB, BDC. 1
DIFF | k: 2, l: 4, AB, BDCA. 1
SAME | k: 2, l: 5, AB, BDCAB, 2 // 같으므로 (1, 4)에 1을 더한 값 = 2
DIFF | k: 2, l: 6, AB, BDCABA. 2
DIFF | k: 3, l: 1, ABC, B. 1
DIFF | k: 3, l: 2, ABC, BD. 1
SAME | k: 3, l: 3, ABC, BDC, 2
DIFF | k: 3, l: 4, ABC, BDCA. 2
DIFF | k: 3, l: 5, ABC, BDCAB. 2
DIFF | k: 3, l: 6, ABC, BDCABA. 2
SAME | k: 4, l: 1, ABCB, B, 1
DIFF | k: 4, l: 2, ABCB, BD. 1
DIFF | k: 4, l: 3, ABCB, BDC. 2
DIFF | k: 4, l: 4, ABCB, BDCA. 2
SAME | k: 4, l: 5, ABCB, BDCAB, 3
DIFF | k: 4, l: 6, ABCB, BDCABA. 3
DIFF | k: 5, l: 1, ABCBD, B. 1
SAME | k: 5, l: 2, ABCBD, BD, 2
DIFF | k: 5, l: 3, ABCBD, BDC. 2
DIFF | k: 5, l: 4, ABCBD, BDCA. 2
DIFF | k: 5, l: 5, ABCBD, BDCAB. 3
DIFF | k: 5, l: 6, ABCBD, BDCABA. 3
DIFF | k: 6, l: 1, ABCBDA, B. 1
DIFF | k: 6, l: 2, ABCBDA, BD. 2
DIFF | k: 6, l: 3, ABCBDA, BDC. 2
SAME | k: 6, l: 4, ABCBDA, BDCA, 3
DIFF | k: 6, l: 5, ABCBDA, BDCAB. 3
SAME | k: 6, l: 6, ABCBDA, BDCABA, 4
SAME | k: 7, l: 1, ABCBDAB, B, 1
DIFF | k: 7, l: 2, ABCBDAB, BD. 2
DIFF | k: 7, l: 3, ABCBDAB, BDC. 2
DIFF | k: 7, l: 4, ABCBDAB, BDCA. 3
SAME | k: 7, l: 5, ABCBDAB, BDCAB, 4
DIFF | k: 7, l: 6, ABCBDAB, BDCABA. 4

[
  //  B  D  C  A  B  A
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1], // A
  [0, 1, 1, 1, 1, 2, 2], // B
  [0, 1, 1, 2, 2, 2, 2], // C
  [0, 1, 1, 2, 2, 3, 3], // B
  [0, 1, 2, 2, 2, 3, 3], // D
  [0, 1, 2, 2, 3, 3, 4], // A
  [0, 1, 2, 2, 3, 4, 4], // B
];
```


## 0/1 배낭 문제


| 무게 | 10 | 20  | 30  |
| -- | -- | --- | --- |
| 가치 | 60 | 100 | 120 |


> 🎇 무게 제한이 50인 배낭에 위와 같은 세 개 중 가치가 최대가 되도록 물건을 넣는 문제


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8184e123-b920-4b7e-81b6-dcd84ac372d1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220812T144002Z&X-Amz-Expires=3600&X-Amz-Signature=4dbf68b0bcd54111010a5c3b754a63c67c59e71ccfff52c65d85a5a95627bab7&X-Amz-SignedHeaders=host&x-id=GetObject)


|           | 0 | 1    | 2    | 3    | 4    | 5     | 6     | 7     |
| --------- | - | ---- | ---- | ---- | ---- | ----- | ----- | ----- |
| 0         | 0 | 0    | 0    | 0    | 0    | 0     | 0     | 0     |
| 1 (6,13)  | 0 | 0(1) | 0(2) | 0(3) | 0(4) | 0(5)  | 13(0) | 13(1) |
| 2 (4,8)   | 0 | 0(1) | 0(2) | 0(3) | 8(0) | 8(1)  | 13(0) | 13(1) |
| 3 (3,6)   | 0 | 0(1) | 0(2) | 6(3) | 8(0) | 8(1)  | 13(0) | 14(0) |
| 4 (5, 12) | 0 | 0(1) | 0(2) | 6(3) | 8(0) | 12(0) | 13(0) | 14(0) |


```c
각 가방의 가치 : v[n]
각 가방의 무게 : w[n]
최대이윤 : dp[m][n]이라 할 때,
 
(w[i] <= j ) dp[i][j] = max(v[i] + dp[i-1][j - w[i]], dp[i-1][j]
 
(w[i] > j) dp[i][j] = dp[i-1][j]
```


---


## 사칙연산


[bookmark](https://school.programmers.co.kr/learn/courses/30/lessons/1843)


```c
["5", "-", "3", "+", "1", "+", "2", "-", "4"]
SUM:4 MIN:0 MAX:0
-
SUM:0 MIN:-4 MAX:-4

SUM:6 MIN:-4 MAX:-4

(MAX)
-3 +(1+2) + MAX
-SUM -MIN

(MIN)
-SUM -MAX
-SUM +MIN
```


## 참고 링크


[bookmark](https://www.zerocho.com/category/Algorithm/post/584b979a580277001862f182)


[bookmark](https://dheldh77.tistory.com/entry/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%B0%B0%EB%82%AD-%EB%AC%B8%EC%A0%9CKnapsack-Problem)


[bookmark](https://hi-guten-tag.tistory.com/160)

