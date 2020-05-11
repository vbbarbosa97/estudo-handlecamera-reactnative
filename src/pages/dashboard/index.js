import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import {ScanCode} from '../scanCode';
import {Photography} from '../photography';
import {Recording} from '../recording';



const ScanCodeRoute = () => <ScanCode />;

const PhotographyRoute = () => <Photography />;

const RecordingRoute = () => <Recording />;

export class Dashboard  extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'scanCode', title: 'QRCode', icon: 'qrcode-scan'},
      { key: 'photography', title: 'Foto', icon: 'camera-iris'},
      { key: 'recording', title: 'Vídeo', icon: 'camcorder-box'},
    ],
  };

  _handleIndexChange = index => {this.setState({ index }), alert(index)};

  _renderScene = BottomNavigation.SceneMap({
    scanCode: ScanCodeRoute,
    photography: PhotographyRoute,
    recording: RecordingRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}