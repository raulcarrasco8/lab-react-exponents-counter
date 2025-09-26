



const ExponentFive = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">
      {count} * {count} * {count} * {count} * {count} = <span className="total">{count ** 5}</span>
    </p>
  </div>
);

export default ExponentFive;