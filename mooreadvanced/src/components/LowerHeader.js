const LowerHeader = ({ textOne = null, textTwo = null }) => {
  return (
    <header className='header container mb-section'>
      <img
        src='../assets/logo/Moore Advanced Solutions (Gold).svg'
        alt='watermark'
      />
      <div class='header-text'>
        {textOne && <p>{textOne}</p>}
        <p>{textTwo}</p>
      </div>
    </header>
  );
};

export default LowerHeader;
