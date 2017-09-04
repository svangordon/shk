import React, { Component } from 'react';
import { Card, Icon, Image, Segment } from 'semantic-ui-react';

import Overview from './Overview';

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
        console.log("bang", module.image)
        return <Overview image={module.image} text={module.text} />
        break;
      default:
        return null;
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <Segment basic floated={"left"}>
        {this.renderModule(this.props)}
      </Segment>
    )
  }
}

export default Module
