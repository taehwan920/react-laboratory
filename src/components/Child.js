import React, { useState } from 'react';

export default () => {
    let [childCnt, setChildCnt] = useState(0);

    const clickedChild = () => {
        console.log('child changed')
        setChildCnt(childCnt = 1);
    };

    console.log('child rendered');

    return (
        <div>
            <button
                onClick={clickedChild}
            >
                자식 ++
            </button>
            <div>
                여긴 자식 컴포넌트다 {childCnt}
            </div>
        </div>
    )
}