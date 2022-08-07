import React, { PropsWithChildren } from 'react'
import { ImageSourcePropType, StyleSheet, View } from 'react-native'
import { Spacing } from '@omdb-ui/constants'
import { Image } from '@omdb-ui/image'

type Props = {
  backgroundImageSource?: ImageSourcePropType
  onOpen?: () => void
}

export const Card = ({
  children,
  backgroundImageSource,
}: PropsWithChildren<Props>) => {
  return (
    <View style={styles.container}>
      {backgroundImageSource && <Image source={backgroundImageSource} />}
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: Spacing.small,
    borderWitdh: 10,
    borderRadius: Spacing.large,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
})
