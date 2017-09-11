import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static navigatorButtons = {
    leftButtons: [
      {
        title: 'Back',
        id: 'back',
        disabled: false
      }
    ]
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  handlePress = () => {
    this.props.navigator.showModal({
      screen: 'Screen4',
      title: 'Screen 4'
    });
  };

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'back') {
        this.props.navigator.pop({ animated: true, animationType: 'fade' });
      }
    }
  }

  render() {
    return (
      <Container backgroundColor="#067a46" onPress={this.handlePress}>
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>Scroll me yo</Text>
          <Text style={{fontSize:96}}>Scroll me too</Text>
          <Text style={{fontSize:96}}>Scroll me man</Text>
        </ScrollView>
      </Container>
    );
  }
}

export default Screen;
