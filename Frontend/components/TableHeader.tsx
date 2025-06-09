import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TableHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.headerText, { flex: 3 }]}>Nome</Text>
      <Text style={[styles.headerText, { flex: 2 }]}>Fone</Text>
      <Text style={[styles.headerText, { flex: 3 }]}>Endereço</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#3a3d5e', // Um tom um pouco mais claro para o cabeçalho
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});