
import React from 'react'
import { Text, View } from 'react-native'
import { FullTiq } from '../components/FullTiq'

export const TiqScreen = ({ route }) => {
  const { tiq } = route.params

  const printTiq = (tiqSelected) => {
    return (
      <View key={tiqSelected.id}>
        <FullTiq tiqSelected={tiqSelected} />
      </View>
    );
  }

  return (
    <View>
      {printTiq(tiq)}
    </View>
  )
}
