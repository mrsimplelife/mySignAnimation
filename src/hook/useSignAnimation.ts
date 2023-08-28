import { useCallback, useEffect, useState } from 'react';

function useSignAnimation() {
  const [isSignin, setIsSignin] = useState<boolean>();
  const [isSigninForm, setIsSigninFrom] = useState<boolean>();

  const handleButton = useCallback(() => {
    setIsSignin((prev) => !prev);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsSigninFrom(isSignin);
    }, 250);
  }, [isSignin]);

  const signformAnimation = `sign-form-transition${isSignin === undefined ? '' : isSignin ? ' signin' : ' signup'}`;

  const backgroundAnimation = `background-transition${isSignin === undefined ? '' : isSignin ? ' signin' : ' signup'}`;

  const signinAnimation = `signin-animation${isSignin === undefined ? '' : isSignin ? ' signin' : ' signup'}`;

  const signupAnimation = `signup-animation${isSignin === undefined ? '' : isSignin ? ' signin' : ' signup'}`;

  return { isSignin, isSigninForm, handleButton, signformAnimation, backgroundAnimation, signinAnimation, signupAnimation };
}

export default useSignAnimation;
