import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// CAMINHO CORRIGIDO
import { Colors } from '../constants/Colors';

interface AppHeaderProps {
  username: string;
}

export default function AppHeader({ username }: AppHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="person-circle-outline" size={40} color={Colors.light.primary} />
      <Text style={styles.headerText}>Olá, {username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    color: Colors.light.primary,
  },
});