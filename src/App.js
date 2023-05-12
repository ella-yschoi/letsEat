import './App.css';

import logo from './logo.svg';
import { useState } from 'react';

function App() {
  let post = '🤙 나만 아는 맛집 제보하기'; 
  let [title, setTitle] = useState(['성수역', '강남역', '압구정역']);
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
          editTitle[0] = '망원역'
          setTitle(editTitle);
        }}> 이번주 데이트는 망원동 어때요? </button>
      
      {
        title.map(function(a, i){ 
          return (
          <div className="list" key={i}> 
          <h4 button onClick={() => { setModal(!modal); setModalTitle(i) }}>{ title[i] }
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
        { props.title[props.modalTitle] } 근처
        <p/>
        😋 <b>음식</b><br/>
        음식 맛 후기
        <p/>
        🤑 <b>금액대</b><br/>
        금액대 정보 입력
        <p/>
        😌 <b>분위기</b><br/>
        분위기 설명
        <p/>
        🤔 <b>총평</b><br/>
        총평 후기
        <p/>
      </p>
        <button onClick={()=>{props.setTitle(['성수역에서 이거 먹자', 
        '강남역에서 이거 먹자', '압구정역에서 이거 먹자'])}}>제목 수정해서 공유하기</button><p/>

    </div>
  )
}

export default App;