import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input/Input';
import './style.css';

type SignFromProps = {
  isSignin?: boolean;
};

function SignFrom({ isSignin }: SignFromProps) {
  return (
    <div className='sign-form'>
      <h1>{isSignin ? SIGNIN_TITLE : SIGNUP_TITLE}</h1>
      <p>{isSignin ? SIGNIN_SUBTITLE : SIGNUP_SUBTITLE}</p>
      <form>
        {!isSignin && <Input icon={faUser} placeholder='Name' type='text' />}
        <Input icon={faEnvelope} placeholder='Email' type='text' autoComplete='username' />
        <Input icon={faLock} placeholder='Password' type='password' autoComplete='current-password' />
        {isSignin && <p>Forgot your password?</p>}
        <button>{isSignin ? SIGNIN_BUTTON : SIGNUP_BUTTON}</button>
      </form>
    </div>
  );
}

export default SignFrom;

const SIGNIN_TITLE = 'Sign in to my App';
const SIGNUP_TITLE = 'Create Account';
const SIGNIN_SUBTITLE = 'or use your email account :';
const SIGNUP_SUBTITLE = 'or use your email for registration :';
const SIGNIN_BUTTON = 'SIGN IN';
const SIGNUP_BUTTON = 'SIGN UP';
