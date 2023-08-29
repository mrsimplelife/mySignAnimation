import { useCallback, useEffect, useState } from 'react';

function useSignAnimation() {
  const [isSigninPage, setIsSigninPage] = useState<boolean>();
  const [isSigninForm, setIsSigninFrom] = useState<boolean>();
  const [isButtonActive, setIsButtonActive] = useState(false);

  const updateIsButtonActive = useCallback((active: boolean) => {
    setIsButtonActive(active);
  }, []);

  const toggleIsSigninPage = useCallback(() => {
    setIsSigninPage((prev) => !prev);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsSigninFrom(isSigninPage), 250);
  }, [isSigninPage]);

  const signformAnimation = `sign-form-transition${isSigninPage === undefined ? '' : isSigninPage ? ' signin' : ' signup'}`;

  const backgroundAnimation = `background-animation${isSigninPage === undefined ? '' : isSigninPage ? ' signin' : ' signup'}`;

  const backgroundButtonAnimation = `${isButtonActive ? 'active' : ''}`;

  const backgroundButtonSignin = `signin${isSigninPage ? ' gone' : ''}`;

  const backgroundButtonSignup = `signup${isSigninPage ? ' come' : ''}`;

  const signinAnimation = `signin-animation${isSigninPage === undefined ? '' : isSigninPage ? ' signin' : ' signup'}`;

  const signupAnimation = `signup-animation${isSigninPage === undefined ? '' : isSigninPage ? ' signin' : ' signup'}`;

  return {
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
  };
}

export default useSignAnimation;
