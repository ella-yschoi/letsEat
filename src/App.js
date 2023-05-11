import './App.css';

import logo from './logo.svg';
import { useState } from 'react';

function App() {
  let post = '🤙 나만 아는 맛집 제보하기'; 
  let [title, setTitle] = useState(['성수역 | 데이트', '강남역 | 회식', '압구정역 | 모임']);
  let [thumb, setThumb] = useState([0,0,0]);
  let [modal, setModal] = useState(false); 
  let [modalTitle, setModalTitle] = useState(0);
  
  return (
    <div className="App"> 
      <div className="yellow-nav">
        <h4 style={ {color: 'white', fontSize: '18px'} }
        > 🍔 이거 먹자 🍔 </h4>
      </div>

      <button onClick={()=>{
        let sortTitle = [...title];
        sortTitle.sort();
        setTitle(sortTitle);
      }}>가나다순 정렬</button>
    
      <button onClick={()=>{ 
          let editTitle = [...title]; 
          editTitle[0] = '망원동 | 데이트'
          setTitle(editTitle);
        }}> 이번주 데이트는 망원동 어때요? </button>
      
      {
        title.map(function(a, i){ 
          return (
          <div className="list" key={i}> 
          <h4 button onClick={() => { setModal(!modal) }}>{ title[i] }
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

      <button onClick={()=>{setModalTitle(0)}}>성수역</button>
      <button onClick={()=>{setModalTitle(1)}}>강남역</button>
      <button onClick={()=>{setModalTitle(2)}}>압구정역</button>

      {modal === true ? 
      <Modal 
      title={title} 
      setTitle={setTitle}
      modalTitle={modalTitle}
      /> : ''}
      
      <h4>{ post }</h4> 
    </div>
  );
}

function Modal(props) {
  return(
    // 추후 컴포넌트로 넣을 것 ----------
    <div className='modal'>
      <h4>{ props.title[props.modalTitle] }</h4>
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