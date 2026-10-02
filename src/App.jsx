import { useState } from "react";
import Header from "./components/Header";
import FareInput from "./components/FareInput";
import PaymentForm from "./components/PaymentForm";
import PaymentList from "./components/PaymentList";
import OutstandingChange from "./components/OutstandingChange";
import DriverSummary from "./components/DriverSummary";
import "./App.css";

function App() {
  const [fare, setFare] = useState(20);
  const [payments, setPayments] = useState([]);

  const addPayment = (amountPaid, passengers) => {
    const fareRequired = fare * passengers;
    const change = amountPaid - fareRequired;

    const newPayment = {
      id: Date.now(),
      amountPaid,
      passengers,
      fareRequired,
      change,
      changeGiven: false,
    };

    setPayments([...payments, newPayment]);
  };

  const markChangeGiven = (id) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id
          ? { ...payment, changeGiven: true }
          : payment
      )
    );
  };

  return (
    <div className="app">
      <Header />

      <main className="container py-4">
        <FareInput fare={fare} setFare={setFare} />

        <PaymentForm fare={fare} addPayment={addPayment} />

        <DriverSummary payments={payments} />

        <OutstandingChange
          payments={payments}
          markChangeGiven={markChangeGiven}
        />

        <PaymentList
          payments={payments}
          markChangeGiven={markChangeGiven}
        />
      </main>
    </div>
  );
}

export default App;

