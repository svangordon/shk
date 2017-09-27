import React, { Component } from 'react';
import { Card, Container, Icon, Image, Segment } from 'semantic-ui-react';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [], // user answers
      activeQuestion: 0
    };

  }

  handleAnswer = (e, questionId, answerId) => {
    const answers = this.state.answers.slice();
    console.log(e, questionId, answerId);
    answers[questionId] = answerId;
    return this.setState({ answers })
  };

  determineColor(questionId, answerId) {
    if (this.state.answers[questionId] !== answerId) {
      return null;
    }
    return this.props.questions[questionId].correctAnswer === answerId ? 'green' : 'red';
  }

  render() {

    return (
      <Container>
        <Container children={this.props.overviewText} />
        <p>``</p>
        <Segment>
          <p>{this.props.questions[this.state.activeQuestion].questionText}</p>
          <Segment.Group>
            {this.props.questions[this.state.activeQuestion].answers.map((answer, i) => (
              <Segment
                key={i}
                children={answer.text}
                color={this.determineColor(this.state.activeQuestion, i)}
                onClick={this.handleAnswer.bind(this, this.state.activeQuestion, i)}
              />
            ))}
          </Segment.Group>
        </Segment>
      </Container>
    );
  }
}
// export default Quiz
