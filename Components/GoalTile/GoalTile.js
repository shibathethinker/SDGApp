import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  View,
  ActivityIndicator,
} from 'react-native';
import {withNavigation} from 'react-navigation';

class GoalTile extends React.Component {
  constructor(props) {
    super(props);
    this.index =
      this.props.index + 1 <= 9
        ? '0' + (this.props.index + 1).toString()
        : this.props.index + 1;

    this.state = {targetData: [], imageLoading: false};
  }

  componentDidMount() {
    //get the SDG data and use it to pass to targetscreen if enabled
    //this makes the data readily available before switching to the next screen
    fetch(
      `https://unstats.un.org/SDGAPI/v1/sdg/Goal/${
        this.props.index + 1
      }/Target/List?includechildren=true`,
    )
      .then((d) => d.json())
      .then((resp) => {
        this.setState({targetData: resp});
      });
  }

  render() {
    return (
      <TouchableOpacity
        testID={this.props.index.toString()}
        accessibilityLabel={this.props.index.toString()}
        style={{...styles(this.props).container}}
        onPress={() =>
          this.props.navigationActive
            ? this.props.navigation.navigate('TargetScreen', {
                data: this.state.targetData,
              })
            : null
        }>
        <View style={{flex: 1}}>
          <Image
            style={{flex: 1}}
            onLoadStart={() => {
              this.setState({imageLoading: true});
            }}
            onLoadEnd={() => {
              this.setState({imageLoading: false});
            }}
            source={{
              uri: `https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-${this.index}.jpg`,
            }}
          />
          <ActivityIndicator
            style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
            animating={this.state.imageLoading}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const itemWidth = Dimensions.get('window').width / 2 - 20;
const styles = (props) =>
  StyleSheet.create({
    container: {
      borderColor: 'transparent',

      display: 'flex',
      width: itemWidth,
      height: itemWidth,
      margin: 10,
      elevation: 5,
    },
  });
export default withNavigation(GoalTile);
