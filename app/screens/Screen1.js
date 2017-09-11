
import React, { Component } from 'react';
import { Image } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  handlePress = () => {
    this.props.navigator.push({
      screen: 'Screen3',
      title: 'Screen 3',
    });
  };

  render() {
    const photo = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <Container backgroundColor="#F44336" onPress={this.handlePress}>
        <Image source={photo} style={{width: 193, height: 110}}/>
      </Container>
    );
  }
}

export default Screen;
