// Frontend/app/(tabs)/explore.tsx
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { CLIENTS, Client } from '../../constants/MockData';
import AppHeader from '../../components/AppHeader';
import TableHeader from '../../components/TableHeader';
import ClientTableRow from '../../components/ClientTableRow';
import AddClientModal from '../../components/AddClientModal';

export default function ClientListScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [clients, setClients] = useState<Client[]>(CLIENTS);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSaveClient = (newClient: { name: string; phone: string; address: string }) => {
    setClients(currentClients => [
      ...currentClients,
      { id: String(Date.now()), ...newClient },
    ]);
    setModalVisible(false);
  };
  
  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.phone.includes(searchQuery) ||
    client.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader username="Admin" />

      <AddClientModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveClient}
      />

      <View style={styles.toolbar}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#888" />
          <TextInput
            placeholder="Fernando"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
            placeholderTextColor="#888"
          />
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.actionButton}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: Colors.light.danger }]}>
          <Ionicons name="trash" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.editHint}>Toque para editar</Text>

      <View style={styles.tableContainer}>
        <FlatList
          data={filteredClients}
          ListHeaderComponent={<TableHeader />}
          renderItem={({ item }) => <ClientTableRow client={item} />}
          keyExtractor={(item) => item.id}
          stickyHeaderIndices={[0]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  actionButton: {
    backgroundColor: Colors.light.primary,
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
  },
  editHint: {
    color: '#888',
    textAlign: 'center',
    fontSize: 12,
    paddingBottom: 5,
  },
  tableContainer: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: Colors.light.darkBackground,
    borderRadius: 8,
    overflow: 'hidden',
  },
});