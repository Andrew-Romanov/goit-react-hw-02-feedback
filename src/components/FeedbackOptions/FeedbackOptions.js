import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './FeedbackOptions.module.scss';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <ul className={styles.FeedbackOptions__ButtonList}>
          {this.props.options.map(feedbackName => {
            return (
              <li key={feedbackName}>
                <Button
                  type="button"
                  label={feedbackName}
                  width="80px"
                  whenClicked={this.props.onLeaveFeedback}
                />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default FeedbackOptions;
