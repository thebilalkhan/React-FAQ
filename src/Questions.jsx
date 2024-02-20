import React, { useState } from 'react';
import { qna } from './qna';


export default function Questions() {
    let [qsn, setQsn] = useState(qna[0].id);

    return (
        qna.map((data, i) => {
            let ansDetail = {
                data,
                qsn,
                setQsn
            };

            return (
                <Ques key={data.id} ansDetail={ansDetail} />
            );
        })
    );
}



function Ques({ ansDetail }) {
    let { data, qsn, setQsn } = ansDetail;

    return (
       
        <div className='container'>
            <div className='questions' onClick={() => { setQsn(data.id) }}>{data.Question}</div>
            <div className={`Answers ${(qsn === data.id) ? "unhideAns" : ""}`} >{data.Answers}</div>
        </div>
    );
}
