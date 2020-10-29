import React, { useState } from 'react';
import Child from './Child';

export default () => {
    let [parentCnt, setParentCnt] = useState(0);

    const clickedParentCnt = () => {
        console.log('parent cnt changed')
        setParentCnt(parentCnt++)
    };

    const changedParentInput = () => {
        console.log('parent input changed');
    };

    console.log('parent rendered');

    return (
        <main>
            부모 컴포넌트
            <input
                type="text"
                onChange={changedParentInput}
            />
            <div>
                여긴 부모 카운트 {parentCnt}
            </div>
            <button
                onClick={clickedParentCnt}
            >
                부모 ++
            </button>
            <Child />
        </main>
    )
}