import react from 'react';

function Modal(props) {
    return (
    <div className='modal'>
        <h4>{props.title[props.modalTitle]}</h4>
        <div>
        📍 <b>위치</b><br />
        {props.title[props.modalTitle]} 근처<p/>
        </div>
        <div>
        😋 <b>음식</b><br />
        음식 맛 후기<p/>
        </div>
        <div>
        🤑 <b>금액대</b><br />
        금액대 정보<p/>
        </div>
        <div>
        😌 <b>분위기</b><br />
        분위기 설명<p/>
        </div>
        <div>
        🤔 <b>총평</b><br />
        총평 후기<p/>
        </div>
        <button onClick={() => { props.setTitle(['성수역에서 이거 먹자', 
        '강남역에서 이거 먹자', '압구정역에서 이거 먹자']) }}>제목 수정해서 공유하기
        </button>
    </div>
    );
}

export default Modal;