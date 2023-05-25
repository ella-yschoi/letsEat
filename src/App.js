import './App.css';

import Modal from './Modal';
import { useState } from 'react';

function App() {
  let report = '🧁 나만 아는 맛집 제보하기'; 
  let [title, setTitle] = useState(['성수역', '강남역', '압구정역']);
  let [thumb, setThumb] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false); 
  let [modalTitle, setModalTitle] = useState(0);
  let [inputValue, setInputValue] = useState('');
  

  // 맛집 제보하기 버튼
  const addPost = () => {
    if (inputValue) {
      setTitle([...title, inputValue]);
      setThumb([...thumb, 0]);
      setInputValue('');
    }
  };
  
  // 제보한 맛집 삭제
  const deletePost = (index) => {
    const newTitle = [...title];
    const newThumb = [...thumb];
    newTitle.splice(index, 1);
    newThumb.splice(index, 1);
    setTitle(newTitle);
    setThumb(newThumb);
  };
  
  return (
    <div className="App"> 
      <div className="yellow-nav">
        <h4 style={ {color: 'white', fontSize: '18px'} }
        > 🍔 이거 먹자 🍔 </h4>
      </div>

      {/* 가나다순 정렬 */}
      <button className='sortButton' onClick={()=>{
        let sortTitle = [...title];
        sortTitle.sort();
        setTitle(sortTitle);
      }}>가나다순 정렬</button>

      {/* 다른 지역 추천 */}
      <button className='recommendButton' onClick={()=>{ 
          let editTitle = [...title]; 
          editTitle[0] = '망원역'
          setTitle(editTitle);
        }}> 이번 주는 망원동 어때요? </button>
      
      {/* 기본 지역 3개 띄우기 w.모달, 공유, 삭제 */}
      {
        title.map(function(a, i){ 
          return (
          <div className="list" key={i}> 
            <h4>
              <span onClick={() => { setModal(!modal); setModalTitle(i) }}>{ title[i] }
              </span>
              <span onClick={()=>{
                let copy = [...thumb];
                copy[i] = copy[i] + 1;
                setThumb(copy)
              }}> 👍 </span>{ thumb[i] }
              </h4>
              <p className="share">📮 공유하기</p>
              <button className="deleteButton" onClick={() => deletePost(i)}>삭제</button>
          </div>)
        }) 
      }
      
      {/* 모달 */}
      {modal === true ? 
      <Modal title={title} 
      setTitle={setTitle}
      modalTitle={modalTitle}
      /> : ''}
      
      {/* 추천 맛집 입력란 */}
      <textarea 
      className='reportArea' 
      placeholder = "추천 맛집이 있나요?" 
      value={inputValue}
      onChange={(e) => {setInputValue(e.target.value);}} />
      <p/>
      
      {/* 맛집 제보 버튼 */}
      <button 
      className='reportButton'
      onClick={addPost}>
      { report }</button>
      <p/>
      
    </div>
  );
}

export default App;