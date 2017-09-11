import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  static navigatorButtons = {
    leftButtons: [
      {
        title: 'Back',
        id: 'back',
        disabled: false
      }
    ],
    rightButtons: [
      {
        title: 'Settings',
        id: 'settings',
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

      if (event.id == 'settings') {
        this.props.navigator.showModal({
          screen: 'Screen5',
          title: 'Settings',
        });
      }
    }
  }

  render() {
    const data = [
      {
        key: 'Bo',
        title: 'Grunt'
      },
      {
        key: 'Go',
        title: 'Entry Level'
      },
      {
        key: 'Mo',
        title: 'Boss'
      }
    ];

    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <FlatList data={data}
          renderItem={({item}) => <View style={{flex: 1, flexDirection: 'row'}}><Text style={{flexBasis: '50%', height: 50, backgroundColor: 'powderblue'}}>{item.key}</Text><Text style={{flexBasis: '50%', height: 50, backgroundColor: 'steelblue'}}>{item.title}</Text></View>}/>
      </View>
    );
  }
}

export default Screen;
