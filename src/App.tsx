import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isSignin, setIsSignin] = useState<boolean>();
  const [isSigninForm, setIsSigninFrom] = useState<boolean>();
  const handleButton = () => {
    setIsSignin(!isSignin);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsSigninFrom(isSignin);
    }, 250);
  }, [isSignin]);
  return (
    <div className='container'>
      <div className='card'>
        <div className={`sign-form-transition${isSignin === undefined ? '' : isSignin ? ' signin' : ' signup'}`}>
          {isSignin ? <SignFrom isSignin={isSigninForm} /> : <SignFrom isSignin={isSigninForm} />}
        </div>
        <div className={`background-animation${isSignin === undefined ? '' : isSignin ? ' signin' : ' signup'}`}>
          <SignPage
            title='Welcome Back !'
            description='To keep connected with us please login with your personal info'
            button='SIGN IN'
            onClick={handleButton}
            mock
            isSignin={isSignin}
          />
        </div>
        <div className={`signin-animation${isSignin === undefined ? '' : isSignin ? ' signin' : ' signup'}`}>
          <SignPage
            title='Welcome Back !'
            description='To keep connected with us please login with your personal info'
            button='SIGN IN'
            onClick={handleButton}
          />
        </div>
        <div className={`signup-animation${isSignin === undefined ? '' : isSignin ? ' signin' : ' signup'}`}>
          <SignPage title='Hello, Friend !' description='Enter your personal details and start your journey with us' button='SIGN UP' onClick={handleButton} />
        </div>
      </div>
    </div>
  );
}

export default App;

type SignPageProps = {
  title: string;
  description: string;
  button: string;
  onClick: () => void;
  mock?: boolean;
  isSignin?: boolean;
};

function SignPage({ title, description, onClick, mock, isSignin }: SignPageProps) {
  return (
    <div className='sign-page'>
      <h1 className={`${mock ? 'opacity' : ''}`}>{title}</h1>
      <p className={`${mock ? 'opacity' : ''}`}>{description}</p>
      <button className={`${mock ? '' : 'opacity'}`} onClick={onClick}>
        <p className={`signin ${isSignin ? ' gone' : ''}`}>SIGN IN</p>
        <p className={`signup ${isSignin ? ' come' : ''}`}>SIGN UP</p>
      </button>
    </div>
  );
}

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
