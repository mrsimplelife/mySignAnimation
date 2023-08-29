import './style.css';

type SignPageProps = {
  backgroundButtonAnimation: string;
  backgroundButtonSignin: string;
  backgroundButtonSignup: string;
};

function SignPageBackground({ backgroundButtonAnimation, backgroundButtonSignin, backgroundButtonSignup }: SignPageProps) {
  return (
    <div className='sign-page-background'>
      <h1 className='opacity'>Welcome Back !</h1>
      <p className='opacity'>To keep connected with us please login with your personal info</p>
      <button className={backgroundButtonAnimation}>
        <p className={backgroundButtonSignin}>SIGN IN</p>
        <p className={backgroundButtonSignup}>SIGN UP</p>
      </button>
    </div>
  );
}

export default SignPageBackground;
