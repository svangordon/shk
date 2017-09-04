import React from 'react';
import { Card, Container, Icon, Image, Segment } from 'semantic-ui-react';

const Overview = (props) => (
  <Container>
    <Image size={'big'} src={props.image}/>
    <Container>
      <p>{props.text}</p>
    </Container>
  </Container>
);

export default Overview
