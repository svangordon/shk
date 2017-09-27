import React, { Component } from 'react';
import { Card, Icon, Image, Segment } from 'semantic-ui-react';

import Overview from './Overview';
import Quiz from './Quiz';

export class Module extends Component {
  constructor(props) {
    super(props);
    this.state = { activeModule: 0 }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderModule(module) {
    console.log("module in rendermod", module)
    switch (module.type) {
      case 'overview':
        // console.log("bang", module.image)
        return <Overview image={module.image} text={module.text} />
        break;
      case 'quiz':
        return <Quiz overview={module.overviewText} questions={module.questions} />
        break;
      default:
        return null;
    }
  }

  render() {
    const { activeItem } = this.state
    // const renderedModule = renderModule(this.props);
    return this.renderModule(this.props);
  }
}

export default Module
