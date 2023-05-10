import './App.css';

import logo from './logo.svg';
import { useState } from 'react'; // 1. useState import 하기

function App() {
  let post = '🤙 나만 아는 맛집 제보하기'; // 서버에서 가져온 데이터라고 가정
  
  // 2. React에서 자료를 잠깐 저장하는 state 만들기
  // 3. 만약 변수 사용하고 싶다면 let [a, b]
    // a는 state에 보관했던 자료가 나옴
    // b는 state 변경을 도와주는 함수이며, 이걸 써야 html 재렌더링이 잘 됨
  let [title, setTitle] = useState(['성수역 | 데이트', '강남역 | 회식', '압구정역 | 모임']);
  let [thumb, setThumb] = useState([0,0,0]);
  let [modal, setModal] = useState(false); // 안보이는 상태 기본값 설정
  
  return (
    // JSX: class 넣을 때 className으로 작성
    <div className="App"> 
      <div className="yellow-nav">
        {/* JSX: style 넣을 때 style={{스타일명: '값'}} */}
        <h4 style={ {color: 'white', fontSize: '18px'} }
        > 🍔 이거 먹자 🍔 </h4>
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
          editTitle[0] = '망원동 | 데이트'
          setTitle(editTitle);
        }}> 이번주 데이트는 망원동 어때요? </button>
      
      {/* state는 갑자기 변경되면 state 쓰던 html은 자동으로 재렌더링 됨 
        따라서 state는 변동시 자동으로 html에 반영되게 만들고 싶을 때 사용하기 */}
      {/* onClick={} 안에는 함수 이름을 넣어야 함 */}
      {/* <div className="list"> */}
        {/* setThumb 괄호 안에 있는건 기존 state를 갈아치워주는 역할
        다만, 기존 state === 변경 state -> 변경 X */}
        {/* <h4>{ title[0] } 
        <span onClick={()=>{ setThumb(thumb+1) }}> 👍 </span>
        { thumb }</h4>
        <p className="share">📮 공유하기</p>
      </div> */}
      
      { // map()으로 같은 html 반복 생성하기: React는 array 안에 html 담아도 잘 보여줌
        // array -> 글 제목 개수만큼 생성되도록 title로
        // 파라미터는 두 개까지 가능 (a: array 안에 있던 data, i: 반복문 도는 정수)
        title.map(function(a, i){ 
          return (
            // key: 반복문으로 html 생성하면 key={html마다 다른 숫자} 추가 필요
          <div className="list" key={i}> 
          <h4>
          { title[i] } 
          <span onClick={()=>{
            let copy = [...thumb];
            copy[i] = copy[i] + 1;
            setThumb(copy)
          }}> 👍 </span>{ thumb[i] }
          </h4>
          <p className="share">📮 공유하기</p>
          </div>)
        }) 
      }
      
      <div className="list"> {/* modal (X) 꼭 state 변경함수인 setModal 넣을 것 */}
        <h4 button onClick={() => { setModal(!modal) }}>{ title[2] }</h4>
        <p className="share">📮 공유하기</p>
      </div>

      {/* state에 따라 모달 UI가 어떻게 보일지 작성하기 → state가 false면 숨겨달라
      - 다만 이 중괄호 안에는 html 요소만 들어가야 하므로 조건문 아닌 삼항연산자 사용 
      - null은 비어있는 html용으로 자주 사용함 
      - 제목 클릭시 모달 띄우려면? 클릭시 state만 조절하기 */}
      {modal === true ? <Modal title={title} setTitle={setTitle}/> : ''}
      
      {/* JSX: 변수 넣을 때 {} 사용 → Data Binding */}
      <h4>{ post }</h4> 
    </div>
  );
}

function Modal(props) {
  return(
    // 추후 컴포넌트로 넣을 것 ----------
    <div className='modal'>
      <h4>{props.title[2]}</h4>
      <p>
        📍 <b>위치</b><br/>
        압구정역 근처
        <p/>
        😋 <b>음식</b><br/>
        잠봉 크뤼<br/>
        부드러운 달걀 스크램블에 짭쪼름한 프로슈토를,
        <br/>비스킷같이 바삭한 빵에 올려 먹었다. 개인적으로 최애!
        <p/>
        와플 샌드위치<br/>
        써니사이드 에그, 베이컨, 치즈로 만든 와플 샌드위치<br/>
        아는 맛인줄 알았으나 은근한 새로움을 주어서 같이 간 3명의 최애
        <p/>
        🤑 <b>금액대</b><br/>
        음식은 1만원 후반~2만원 초중반대
        커피 및 음료는 7천원~1만원대
        <p/>
        😌 <b>분위기</b><br/>
        여자들끼리 분위기 좋은데에서 이쁜 브런치 먹고 네 다섯 시간 수다 떨기엔 좋은 장소
        <p/>
        🤔 <b>총평</b> ⭐️⭐️⭐️⭐️ <br/>
        법카로 사치부리고 싶다? 추천!<br/>
        프랑스 여행하는 기분 내고 싶다? 추천!
        <br/>
        </p>
        <button onClick={()=>{props.setTitle(['성수역 | 데이트', 
        '강남역 | 회식', '압구정역에서 이거 먹자!'])}}>제목 수정해서 공유하기</button>
    </div>
  )
}

export default App;
