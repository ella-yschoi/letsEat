import './App.css';

import logo from './logo.svg';
import { useState } from 'react'; // 1. useState import 하기

function App() {
  let post = '〰️ 맛집 추천은 계속됩니다 〰️'; // 서버에서 가져온 데이터라고 가정
  
  // 2. React에서 자료를 잠깐 저장하는 state 만들기
  // 3. 만약 변수 사용하고 싶다면 let [a, b]
    // a는 state에 보관했던 자료가 나옴
    // b는 state 변경을 도와주는 함수이며, 이걸 써야 html 재렌더링이 잘 됨
  let [title, setTitle] = useState(['한남동 맛집 추천', '성수동 맛집 추천', '평창동 맛집 추천']);
  let [thumb, setThumb] = useState(0);
  
  return (
    // JSX: class 넣을 때 className으로 작성
    <div className="App"> 
      <div className="black-nav">
        {/* JSX: style 넣을 때 style={{스타일명: '값'}} */}
        <h4 style={ {color: 'white', fontSize: '18px'} }>🍚 Foodie Blog 🍚</h4>
      </div>
      
      <button onClick={()=>{
        let sortTitle = [...title];
        sortTitle.sort();
        setTitle(sortTitle);
      }}>가나다순 정렬</button>
    
      <button onClick={()=>{ 
          // array, object 다룰 때 원본은 보존하는 것이 좋기에 변수 선언
          // copy는 기존 state와 달라지지 않았기에 state 변경을 안해준 것
          // array, object는 reference data type이라 그럼
          // '[...]' -> 괄호를 벗겼다가 다시 씌워준 것이므로 독립적인 array 사본이므로 화살표도 달라짐
          // => state가 array/object라면 독립적 copy(shallow copy)본을 만들어서 state 변경 함수에 넣어 주어야 함!
          let editTitle = [...title]; 
          editTitle[0] = '성수 맛집 추천'
          setTitle(editTitle);
        }}>제목 수정</button>
      
      {/* state는 갑자기 변경되면 state 쓰던 html은 자동으로 재렌더링 됨 
        따라서 state는 변동시 자동으로 html에 반영되게 만들고 싶을 때 사용하기 */}
      {/* onClick={} 안에는 함수 이름을 넣어야 함 */}
      <div className="list">
        <h4>{ title[0] } <span onClick={()=>{ 
          // setThumb 괄호 안에 있는건 기존 state를 갈아치워주는 역할
          // 다만, 기존 state === 변경 state -> 변경 X
          setThumb(thumb+1) }}>👍🏻</span>
        { thumb }</h4>
        <p>4월 1일 발행</p>
      </div>
      
      <div className="list">
        <h4>{ title[1] }<span>👍🏻</span>{ thumb }</h4>
        <p>4월 2일 발행</p>
      </div>
      
      <div className="list">
        <h4>{ title[2] }<span>👍🏻</span>{ thumb }</h4>
        <p>4월 3일 발행</p>
      </div>
      
      {/* JSX: 변수 넣을 때 {} 사용 → Data Binding */}
      <h4>{ post }</h4> 
    </div>
  );
}

export default App;
