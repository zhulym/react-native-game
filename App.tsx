/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type { PropsWithChildren } from 'react';
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
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({ children, title }: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

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
        <View id="elem1" style={[styles.active, styles.elem]}>
          <Text>4</Text>
        </View>
        <View id="elem1" style={[styles.active, styles.elem]}>
          <Text>5</Text>
        </View>
        <View id="elem1" style={[styles.active, styles.elem]}>
          <Text>6</Text>
        </View>
        <View id="elem1" style={[styles.active, styles.elem]}>
          <Text>7</Text>
        </View>
        <View id="elem1" style={[styles.active, styles.elem]}>
          <Text>8</Text>
        </View>
        <View id="elem1" style={[styles.active, styles.elem]}>
          <Text>9</Text>
        </View>
        <View id="elem1" style={[styles.active, styles.elem]}>
          <Text>10</Text>
        </View>
        <View id="elem1" style={[styles.active, styles.elem]}>
          <Text>11</Text>
        </View>
        <View id="elem1" style={[styles.active, styles.elem]}>
          <Text>12</Text>
        </View>
        <View id="elem1" style={[styles.active, styles.elem]}>
          <Text>13</Text>
        </View>
        <View id="elem1" style={[styles.active, styles.elem]}>
          <Text>14</Text>
        </View>
        <View id="elem1" style={[styles.active, styles.elem]}>
          <Text>15</Text>
        </View>
        <View id="elem1" style={[styles.empty, styles.elem]} />
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
