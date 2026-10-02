import { useState } from "react";

function PaymentForm({ fare, addPayment }) {
  const [amountPaid, setAmountPaid] = useState("");
  const [passengers, setPassengers] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const amount = Number(amountPaid);
    const passengerCount = Number(passengers);

    if (amount <= 0 || passengerCount <= 0) {
      setError("Please enter valid payment and passenger numbers.");
      return;
    }

    const fareRequired = fare * passengerCount;

    if (amount < fareRequired) {
      setError(
        `This payment is R${fareRequired - amount} short of the required fare.`
      );
      return;
    }

    addPayment(amount, passengerCount);

    setAmountPaid("");
    setPassengers("");
    setError("");
  };

  return (
    <section className="card app-card mb-4">
      <div className="card-body">
        <h2 className="section-title">Add Payment</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount Paid
            </label>

            <div className="input-group">
              <span className="input-group-text">R</span>

              <input
                id="amount"
                type="number"
                min="0"
                value={amountPaid}
                onChange={(event) => setAmountPaid(event.target.value)}
                className="form-control"
                placeholder="100"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="passengers" className="form-label">
              Number of Passengers
            </label>

            <input
              id="passengers"
              type="number"
              min="1"
              value={passengers}
              onChange={(event) => setPassengers(event.target.value)}
              className="form-control"
              placeholder="3"
            />
          </div>

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100">
            Add Payment
          </button>
        </form>
      </div>
    </section>
  );
}

export default PaymentForm;

