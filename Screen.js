import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
} from 'react-native';


import Navigator from 'native-navigation'

export default class Screen extends React.Component {
  render() {
    const {
      children,
      title,
    } = this.props;

    return (
      <Navigator.Config
        title={title}
        backgroundColor="#f7f7f7"
        elevation={4}
        onBackPress={() => console.log('onBackPress')}
        onLeftPress={() => console.log('onLeftPress')}
        onRightPress={(x) => console.log('onRightPress', x)}
        onAppear={() => console.log('onAppear', this.context.nativeNavigationInstanceId)}
        onDisappear={() => console.log('onDisappear', this.context.nativeNavigationInstanceId)}
      >
        <ScrollView>
          <Navigator.Spacer animated />
          {children}
        </ScrollView>
      </Navigator.Config>
    );
  }
}