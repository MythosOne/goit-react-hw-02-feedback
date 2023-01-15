import { Component, Fragment } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
// import { Fragment, Section, FeedbackOptions, Notification, Statistics } from './App.Styled';
export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onleaveFeedback = event => {
        const name = event.target.name;
        this.setState(prevState => ({
            [name]: prevState[name] + 1
        }));
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return total === 0 ? '0' : Math.round((good / total) * 100);
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePerc = this.countPositiveFeedbackPercentage();
        const objKey = Object.keys(this.state);
        
        return (
          <Fragment>
                <Section title="Please leave feedback">
                <FeedbackOptions options={objKey} onLeaveFeedback={this.onleaveFeedback}/>
                </Section>
                {total === 0 ? 
                    (<Notification message="There is no feedback" />) :
                (<Section title="Statistics">
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total} positivePercentage={positivePerc}/>
                </Section>)}
            </Fragment>
        );
    };
};

export default App
