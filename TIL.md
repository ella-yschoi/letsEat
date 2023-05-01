# TIL 정리
- state 변경 함수의 특징 : array/object
    ```javascript
    let arr = [1, 2, 3];
    // 123 이라는 arr에 집어 넣어주세요 (X)
    // 123 이라는 arr를 미지에 공간(RAM)에다가 저장해 두고
    // 123 이라는 arr가 어디에 있는지 가리키는 화살표만 변수에 저장됨
    ```
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