import React, { Component } from 'react';
import './App.css';
import LazyGrid from './LazyGrid'; 
import PropTypes from "prop-types";
import { AppConfig, ThemeBuilder, ThemeProvider, Themes  } from '@sap/orca-react-ui'; 

const belize = ThemeBuilder.getTheme(Themes.Belize);
class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };
  render() {
    return (
      <div class="homePage">
        <AppConfig>
        <ThemeProvider theme={belize}>
          <LazyGrid></LazyGrid>
        </ThemeProvider>
        </AppConfig>
      </div>
    );
  }
}

export default App;
