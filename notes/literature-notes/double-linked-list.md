---
title: "Double Linked List 정리"
author: "양승민"
date: "2022-04-13"
---

# Double Linked List
자매품 연결 리스트:  [[linked-list]]

## 이중 링크드 리스트의 특징

- 각 노드가 데이터와 포인터를 가져서 연결 고리가 두개 있는 자료구조
- 구현 해야하는 메서드
  - 노드 개수 / 비어 있는지 확인: DoubleLinkedList.size(), DoubleLinkedList.isEmpty()
  - 순차 출력 / 역 출력: DoubleLinkedList.printNode(), DoubleLinkedList.printNodeInverse()
  - 노드 추가: DoubleLinkedList.append(), DoubleLinkedList.insert()
  - 노드 삭제: DoubleLinkedList.remove(), DoubleLinkedList.removeAt()
  - 데이터 위치 확인: DoubleLinkedList.indexOf()

## 링크드 리스트 메서드 구현 방법

### 1. LinkedList.size()

- 링크드 리스트의 Node는 본인과 다음정보 밖에 모른다.
- 다음 정보를 이용해 반복문을 돌면서 다음 정보가 없는 마지막 노드까지 순회를 해야한다.
- 순회를 한번 할때마다 count 숫자를 하나씩 증가시켜 총길이를 계산한다.
  - 이미 계산된 length값이 있다면 반환한다.

### 2. LinkedList.isEmpty()

- 1번과 같다. 다음 정보를 이용해 마지막 노드까지 순회를 해야한다.
- 순회를 할때 마다 얻은 count의 총 숫자가 0보다 큰지 계산한다.
  - 이미 계산된 length값이 0인지 계산한다.

### 3. LinkedList.printNode()

- 역시 마지막 노드까지 순회를 기본전제로 깔게 된다.
- 링크드 리스트를 순회하면서 Node값을 하나의 String변수에 추가하여 console.log를 찍을 수 있다.
- 개행을 시키고 싶지 않다면, process.stdout.write()을 이용하여 찍을 수 있다.

### 4. LinkedList.apeend()

- 역시 마지막 노드까지 순회를 하게 된다.
- 다음 노드가 등록되어 있지 않은 노드에다 다음노드로 등록해주나.

### 5. LinkedList.insert()

- 특정 위치의 포지션에 노드를 등록하기 위해선 특정 포지션까지 순회가 필요하다.
- 0번째 일경우, 방어코드를 작성하여 처리한다.
- 순회 하다가 특정 포지션에 도착하면 현재 노드의 다음 노드 정보를 갈아 끼우고자 하는 Node로 바꿔준다.
- 갈아끼우는 Node의 다음 노드 정보를 원래 그 다음노드에 연결해준다.
- Node가 하나 증가했으므로 length를 하나더 늘려준다.

### 6. LinkedList.remove(value)

- 마지막 노드까지 순회가 필요하다
- 인자값으로 가져온 value와 동일한 값을 소유한 node가 없을때를 대비한 방어코드를 짠다.
- value와 같은 node를 발견하면 이전 노드의 다음노드 정보를 지우려고하는 노드의 다음노드 정보로 갈아끼운다.
- Node가 하나 삭제되었으므로 length를 하나 줄여준다.

### 7. LinkedList.removeAt(position)

- insert()와 동작원리가 같다

### 8. LinkedList.indexOf()

- 마지막 까지 순회를 하면서 index값을 찾을 변수를 하나 선언한다.
- 해당 값이 없으면 -1을 반환한다.
- 순회를 하다가 찾고자 하는 value를 소유한 노드를 발견하면 해당 index를 리턴해준다.