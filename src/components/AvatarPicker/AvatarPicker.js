import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./AvatarPicker.css";

class AvatarPicker extends Component {
  static propTypes = {
    avatars: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  state = {
    activeAvatar: this.props.avatars[0],
    showModal: false,
    isUpdatingAvatar: false,
    updatingAvatarID: -1
  };

  render() {
    return <div>Hello world! </div>;
  }
}

export default AvatarPicker;
