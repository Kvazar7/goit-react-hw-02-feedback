import React, { Component } from 'react';
import FeedbackCounter from './Button/feedbackbuttons';
import Statistics from './Statistics/statistics';
import Section from './Section/section';
import Notification from './Notification/notification';

export class App extends Component {

state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

onFeedbackAccept = option => {
  this.setState(prevState => ({
    [option]: prevState[option] + 1,
  }));
  console.log("Feedback accepted");
}

totalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

countPositiveFeedbackPercentage = () => Math.round(this.state.good / this.totalFeedback() * 100) || 0;
  
  
  render() {

    return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackCounter
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onFeedbackAccept}
        />
      </Section>
      <Section title="Statistics">
        {this.totalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (  
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.totalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
        )}
      </Section>       
    </>
    );
  };
}