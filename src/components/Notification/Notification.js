import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string,
  };

  static defaultProps = {
    message: 'Where is your message?',
  };

  render() {
    return (
      <>
        <h3 className={styles.Notification}>{this.props.message}</h3>
      </>
    );
  }
}

export default Notification;
