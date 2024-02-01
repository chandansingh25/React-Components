

const Square = ({ value, onSquareClick }) => {
 



  return (
    <>
      <div
        role="button"
        onClick={onSquareClick}
        className="border border-dark d-inline-flex justify-content-center align-items-center"
        style={{ width: "45px", height: "40px" }}
      >
        {value}
      </div>
    </>
  );
};

export default Square;
