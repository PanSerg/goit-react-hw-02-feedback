import React, { Component } from 'react';
import { Statistics } from './Statistics/statistics';
import { ReviewOptions } from './Buttons/buttonReview';
import { Notification } from './Notification/notification';
import { Block } from './Block/blocks';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleIncrement = evt => {
    const handleIncr = evt.target.textContent.toLowerCase();
    this.setState(prevState => ({ [handleIncr]: prevState[handleIncr] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };
  
  render() {
     const keys = Object.keys(this.state);
    return (
      <>
        <Block title={'Please leave a feedback about our cafe'}>
          <ReviewOptions onLeaveReview={this.handleIncrement}
            options={keys}
          />
        </Block>

        <Block title={'Sections'}>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Block>
      </>
    );
  }; 
};
