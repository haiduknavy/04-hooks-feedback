import { useState } from "react";
import Statistics from "../Components/Statistics/Statistics";
import Section from "../Components/Section/Section";
import FeedbackOptions from "../Components/FeedbackOptions/FeedbackOptions";
import Notification from "../Components/Notification/Notification";
import { Wrapper } from "./App.styled";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnClick = (options) => {
    switch (options) {
      case "good":
        setGood((good) => good + 1);
        break;
      case "neutral":
        setNeutral((neutral) => neutral + 1);
        break;
      case "bad":
        setBad((bad) => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () =>
    [good, neutral, bad].reduce((acc, value) => acc + value);

  function countPositiveFeedbackPercentage() {
    const percentage = Math.round((good / total) * 100);

    if (!percentage) return 0;
    return percentage;
  }

  const options = ["good", "neutral", "bad"];
  const total = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} clickGood={btnClick} />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percent}
          />
        </Section>
      ) : (
        <Notification message={"There is no feedback"} />
      )}
    </Wrapper>
  );
}
