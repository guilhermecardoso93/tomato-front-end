import "./styles.css";

export const PlaceOrder = () => {
  return (
    <div>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery information</p>
          <div className="multi-field">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Address" />
          <div className="multi-field">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="place-order-right"></div>
      </form>
    </div>
  );
};
