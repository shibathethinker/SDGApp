import React, {useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import GoalTile from '../GoalTile/GoalTile';
import SDGContext from '../../Services/SDGContext';

const Body = (props) => {
  const SDGDataArr = useContext(SDGContext);

  const tileDataArr = SDGDataArr.map((item, index) => {
    return (
      <GoalTile
        key={index}
        index={index}
        title={item.title}
        navigationActive={index === 12 ? true : false}
      />
    );
  });

  return (
    <View style={styles.scrollContainterStyle}>
      <ImageBackground
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-AB6MivobdTLUEvAc9LNlkVQQSmc8VQafZjSIu-i_zZ_O-Peh&usqp=CAU',
        }}
        style={{width: '100%', height: '100%'}}>
        <ScrollView
          testID="scrollView"
          contentContainerStyle={styles.scrollViewStyle}>
          <View style={styles.scrollViewFirstItemStyle}>
            <Text style={styles.scrollViewFirstItemTextStyle}>
              17 GOALS TO TRANSFORM OUR WORLD
            </Text>
          </View>
          {tileDataArr}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewFirstItemStyle: {
    width: '100%',
    //height: 300,
    backgroundColor: 'transparent',
    padding: 20,
  },
  scrollViewFirstItemTextStyle: {
    fontSize: 50,
    color: 'white',
    marginLeft: -10,
  },

  scrollContainterStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  scrollViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
    flexWrap: 'wrap',
  },
});
export default Body;
