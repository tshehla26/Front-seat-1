function DriverSummary({ payments }) {
  const totalPassengers = payments.reduce(
    (total, payment) => total + payment.passengers,
    0
  );

  const totalCollected = payments.reduce(
    (total, payment) => total + payment.amountPaid,
    0
  );

  const totalFare = payments.reduce(
    (total, payment) => total + payment.fareRequired,
    0
  );

  const totalChange = payments.reduce(
    (total, payment) => total + payment.change,
    0
  );

  const driverAmount = totalCollected - totalChange;

  return (
    <section className="card app-card summary-card mb-4">
      <div className="card-body">
        <h2 className="section-title">
          Driver Summary
        </h2>

        <div className="summary-grid">
          <div className="summary-item">
            <span>Passengers</span>
            <strong>{totalPassengers}</strong>
          </div>

          <div className="summary-item">
            <span>Collected</span>
            <strong>R{totalCollected}</strong>
          </div>

          <div className="summary-item">
            <span>Fare Required</span>
            <strong>R{totalFare}</strong>
          </div>

          <div className="summary-item">
            <span>Change Owed</span>
            <strong>R{totalChange}</strong>
          </div>
        </div>

        <div className="driver-total">
          <span>Driver Should Receive</span>
          <strong>R{driverAmount}</strong>
        </div>
      </div>
    </section>
  );
}

export default DriverSummary;
