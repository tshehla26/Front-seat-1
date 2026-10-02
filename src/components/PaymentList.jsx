import PaymentCard from "./PaymentCard";

function PaymentList({ payments, markChangeGiven }) {
  return (
    <section className="mb-4">
      <h2 className="section-title">Payments</h2>

      {payments.length === 0 ? (
        <div className="empty-state">
          <p>No payments have been added yet.</p>
        </div>
      ) : (
        <div className="payment-list">
          {payments.map((payment) => (
            <PaymentCard
              key={payment.id}
              payment={payment}
              markChangeGiven={markChangeGiven}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default PaymentList;

