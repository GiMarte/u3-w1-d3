import { Component } from "react";

class SingleBook extends Component {
  render() {
    return (
      <div className="single-book text-center">
        <h2>{this.props.book.title}</h2>
        <img
          src={this.props.book.img}
          alt={this.props.book.title}
          height={200}
          width={100}
        />
        <p></p>
      </div>
    );
  }
}

export default SingleBook;
