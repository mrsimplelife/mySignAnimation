import useSignAnimation from '../../hook/useSignAnimation';
import SignFrom from '../SignForm';
import SignPage from '../SignPage';
import SignPageBackground from '../SignPageBackground';
import './style.css';

function SignCard() {
  const {
    isSigninPage,
    toggleIsSigninPage,
    isSigninForm,
    updateIsButtonActive,
    signformAnimation,
    backgroundAnimation,
    signinAnimation,
    signupAnimation,
    backgroundButtonAnimation,
    backgroundButtonSignin,
    backgroundButtonSignup,
  } = useSignAnimation();

  return (
    <div className='card'>
      <div className={signformAnimation}>{isSigninPage ? <SignFrom isSignin={isSigninForm} /> : <SignFrom isSignin={isSigninForm} />}</div>
      <div className={backgroundAnimation}>
        <SignPageBackground
          backgroundButtonAnimation={backgroundButtonAnimation}
          backgroundButtonSignin={backgroundButtonSignin}
          backgroundButtonSignup={backgroundButtonSignup}
        />
      </div>
      <div className={signinAnimation}>
        <SignPage
          title='Welcome Back !'
          description='To keep connected with us please login with your personal info'
          onChangePageButtonClick={toggleIsSigninPage}
          onChangePageButtonMouseDown={() => updateIsButtonActive(true)}
          onChangePageButtonMouseUp={() => updateIsButtonActive(false)}
          onChangePageButtonMouseLeave={() => updateIsButtonActive(false)}
        />
      </div>
      <div className={signupAnimation}>
        <SignPage
          title='Hello, Friend !'
          description='Enter your personal details and start your journey with us'
          onChangePageButtonClick={toggleIsSigninPage}
          onChangePageButtonMouseDown={() => updateIsButtonActive(true)}
          onChangePageButtonMouseUp={() => updateIsButtonActive(false)}
          onChangePageButtonMouseLeave={() => updateIsButtonActive(false)}
        />
      </div>
    </div>
  );
}

export default SignCard;
