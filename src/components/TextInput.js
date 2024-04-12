import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../App';

const TextInput = () => {
  const handelChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useRecoilState(textState);
  return (
    <div>
      <input value={text} onChange={handelChange} />
      Echo: {text}
    </div>
  );
};

export default TextInput;
