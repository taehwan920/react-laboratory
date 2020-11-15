import React, { useRef, useState } from 'react';
import Child from './Child';

export default () => {
    let [parentCnt, setParentCnt] = useState(0);
    let [parentInput, setParentInput] = useState(``);

    const inputRef = useRef(null);

    const clickedParentCnt = () => {
        console.log('parent cnt changed')
        setParentCnt(parentCnt + 1)
    };

    const changedParentInput = () => {
        console.log('parent input changed');
        const PInput = inputRef.current.value;
        console.log(PInput);
        setParentInput(PInput.value);
    };

    console.log('parent rendered');

    return (
        <main>
            부모 컴포넌트
            <input
                ref={inputRef}
                type="text"
                onChange={changedParentInput}
            />
            <div>
                니가 입력한 {parentInput}
            </div>
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