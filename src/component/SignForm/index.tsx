import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

type SignFromProps = {
  isSignin?: boolean;
};

function SignFrom({ isSignin }: SignFromProps) {
  return (
    <div className='sign-form'>
      <h1>{isSignin ? 'Sign in to Diprella' : 'Create Account'}</h1>
      <p>{isSignin ? 'or use your email account :' : 'or use your email for registration :'}</p>
      <form>
        {!isSignin && (
          <div className='input'>
            <FontAwesomeIcon icon={faUser} className='input-icon icon' />
            <input type='text' placeholder='Name' />
          </div>
        )}
        <div className='input'>
          <FontAwesomeIcon icon={faEnvelope} className='input-icon icon' />
          <input type='text' placeholder='Email' autoComplete='username' />
        </div>
        <div className='input'>
          <FontAwesomeIcon icon={faLock} className='input-icon icon' />
          <input type='password' placeholder='Password' autoComplete='current-password' />
        </div>
        <p>Forgot your password?</p>
        <button>{isSignin ? 'SIGN IN' : 'SIGN UP'}</button>
      </form>
    </div>
  );
}

export default SignFrom;
