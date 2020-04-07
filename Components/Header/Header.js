import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';

const Header = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.containter}>
        <Text testID="goalHeader" style={styles.textStyle}>
          THE GOALS
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containter: {
    backgroundColor: '#428FDD',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    elevation: 10,
  },
  textStyle: {
    fontWeight: 'bold',

    color: 'white',
  },
});

export default Header;
