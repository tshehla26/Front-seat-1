function PaymentCard({ payment, markChangeGiven }) {
  return (
    <div className="card app-card mb-3">
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="payment-title">
            {payment.passengers} passenger
            {payment.passengers !== 1 ? "s" : ""}
          </h3>

          {payment.changeGiven ? (
            <span className="badge text-bg-success">
              Complete
            </span>
          ) : (
            <span className="badge text-bg-warning">
              Change Owed
            </span>
          )}
        </div>

        <div className="payment-details">

          <div>
            <span>Paid</span>
            <strong>R{payment.amountPaid}</strong>
          </div>

          <div>
            <span>Fare</span>
            <strong>R{payment.fareRequired}</strong>
          </div>

          <div>
            <span>Change</span>
            <strong>R{payment.change}</strong>
          </div>

        </div>

        {payment.change > 0 && !payment.changeGiven && (
          <button
            className="btn btn-success w-100 mt-3"
            onClick={() => markChangeGiven(payment.id)}
          >
            Change Given
          </button>
        )}

      </div>
    </div>
  );
}

export default PaymentCard;

