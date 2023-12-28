import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notifications } from './Notifications/Notifications';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, feedback) => {
      return acc + feedback;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return ((good / this.countTotalFeedback()) * 100).toFixed(2);
  };

  handleClick = e => {
    const value = e.target.name;
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const buttons = Object.keys(this.state);

    return (
      <div style={{ marginLeft: '20px' }}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttons}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedbacks={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notifications message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
