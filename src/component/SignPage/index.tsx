import './style.css';

type SignPageProps = {
  title: string;
  description: string;
  onChangePageButtonClick: () => void;
  onChangePageButtonMouseDown: () => void;
  onChangePageButtonMouseUp: () => void;
  onChangePageButtonMouseLeave: () => void;
};

function SignPage({
  title,
  description,
  onChangePageButtonClick,
  onChangePageButtonMouseDown,
  onChangePageButtonMouseLeave,
  onChangePageButtonMouseUp,
}: SignPageProps) {
  return (
    <div className='sign-page'>
      <h1>{title}</h1>
      <p>{description}</p>
      <button
        className='opacity'
        onClick={onChangePageButtonClick}
        onMouseDown={onChangePageButtonMouseDown}
        onMouseUp={onChangePageButtonMouseUp}
        onMouseLeave={onChangePageButtonMouseLeave}
      >
        SIGN IN
      </button>
    </div>
  );
}

export default SignPage;
