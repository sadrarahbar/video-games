import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClose: () => void;
}

function Alert({ children , onClose }: Props) {
  return (
    <div className='alert alert-primary alert-dismissible' role="alert">
      {children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" onClose={onClose}  aria-label="Close"></button>
    </div>
  );
}

export default Alert;
