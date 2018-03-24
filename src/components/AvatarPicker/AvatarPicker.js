import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal/Modal";
import Avatar from "./Avatar/Avatar";
import AvatarList from "./AvatarList/AvatarList";
import networkReq from "../../shared/networkReq";
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
    return (
      <div className={styles.AvatarPickerWrapper}>
        <div className={styles.ActiveAvatarWrapper}>
          <Avatar
            avatar={this.state.activeAvatar}
            onClickAvatar={this.onClickActiveAvatar}
            isActive={true}
            highlight={false}
            showSpinner={false}
          />
        </div>
        <div className={styles.ModalWrapper}>
          <Modal show={this.state.showModal} hide={this.onCloseModal}>
            <p className={styles.TitleText}>Choose your avatar</p>
            <AvatarList
              avatars={this.props.avatars}
              onClickAvatar={this.onClickListAvatar}
              isActive={false}
              highlight={this.highlight}
              showSpinner={this.showSpinner}
            />
          </Modal>
        </div>
      </div>
    );
  }
}

export default AvatarPicker;
