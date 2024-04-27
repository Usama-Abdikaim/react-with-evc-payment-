import { useState } from "react";

const Payment = () => {

    const initialPayment = {
        evc : false,
        zaad : false,
        sahal : false,
    };

    const [paymentMethod, setPaymentMethod] = useState(initialPayment);

    return (
        <div>
            <h2>Pay With</h2>
            <div className="payment-cards">
                <div className={ `payment-card ${paymentMethod.zaad && "selected"}`}
                onClick={() => setPaymentMethod({ ...initialPayment, zaad: true })}>
                    <h3>Zaad Service</h3>
                </div>
            </div>
            
            <div className="payment-cards">
                <div className={ `payment-card ${paymentMethod.evc && "selected"}`} 
                onClick={() => setPaymentMethod({ ...initialPayment, evc: true })}>
                    <h3>Evc plus</h3>
                </div>
            </div>

            <div className="payment-cards">
                <div className={ `payment-card ${paymentMethod.sahal && "selected"}`}
                onClick={() => setPaymentMethod({ ...initialPayment, sahal: true })}>
                    <h3>Sahal</h3>
                </div>
            </div>

            <form>
                <input type="text" className="form-control" placeholder="2526..." />
                <button className="btn-proceed">Proceed</button>
            </form>
            
        </div>
    )
};

export default Payment;