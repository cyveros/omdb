import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './components/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export function RootNavigator() {
  return (
    <Navigator>
      <Screen name={'Home'} component={Home} />
    </Navigator>
  )
}
