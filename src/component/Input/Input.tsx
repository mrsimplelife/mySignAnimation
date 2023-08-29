import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { InputHTMLAttributes } from 'react';
import './style.css';

type InputProps = {
  icon: FontAwesomeIconProps['icon'];
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ icon, placeholder, type, autoComplete }: InputProps) {
  return (
    <div className='input'>
      <FontAwesomeIcon icon={icon} className='input-icon icon' />
      <input type={type} placeholder={placeholder} autoComplete={autoComplete} />
    </div>
  );
}

export default Input;
