import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@omdb/home'
import { store } from './store'

const { Navigator, Screen } = createNativeStackNavigator()

export function Application() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator>
          <Screen
            name={'Home'}
            component={Home}
            options={{
              headerTitle: 'OMDb',
            }}
          />
        </Navigator>
      </NavigationContainer>
    </Provider>
  )
}
