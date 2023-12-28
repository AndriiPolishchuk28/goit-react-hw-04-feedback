import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notifications } from './Notifications/Notifications';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackButtons = { good, neutral, bad };

  const countTotalFeedback = () => {
    return Object.values(feedbackButtons).reduce((acc, feedback) => {
      return acc + feedback;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(2);
  };

  const handleClick = e => {
    const value = e.target.name;
    switch (value) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const buttons = Object.keys(feedbackButtons);

  return (
    <div style={{ marginLeft: '20px' }}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={buttons} onLeaveFeedback={handleClick} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedbacks={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notifications message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
