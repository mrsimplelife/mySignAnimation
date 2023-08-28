import './style.css';

type SignPageProps = {
  title: string;
  description: string;
  button: string;
  onClick: () => void;
  mock?: boolean;
  isSignin?: boolean;
  handleActive: (active: boolean) => void;
  isActive: boolean;
};

function SignPage({ title, description, onClick, mock, isSignin, handleActive, isActive }: SignPageProps) {
  return (
    <div className='sign-page'>
      <h1 className={`${mock ? 'opacity' : ''}`}>{title}</h1>
      <p className={`${mock ? 'opacity' : ''}`}>{description}</p>
      <button
        className={`${mock ? '' : 'opacity'} ${isActive ? ' active' : ''}`}
        onClick={onClick}
        onMouseDown={() => handleActive(true)}
        onMouseUp={() => handleActive(false)}
        onMouseLeave={() => handleActive(false)}
      >
        <p className={`signin ${isSignin ? ' gone' : ''}`}>SIGN IN</p>
        <p className={`signup ${isSignin ? ' come' : ''}`}>SIGN UP</p>
      </button>
    </div>
  );
}

export default SignPage;
