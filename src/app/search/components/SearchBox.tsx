import React from 'react'
import { View } from 'react-native'
import { Input } from '@omdb-ui/input'

type Props = {
  onChangeTerms: (terms: string) => void
}

export const SearchBox = ({ onChangeTerms }: Props) => {
  return (
    <View>
      <Input
        onChangeText={onChangeTerms}
        placeholder={'Type a movie name ...'}
      />
    </View>
  )
}
