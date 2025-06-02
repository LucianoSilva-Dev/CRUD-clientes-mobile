import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#999" />
        <TextInput
          style={styles.input}
          placeholder="Procure por: {Nome, tel, end}"
          placeholderTextColor="#999"
        />
      </View>
      <Ionicons name="add-circle" size={30} color="#A259FF" style={styles.icon} />
      <Ionicons name="trash" size={30} color="#A259FF" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#2A2A3D',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  input: {
    color: 'white',
    marginLeft: 8,
    flex: 1,
  },
  icon: {
    marginLeft: 8,
  },
});