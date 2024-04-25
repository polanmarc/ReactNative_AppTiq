import React, { useState } from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import { Tiq } from '../components/Tiq';
import { globalStyles } from "../../config/themes/appThemes";
import { getRouteBackground } from '../hooks/Functions';
import { GetTiqsForId } from '../hooks/GetTiqs'

/**
 * Pantalla para mostrar los tiquets de un usuario específico.
 * @param {Object} route - Objeto de ruta que contiene los parámetros de navegación.
 * @returns {JSX.Element} El componente de la pantalla de tiquets de usuario.
 */
export const TiqsScreen = ({ route }) => {
  const { userLogged } = route.params;
  const tiqId = userLogged.id;
  
  // Obtener los tiquets del usuario actual
  const ticketData = GetTiqsForId({ tiqId });

  return (
    <ImageBackground source={getRouteBackground()} style={globalStyles.backgroundImg} resizeMode="cover" >
      <View style={globalStyles.backgroundImgOpacity} />
      {/* Contenedor de desplazamiento */}
      <ScrollView>
        <View style={{ marginBottom: 20 }}>
          <Text style={globalStyles.title}>Tiquets de {userLogged.name}</Text>
          {/* Mapeo de los tiquets del usuario */}
          {ticketData && ticketData.map((tiq, index) => (
            <View style={globalStyles.card} key={index}>
              {/* Componente para mostrar detalles del tiquet */}
              <Tiq tiq={tiq} />
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
