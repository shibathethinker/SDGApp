import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const TargetScreen = (props) => {
  const {description, targets} = props.navigation.state.params.data[0];

  const targetListToDisplay = targets.map((item, index) => {
    return (
      <View key={index} style={styles.listItemStyle}>
        <Text>{item.code}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  });

  return (
    <View testID="targetScreen" style={{flex: 1}}>
      <View style={styles.listHeaderStyle}>
        <Text>{description}</Text>
        <Text
          testID="targetHeader"
          accessibilityLabel="targretHeader"
          style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          {'\n'}TARGETS
        </Text>
      </View>
      <ScrollView style={styles.scrollViewStyle}>
        {targetListToDisplay}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemStyle: {
    padding: 10,
    borderBottomColor: '#01AED8',
    borderBottomWidth: 0.5,
  },
  listHeaderStyle: {
    padding: 10,
    elevation: 10,
    backgroundColor: '#01AED8',
    justifyContent: 'center',
  },
  scrollViewStyle: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default TargetScreen;
