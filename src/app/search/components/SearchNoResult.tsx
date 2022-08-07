import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Spacing } from '@omdb-ui/constants'

type Props = {
  hasError?: boolean
}

export const SearchNoResult = ({ hasError = false }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{hasError ? 'Found no results!' : 'Enter some title!'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.normal,
    alignContent: 'center',
    alignItems: 'center',
  },
})
