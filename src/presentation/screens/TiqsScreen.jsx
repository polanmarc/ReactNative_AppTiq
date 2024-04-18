import React, { useState } from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import { Tiq } from '../components/Tiq';
import { globalStyles } from "../../config/themes/appThemes";
import { getRouteBackground } from '../hooks/Functions';
import { GetTiqsForId } from '../../api/GetTiqs'

export const TiqsScreen = ({ route }) => {
  const { userLogged } = route.params;
  const tiqId = userLogged.id;
  const ticketData = GetTiqsForId({ tiqId });

  return (
    <ImageBackground source={getRouteBackground()} style={globalStyles.backgroundImg} resizeMode="cover" >
      <ScrollView>
        <View style={{ marginBottom: 20 }}>
          <Text style={globalStyles.title}>Tiquets de {userLogged.name}</Text>
          {ticketData && ticketData.map((tiq, index) => (
            <View style={globalStyles.card} key={index}>
              <Tiq tiq={tiq} />
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
