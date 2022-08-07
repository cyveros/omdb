import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SearchBox, SearchResults } from '@omdb/search'

export function Home() {
  const [terms, setTerms] = useState('')

  return (
    <View style={styles.container}>
      <SearchBox onChangeTerms={setTerms} />
      <SearchResults terms={terms} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
