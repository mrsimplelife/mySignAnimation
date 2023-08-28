import useSignAnimation from '../../hook/useSignAnimation';
import SignFrom from '../SignForm';
import SignPage from '../SignPage';
import './style.css';

function SignCard() {
  const { isSignin, isSigninForm, handleButton, signformAnimation, backgroundAnimation, signinAnimation, signupAnimation, handleActive, isActive } =
    useSignAnimation();

  return (
    <div className='card'>
      <div className={signformAnimation}>{isSignin ? <SignFrom isSignin={isSigninForm} /> : <SignFrom isSignin={isSigninForm} />}</div>
      <div className={backgroundAnimation}>
        <SignPage
          title='Welcome Back !'
          description='To keep connected with us please login with your personal info'
          button='SIGN IN'
          onClick={handleButton}
          mock
          isSignin={isSignin}
          handleActive={handleActive}
          isActive={isActive}
        />
      </div>
      <div className={signinAnimation}>
        <SignPage
          title='Welcome Back !'
          description='To keep connected with us please login with your personal info'
          button='SIGN IN'
          onClick={handleButton}
          handleActive={handleActive}
          isActive={isActive}
        />
      </div>
      <div className={signupAnimation}>
        <SignPage
          title='Hello, Friend !'
          description='Enter your personal details and start your journey with us'
          button='SIGN UP'
          onClick={handleButton}
          handleActive={handleActive}
          isActive={isActive}
        />
      </div>
    </div>
  );
}

export default SignCard;
