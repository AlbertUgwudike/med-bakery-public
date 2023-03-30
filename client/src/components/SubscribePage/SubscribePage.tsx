import { Route, Switch } from "react-router-dom";
import Navigator from "../Navigator";
import Checkout from "./Checkout";
import PaymentAfterMath from "./PaymentAfterMath";

const SubscribePage = () => {
    return (
        <div>
            <Navigator selection="Checkout" />

            <Switch>
                <Route path="/Subscribe/Checkout">
                    <Checkout />
                </Route>

                <Route path="/Subscribe/PaymentCanceled">
                    <PaymentAfterMath message="Payment was unsuccessful" />
                </Route>

                <Route path="/Subscribe/PaymentSuccess">
                    <PaymentAfterMath message="Payment was successful" />
                </Route>
            </Switch>
        </div>
    );
};

export default SubscribePage;
