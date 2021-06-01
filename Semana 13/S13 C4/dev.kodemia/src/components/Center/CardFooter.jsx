import React from "react";

class CardFooter extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="text-muted d-flex justify-content-between align-items-center">
        <div className="social d-inline w-50">
          <img
            className={this.props.iconClass}
            src="https://image.flaticon.com/icons/png/512/1077/1077035.png"
            alt="heart"
          />
          <span>{this.props.likes} reactions</span>
          <img
            className={this.props.iconClass}
            src="https://image.flaticon.com/icons/png/512/937/937819.png"
            alt="comments"
          />
          <span>{this.props.comments} comments</span>
        </div>
        <div className="save d-inline">
          <span className={this.props.timeClass}>
            {this.props.time} min read
          </span>
          <button type="button" className={`${this.props.saveClass} btn mx-3`}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default CardFooter;
