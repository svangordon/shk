import React from 'react';
import { Card, Container, Icon, Image, Segment } from 'semantic-ui-react';

const Overview = (props) => (
  <Segment>
    <Image src={props.image}/>
    <Container>
      <p>{props.text}</p>
    </Container>
  </Segment>
);

export default Overview
