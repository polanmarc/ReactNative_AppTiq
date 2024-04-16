
import React from 'react'
import { View, ImageBackground } from 'react-native'
import { FullTiq } from '../components/FullTiq'
import { globalStyles } from "../../config/themes/appThemes";
import { getRouteBackground } from '../hooks/Functions';


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
    <ImageBackground source={getRouteBackground()} style={globalStyles.backgroundImg} resizeMode="cover" >
      <View>
        {printTiq(tiq)}
      </View>
    </ImageBackground>
  )
}
