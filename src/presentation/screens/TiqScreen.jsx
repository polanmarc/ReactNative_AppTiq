import React from 'react';
import { ScrollView, ImageBackground, StyleSheet, View } from 'react-native';
import { FullTiq } from '../components/FullTiq';
import { globalStyles } from "../../config/themes/appThemes";
import { getRouteBackground } from '../hooks/Functions';

export const TiqScreen = ({ route }) => {
  const { tiq } = route.params;

  return (
    <ImageBackground source={getRouteBackground()} style={globalStyles.backgroundImg} resizeMode="cover" >
      <View style={globalStyles.backgroundImgOpacity} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <FullTiq tiqSelected={tiq} />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
