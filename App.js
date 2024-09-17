import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import ThemeContext from './src/context/ThemeContext';
import MainCalc from './src/components/MainCalc';

export default function App() {
  const [theme, setTheme] = useState('light');

  function handleToggleTheme() {
    setTheme(prevTheme => {
      if (prevTheme == 'light') {
        return 'dark';
      }
      return 'light';
    })
  }

  return (
    <ThemeContext.Provider value={{ theme }}>
      <SafeAreaView style={theme == 'dark' ? styles.containerBlack : styles.containerWhite}>

        <View style={styles.menuBar}>
          <TouchableOpacity onPress={handleToggleTheme} style={styles.menuItem}>
            {
              theme == 'dark' ?
               <Feather name='moon' size={40} color={'white'} />
              : <Feather name='sun' size={40} />
            }
          </TouchableOpacity>
        </View>

        <MainCalc />

        <StatusBar style="auto" />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  containerWhite: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25
  },
  containerBlack: {
    flex: 1,
    backgroundColor: '#1A1C1A',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25
  },

  menuBar: {
    width: '100%',
    alignItems: 'flex-end'
  },
  menuItem: {
    marginTop: 20
  }
});
