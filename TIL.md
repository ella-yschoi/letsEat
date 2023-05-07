# TIL 정리

## 📝 프로젝트 하면서 배운 내용들

### state 변경 함수의 특징 : array/object
  ```javascript
  // 예를 들어
  let arr = [1, 2, 3];
  ```
- 123 이라는 arr에 집어 넣어주세요 (X)
- 123 이라는 arr를 미지에 공간(RAM)에다가 저장해 두고
- 123 이라는 arr가 어디에 있는지 가리키는 화살표만 변수에 저장됨

<br/>

### 컴포넌트 만드는 방법
  1. (다른 function 바깥에다가) function 만들고 
  2. return() 안에 html 담기
  3. `<함수명> </함수명>` 쓰기

- 여러 방법이 있음
    ```javascript
    // 1
    const Modal = () => {
        return(
            <div>html 요소들</div>
        );
    }

    // 2
    function Modal() {
        return(
            <div>html 요소들</div>
        );
    }
    ```

<br/>

### return() 안에 html div 병렬 기입 하려면
  - 큰 div로 나머지 div들을 묶어주기
  - 의미없는 `<div>` 대신 리액트의 fragment 문법인 `<> </>` 사용 가능

- 둘 다 똑같음
  - `<함수명> </함수명>`
  - `<함수명/>`

<br/>

### 어떤 것을 컴포넌트로 만들면 좋은가
  - 반복적인 html 축약할 때
  - 큰 페이지들
  - 자주 변경되는 것들
  - 혹은 협업시에도 컴포넌트 단위로 작업을 분배하기도 함

- 다만, 컴포넌트를 너무 많이 만들면 책임이 따름..
  - 단점: state 가져다 쓸 때 문제 생김
  - 당연히 JS에서는 A 함수에 있던 변수는 B 함수에서 마음대로 가져다 쓸 수 없음
  - 따라서 props로 state를 다른 함수로 전해줘야 비로소 사용 가능

<br/>

### 동적인 UI 만들기 STEP
1. html, css로 미리 디자인 완성
2. UI의 현재 상태를 state로 저장
3. state에 따라 UI가 어떻게 보일지 작성

<br/>

### 반복문으로 같은 html 반복 생성하기: map()
1. array 자료 개수만큼 함수 안의 코드 실행해줌

<br/>

## 📝 에러 삽질 노트

### Array sorting
- 왜 버튼을 누르면 가나다순 정렬이 안되지?
    ```javascript
    <button onClick={()=>{
        let sortTitle = [...title];
        sortTitle.sort();
        console.log(sortTitle);
    }}>가나다순 정렬</button>
    ```

- 마지막에 기존 state를 갈아치워줘야 가나다 순으로 정렬됨
    ```javascript
    <button onClick={()=>{
        let sortTitle = [...title];
        sortTitle.sort();
        setTitle(sortTitle);
    }}>가나다순 정렬</button>
    ```
