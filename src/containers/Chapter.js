import React from 'react';
import {
  Button,
  Card,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  Icon,
  List,
  Menu,
  Segment
} from 'semantic-ui-react';
import axios from 'axios';

import ChapterNav from '../components/ChapterNav';
import Module from '../components/Module.js';

export class Chapter extends React.PureComponent {
  constructor(props) {
    super(props);
    let chapterNumber = props.location.pathname.split('/').slice(-1)[0];
    axios.get('/fakeData.json')
      .then((resp) => {
        console.log("chapter data: ", resp.data.chapters[chapterNumber - 1])
        this.setState({
          chapter: resp.data.chapters[chapterNumber - 1],
        });
      })
      .catch((error) => {
        console.log(error);
      });
    this.state = {
      chapter: null,
      activeModule: 0
    };
  }

  handleModuleClick = (e, module) => {this.setState({activeModule: module.index})}

  handleMoveModule = (step) => (e) => {this.setState({activeModule: this.state.activeModule + step})}

  render() {
    if (!this.state.chapter) {
      return null;
    }
    return (
      <div>
        <ChapterNav
          activeModule={this.state.activeModule}
          handleModuleClick={this.handleModuleClick}
          modules={this.state.chapter.modules.map(module => module.type)}
        />
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>{`Chapter ${this.state.chapter.chapterNumber}: ${this.state.chapter.titleText}`}</Header>
          <Module
            {...this.state.chapter.modules[this.state.activeModule]}
          />
          <Button
            floated={'left'}
            disabled={this.state.activeModule === 0}
            onClick={this.handleMoveModule(-1)}
          >
            <Icon name='chevron left' />
          </Button>
          <Button
            floated={'right'}
            disabled={this.state.activeModule === this.state.chapter.modules.length - 1}
            onClick={this.handleMoveModule(1)}
          >
            <Icon name='chevron right' />
          </Button>
        </Container>
      </div>
    );
  }
}

export default Chapter;
