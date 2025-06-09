// Frontend/components/ClientTableRow.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Client } from '../constants/MockData';

interface ClientTableRowProps {
  client: Client;
}

export default function ClientTableRow({ client }: ClientTableRowProps) {
  return (
    <TouchableOpacity style={styles.rowContainer}>
      <Text style={[styles.rowText, { flex: 3 }]}>{client.name}</Text>
      <Text style={[styles.rowText, { flex: 2 }]}>{client.phone}</Text>
      <Text style={[styles.rowText, { flex: 3 }]}>{client.address}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#3a3d5e',
    alignItems: 'center',
  },
  rowText: {
    color: '#fff',
    fontSize: 14,
  },
});