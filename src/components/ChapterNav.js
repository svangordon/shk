import React, { Component } from 'react'
import { Icon, Input, Label, Menu, Segment } from 'semantic-ui-react'

export default class ChapterNav extends Component {
  constructor(props) {
    super(props);
    this.state = { activeModule: 0 }
    console.log('nav props', this.props);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const iconLookup = {
      slideshow: 'image',
      video: 'film',
      summary: 'flag checkered',
      overview: 'info',
      quiz: 'question',
      socialMediaPost: '',
      commentary: '',
    };

    return (
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
                <Icon fitted name={iconLookup[module]} />
                {module}
              </Menu.Item>
            ))
          }
        </Menu>

    )
  }
}
