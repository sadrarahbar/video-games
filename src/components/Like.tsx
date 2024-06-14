import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

interface Props {
  size: string;
  onClick: () => void;
}

const Like = ({ size, onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return <AiFillHeart color='red' size={size} onClick={() => toggle()} />;
  else return <AiOutlineHeart size={size} onClick={() => toggle()} />;
};

export default Like;
