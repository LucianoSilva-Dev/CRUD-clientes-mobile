import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <FontAwesome name="user-circle" size={40} color="#A259FF" />
      <Text style={styles.title}>Olá, <Text style={{ fontWeight: 'bold' }}>{'{Admin}'}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#A259FF',
  },
})