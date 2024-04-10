import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Menu, Divider, Button } from 'react-native-paper';
import database from '../../database/database.json';
import { Tiq } from '../components/Tiq';
import { globalStyles } from "../../config/themes/appThemes";

export const TiqsScreen = ({ route }) => {
  const { userLogged } = route.params;
  const [tiqs, setTiqs] = useState([]);

  const searchTiqs = () => {
    const allTiqs = database.tiqs;
    const tiqsFound = allTiqs.filter(tiq => tiq.asignado === userLogged.id);
    setTiqs(tiqsFound);
    console.log(tiqsFound);
  }

  useEffect(() => {
    searchTiqs();
  }, []);

  return (
    <View>
      <Text style={globalStyles.title}>Tiquets de {userLogged.name}</Text>
      {tiqs && tiqs.length > 0 && tiqs.map((tiq, index) => (
        <View key={index}>
          <Tiq tiqSelected={tiq} />
        </View>
      ))}
    </View>
  );
}
