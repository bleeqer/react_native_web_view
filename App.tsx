import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const NAVER = 'https://www.koipa.re.kr/'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%' }}>
        <WebView
        source={{uri: NAVER }}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
