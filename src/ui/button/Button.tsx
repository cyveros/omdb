import React from 'react'
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native'
import { FontSize, Spacing } from '@omdb-ui/constants'

interface Props extends PressableProps {
  label: string
  style: StyleProp<ViewStyle>
}

export const Button = ({ label, style, ...props }: Props) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.pressed : styles.nonPressed,
        style,
      ]}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: Spacing.normal,
    borderRadius: 2000,
  },
  nonPressed: {
    backgroundColor: '#007aff',
  },
  pressed: {
    backgroundColor: '#007aff80',
  },
  label: {
    color: '#fff',
    fontSize: FontSize.normal,
    fontWeight: 'bold',
  },
})
