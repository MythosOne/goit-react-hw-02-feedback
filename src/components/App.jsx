import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import { Container } from './App.Styled.js';
export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onleaveFeedback = option => {
        this.setState(prevState => ({
            [option]: prevState[option] + 1
        }));
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return Math.round((good / total) * 100);
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePerc = this.countPositiveFeedbackPercentage();

        return (
            <Container>
                <Section title="Please leave feedback">
                <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onleaveFeedback}/>
                </Section>
                {!total ? 
                    (<Notification message="There is no feedback" />) :
                (<Section title="Statistics">
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total} positivePercentage={positivePerc}/>
                </Section>)}
            </Container>
        );
    };
};

export default App