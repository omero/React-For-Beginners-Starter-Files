import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }
  myInput = React.createRef();
  goToStore = event => {
    // Stop from submitting
    event.preventDefault();
    // get the text fromt that input
    const storeName = this.myInput.value.value;
    // change the page
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Plese enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
