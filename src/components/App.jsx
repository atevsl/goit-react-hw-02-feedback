import React from 'react';
// import Section from './Section';
// import Statistics from './Statistics';
// import FeedbackOptions from './FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onHendlerClick = e => {
    console.log('клік');
    console.log(e.target.innerHTML);
    switch (e.target.innerHTML) {
      case 'good':
        return this.setState(prevstate => ({ good: prevstate.good + 1 }));
      case 'neutral':
        return this.setState(prevstate => ({ neutral: prevstate.neutral + 1 }));
      case 'bad':
        return this.setState(prevstate => ({ bad: prevstate.bad + 1 }));
      default:
        return this.state;
    }
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return (this.state.good * 100) / this.countTotalFeedback();
  }
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <section>
          <h2>-Please leave feedback-</h2>

          <button type="button" onClick={this.onHendlerClick}>
            good
          </button>
          <button type="button" onClick={this.onHendlerClick}>
            neutral
          </button>
          <button type="button" onClick={this.onHendlerClick}>
            bad
          </button>
        </section>

        <section>
          <h2>-Статистика-</h2>

          <p>good: {this.state.good}</p>
          <p>neutral: {this.state.neutral}</p>
          <p>bad:{this.state.bad} </p>
          <p>total:{this.countTotalFeedback()} </p>
          <p>total:{this.countPositiveFeedbackPercentage().toFixed(0)}% </p>
        </section>
      </div>
    );
  }
}
export default App;
