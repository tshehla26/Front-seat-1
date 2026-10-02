function OutstandingChange({ payments, markChangeGiven }) {
  const outstandingPayments = payments.filter(
    (payment) => payment.change > 0 && !payment.changeGiven
  );

  const totalChange = outstandingPayments.reduce(
    (total, payment) => total + payment.change,
    0
  );

  return (
    <section className="card app-card mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="section-title mb-0">
            Outstanding Change
          </h2>

          <strong className="change-total">
            R{totalChange}
          </strong>
        </div>

        {outstandingPayments.length === 0 ? (
          <p className="text-muted mt-3 mb-0">
            No change is currently outstanding.
          </p>
        ) : (
          <div className="mt-3">
            {outstandingPayments.map((payment) => (
              <div
                key={payment.id}
                className="change-row"
              >
                <span>
                  {payment.passengers} passenger
                  {payment.passengers !== 1 ? "s" : ""}
                </span>

                <div>
                  <strong className="me-3">
                    R{payment.change}
                  </strong>

                  <button
                    className="btn btn-sm btn-outline-success"
                    onClick={() => markChangeGiven(payment.id)}
                  >
                    Given
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default OutstandingChange;
