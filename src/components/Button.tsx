interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'warning';
  onClick: () => void;
}

function Button({ children, color = 'primary', onClick }: Props) {
  return (
    <button type='button' className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
