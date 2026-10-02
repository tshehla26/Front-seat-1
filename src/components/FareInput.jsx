function FareInput({ fare, setFare }) {
  const handleFareChange = (event) => {
    setFare(Number(event.target.value));
  };

  return (
    <section className="card app-card mb-4">
      <div className="card-body">
        <h2 className="section-title">Taxi Fare</h2>

        <label htmlFor="fare" className="form-label">
          Fare per passenger
        </label>

        <div className="input-group">
          <span className="input-group-text">R</span>

          <input
            id="fare"
            type="number"
            min="0"
            value={fare}
            onChange={handleFareChange}
            className="form-control"
          />
        </div>
      </div>
    </section>
  );
}

export default FareInput;

