import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from '@omdb/home/navigation'

export function Application() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}
