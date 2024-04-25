import React from 'react';
import { ScrollView, ImageBackground, StyleSheet, View } from 'react-native';
import { FullTiq } from '../components/FullTiq';
import { globalStyles } from "../../config/themes/appThemes";
import { getRouteBackground } from '../hooks/Functions';

/**
 * Pantalla para mostrar detalles completos de un tiquet.
 * @param {Object} route - Objeto de ruta que contiene los parámetros de navegación.
 * @returns {JSX.Element} El componente de la pantalla de detalle de tiquet.
 */
export const TiqScreen = ({ route }) => {
  const { tiq } = route.params;

  return (
    <ImageBackground source={getRouteBackground()} style={globalStyles.backgroundImg} resizeMode="cover" >
      <View style={globalStyles.backgroundImgOpacity} />
      {/* Contenedor de desplazamiento */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Componente para mostrar detalles completos del tiquet */}
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
