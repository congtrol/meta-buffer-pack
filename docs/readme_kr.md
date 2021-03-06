# 메타 버퍼 팩


`Meta Buffer Pack` : 다중 다형의 데이타들을 하나의 버퍼로 만들거나 반대로 복원 해주는 도구입니다.

## 용도
데이타를 파일로 저장하거나 네트웍으로 전송하려면, 다양한 크기와 자료형의 데이타들을 하나의 버퍼로 묶어줘야합니다. 그리고 이 단일 버퍼 데이타에서 다수의 원본 자료형을 복원하는 해석 작업이 필요합니다. 이를 위해 매우 복잡한 작업을 반복해줘야하는 문제가있습니다. `메타버퍼팩`을 시용하여 이 과정을 이해하기 쉽고, 손쉽게 처리할 수 있습니다. 

## 기능
- Meta Buffer : 사용자 정의 이름, 자료형, 엔디안, 데이타를 모두 내장한 확장 자료형
- pack : 다수의 메타 버퍼를 하나의 버퍼팩으로 묶어줍니다.
- unpack : 버퍼팩을 해석하여 원래의 자료형을 자동 복원해줍니다.
- MBA: 함수의 다중 인자 값 들을 하나의 버퍼팩으로 변환 및 자동 복원해줍니다.
- [ Node's Buffer](https://www.npmjs.com/package/buffer): 브라우저에서도 노드 버퍼 기능을 사용할 수 있도록 내장했습니다. 

## 지원
노드와 브라우저에서 공통 사용 가능하며 레가시 모듈 및 ES 모듈 방식을 모두 지원합니다.
- Node: CJS (require), ESM (import),  
- Browser: IIFE, ESM.


