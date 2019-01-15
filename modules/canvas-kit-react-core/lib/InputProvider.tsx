import * as React from 'react';
// import whatInput from 'what-input';
import {ThemeProvider} from 'emotion-theming';

export default class InputProvider extends React.Component {
  render() {
    console.log('hi');
    return <ThemeProvider theme={{inputMethod: 'keyboard'}}>{this.props.children}</ThemeProvider>;
  }
}
