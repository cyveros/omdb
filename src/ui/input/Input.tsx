import React from 'react'
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import { Spacing } from '@omdb-ui/constants'

interface Props extends TextInputProps {}

export const Input = ({ style, ...props }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput {...props} style={[styles.input, style]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.small,
    paddingVertical: Spacing.smaller,
    margin: Spacing.small,
    backgroundColor: '#fff',
    borderRadius: 2000,
  },
  input: {
    padding: Spacing.small,
  },
})
