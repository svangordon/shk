import React, { Component } from 'react'
import { Input, Label, Menu, Segment } from 'semantic-ui-react'

export default class ChapterNav extends Component {
  constructor(props) {
    super(props);
    this.state = { activeModule: 0 }
    console.log('nav props', this.props);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment basic floated={"left"}>
        <Menu
          floated
          vertical
        >
          {
            this.props.modules.map((module, i) => (
              <Menu.Item
                key={i}
                active={this.props.activeModule === i}
                index={i}
                name={module}
                onClick={this.props.handleModuleClick}
              >
                <Label color='teal'>1</Label>
                {module}
              </Menu.Item>
            ))
          }
        </Menu>
      </Segment>
    )
  }
}
