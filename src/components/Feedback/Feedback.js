import { Component } from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';
import randomColor from '../../utils/random-color';
import styles from './Feedback.module.scss';

class Feedback extends Component {
  state = {
    good: 450,
    neutral: 25,
    bad: 12,
  };

  changeFeedback = feedbackName => {
    this.setState({ [feedbackName]: this.state[feedbackName] + 1 });
  };

  render() {
    return (
      <section className={styles.Feedback}>
        <h2 className={styles.Feedback__Title}>Please Leave Feedback</h2>

        <ul className={styles.Feedback__ButtonList}>
          {Object.keys(this.state).map(feedbackName => {
            return (
              <li key={feedbackName}>
                <Button
                  feedbackName={feedbackName}
                  type="button"
                  label={feedbackName}
                  width="80px"
                  whenClicked={this.changeFeedback}
                />
              </li>
            );
          })}
        </ul>

        <h2 className={styles.Feedback__Title}>Feedback Statistics</h2>

        <ul className={styles.Feedback__StatsList}>
          {Object.entries(this.state).map(feedback => {
            return (
              <li
                key={feedback[0]}
                className={styles.Feedback__StatsListItem}
                style={{ backgroundColor: randomColor() }}
              >
                <span className={styles.Feedback__StatsListItemLabel}>
                  {feedback[0]}
                </span>
                <span className={styles.Feedback__StatsListItemPercentage}>
                  {feedback[1]}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

Feedback.propTypes = {
  // title: PropTypes.string,
  // stats: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     label: PropTypes.string.isRequired,
  //     percentage: PropTypes.number.isRequired,
  //   }),
  // ).isRequired,
};

Feedback.defaultProps = {
  // title: '',
};

export default Feedback;
