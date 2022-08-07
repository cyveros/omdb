import React, { useCallback } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Button } from '@omdb-ui/button'
import { Card } from '@omdb-ui/card'
import { FontSize, Spacing } from '@omdb-ui/constants'
import { Media } from '../types'

type Props = {
  media: Media
}

export const MediaCard = ({ media }: Props) => {
  const onPress = useCallback(() => {
    Alert.alert('Open button should do nothing.')
  }, [])

  return (
    <Card backgroundImageSource={{ uri: media.Poster }}>
      <View style={styles.detail}>
        <View style={styles.description}>
          <Text style={styles.title}>{media.Title}</Text>
          <Text style={styles.released}>{media.Released}</Text>
        </View>
        <View style={styles.action}>
          <Button label={'Open'} onPress={onPress} />
        </View>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  detail: {
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: Spacing.normal,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'grey',
  },
  description: {
    flex: 1,
  },
  title: {
    fontSize: FontSize.larger,
    fontWeight: '500',
  },
  released: {
    fontSize: FontSize.normal,
  },
  action: {
    paddingLeft: Spacing.small,
  },
})
