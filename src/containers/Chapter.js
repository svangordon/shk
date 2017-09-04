import React from 'react';
import {
  Card,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from 'semantic-ui-react';
import axios from 'axios';

import ChapterNav from '../components/ChapterNav';

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

  render() {
    if (!this.state.chapter) {
      return null;
    }
    return (
      <div>
        <ChapterNav />
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>{`Chapter ${this.state.chapter.chapterNumber}: ${this.state.chapter.titleText}`}</Header>
          <p>this is a chapter component! Maybe it works idk lol</p>
          <p>A text container is used for the main container, which is useful for single column layouts.</p>


          {!this.state.chapters ? null :
            <Card.Group>
              {this.state.chapters.map((chapter, i) => (
                <Card key={i}>
                  <Card.Content>
                    <Card.Header>
                      {`Chapter ${chapter.chapterNumber}: ${chapter.titleText}`}
                    </Card.Header>
                    <Image src={chapter.chapterImage} />
                    <Card.Description>
                      {chapter.subtitleText}
                    </Card.Description>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          }
        </Container>
      </div>
    );
  }
}

export default Chapter;
