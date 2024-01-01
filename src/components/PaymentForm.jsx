import React from "react";
import FormWrapper from "./FormWrapper";
import CreditCardForm from "./CreditCardForm";
import { loginusername } from "./Login";

function PaymentForm() {
    return (
        <div className="creditcardcontainer">
            <div className="creditcardform">
                <FormWrapper>
                    <CreditCardForm />
                </FormWrapper>
            </div>
        </div>
    );
}

export default PaymentForm;