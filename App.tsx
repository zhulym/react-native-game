/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  // SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  // Header,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <View id="elem1" style={[styles.active, styles.elem]}>
          <Text>1</Text>
        </View>
        <View id="elem1" style={[styles.active, styles.elem]}>
          <Text>2</Text>
        </View>
        <View id="elem1" style={[styles.active, styles.elem]}>
          <Text>3</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    position: 'absolute',
    top: '50%',
    transform: [
      {
        translateY: -200,
      },
    ],
    width: '100%',
    height: '50%',
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
    backgroundColor: 'rgb(226, 226, 226)',
    padding: 10,
  },
  active: {
    backgroundColor: '#fff',
    fontWeight: '600',
  },
  elem: {
    width: '23%',
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  empty: {
    backgroundColor: 'red',
  },
});

export default App;
