import React, { useEffect, useState } from 'react'
import {
  Image as RNImage,
  ImageProps as RNImageProps,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface Props extends RNImageProps {}

const getImageUri = (source: ImageSourcePropType) => {
  if (typeof source === 'number') {
    throw new TypeError('Image source type not supported')
  }

  if (Array.isArray(source) && source.length > 0) {
    return source[0].uri
  }

  if ('uri' in source) {
    return source.uri
  }

  return undefined
}

export const Image = ({ source, style, ...props }: Props) => {
  const [aspectRatio, setApsectRatio] = useState(2 / 3)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const uri = getImageUri(source)

    if (uri) {
      RNImage.getSize(
        uri,
        (width, height) => {
          setApsectRatio(width / height)
          setIsError(false)
        },
        () => {
          setIsError(true)
        },
      )
    }
  }, [source, setApsectRatio, setIsError])

  return (
    <>
      {isError && (
        <View style={styles.fallback}>
          <Text style={styles.fallbackLabel}>{'Image not found =('}</Text>
        </View>
      )}
      <RNImage
        {...props}
        source={source}
        style={[
          isError
            ? styles.hidden
            : {
                width: '100%',
                aspectRatio,
              },
          style,
        ]}
      />
    </>
  )
}

const styles = StyleSheet.create({
  fallback: {
    width: '100%',
    aspectRatio: 2 / 3,
    backgroundColor: 'grey',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackLabel: {
    color: '#fff',
  },
  hidden: {
    width: 0,
    height: 0,
  },
})
