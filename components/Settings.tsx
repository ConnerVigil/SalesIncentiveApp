/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React from 'react';

interface Props {
  navigation: any;
}

export default function Settings({navigation}: Props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings</Text>
      <Button
        title="Welcome Page"
        onPress={() => navigation.navigate('Welcome Page')}
      />
      <Button
        title="Enthusiasm"
        onPress={() => navigation.navigate('Enthusiasm')}
      />
    </View>
  );
}
