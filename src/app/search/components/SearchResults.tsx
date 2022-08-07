import React from 'react'
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { searchApi } from '../services/search'
import { MediaCard } from './MediaCard'
import { SearchNoResult } from './SearchNoResult'

type Props = {
  terms?: string
}

export const SearchResults = ({ terms = '' }: Props) => {
  const { data: media, error, isLoading } = searchApi.useSearchQuery(terms)

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error || !media) {
    return <SearchNoResult hasError={terms.length > 0}/>
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <MediaCard media={media} />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    // add bottom offset to facilitate scroll
    paddingBottom: 120,
  },
})
