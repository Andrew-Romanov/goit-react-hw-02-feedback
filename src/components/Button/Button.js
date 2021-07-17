import { Component } from 'react';
import styles from './Button.module.scss';

class Button extends Component {
  render() {
    return (
      <button
        className={styles.Button}
        type={this.props.type}
        style={{ width: this.props.width }}
        onClick={() => this.props.whenClicked(this.props.feedbackName)}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
