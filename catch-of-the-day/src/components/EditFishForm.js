import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    // update that fish
    // take copy of current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh !</option>
          <option value="unavailable">Sold Out !</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.text}
          name="image"
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          {" "}
          Remove fish{" "}
        </button>
      </div>
    );
  }
}

export default EditFishForm;
