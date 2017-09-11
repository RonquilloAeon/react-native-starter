import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

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

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'back') {
        this.props.navigator.dismissModal();
      }
    }
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll</Text>
          <Text style={{fontSize:20}}>Scroll me yo</Text>
          <Text style={{fontSize:96}}>Scroll me</Text>
          <Text style={{fontSize:20}}>Scroll man</Text>
        </ScrollView>
      </View>
    );
  }
}

export default Screen;
