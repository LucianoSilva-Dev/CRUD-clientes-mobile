// Frontend/components/ClientTableRow.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Importar o useRouter
import { Client } from '../constants/MockData';

interface ClientTableRowProps {
  client: Client;
}

export default function ClientTableRow({ client }: ClientTableRowProps) {
  const router = useRouter(); // Inicializar o router

  // Função para navegar para os detalhes do cliente
  const handlePress = () => {
    router.push({
      pathname: '/client-details', // O nome do arquivo que vamos criar
      params: { clientId: client.id }, // Passando o ID do cliente
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.rowContainer}>
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