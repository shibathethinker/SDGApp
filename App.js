import React from 'react';
import {StyleSheet} from 'react-native';

import {SDGProvider} from './Services/SDGContext';
import AppContainer from './route';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {goalDataArr: []};
  }

  async componentDidMount() {
    //This should be moved to a config file
    let remote_url = 'https://unstats.un.org/SDGAPI/v1/sdg/Goal/List';
    fetch(remote_url)
      .then((d) => d.json())
      .then((data) => {
        this.setState({goalDataArr: data});
      });
  }

  render() {
    const Root = AppContainer();

    return (
      <SDGProvider value={this.state.goalDataArr}>
        <Root />
      </SDGProvider>
    );
  }
}
const styles = StyleSheet.create({});

export default App;
