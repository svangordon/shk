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
    };
  }

  render() {
    return (
      <div>
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Semantic UI React Fixed Template</Header>
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

        <Segment
          inverted
          vertical
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
        >
          <Container textAlign='center'>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Group 1' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Group 2' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Group 3' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Footer Header' />
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Divider inverted section />
            <Image
              centered
              size='mini'
              src='/logo.png'
            />
            <List horizontal inverted divided link>
              <List.Item as='a' href='#'>Site Map</List.Item>
              <List.Item as='a' href='#'>Contact Us</List.Item>
              <List.Item as='a' href='#'>Terms and Conditions</List.Item>
              <List.Item as='a' href='#'>Privacy Policy</List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Chapter;
