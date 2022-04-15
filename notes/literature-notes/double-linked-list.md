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