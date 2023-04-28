import './App.css';

import logo from './logo.svg';
import { useState } from 'react'; // 1. useState import 하기

function App() {
  let post = '맛집 추천 블로그'; // 서버에서 가져온 데이터라고 가정
  
  // 2. React에서 자료를 잠깐 저장하는 state 만들기
  // 3. 만약 변수 사용하고 싶다면 let [a, b]
    // a는 state에 보관했던 자료가 나옴
    // b는 state 변경을 도와주는 함수
  let [title1, setTitle1] = useState('강남 맛집 추천'); 
  let [title2, setTitle2] = useState('역삼 맛집 추천'); 
  let [title3, setTitle3] = useState('삼성 맛집 추천'); 
  
  return (
    // JSX: class 넣을 때 className으로 작성
    <div className="App"> 
      <div className="black-nav">
        {/* JSX: style 넣을 때 style={{스타일명: '값'}} */}
        <h4 style={ {color: 'wheat', fontSize: '18px'} }>Foodie Blog</h4>
      </div>
      <div className="list">
        {/* state는 갑자기 변경되면 state 쓰던 html은 자동으로 재렌더링 됨 
        따라서 state는 변동시 자동으로 html에 반영되게 만들고 싶을 때 사용하기 */}
        <h4>{ title1 }</h4>
        <p>4월 1일 발행</p>
      </div>
      <div className="list">
        <h4>{ title2 }</h4>
        <p>4월 2일 발행</p>
      </div>
      <div className="list">
        <h4>{ title3 }</h4>
        <p>4월 3일 발행</p>
      </div>
      {/* JSX: 변수 넣을 때 {} 사용 → Data Binding */}
      <h4>{ post }</h4> 
    </div>
  );
}

export default App;
