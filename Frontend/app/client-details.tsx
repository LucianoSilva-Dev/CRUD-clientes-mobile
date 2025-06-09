// Frontend/app/client-details.tsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Alert, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { CLIENTS, Client } from '../constants/MockData';
import AppHeader from '../components/AppHeader';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function ClientDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { clientId } = params;

  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    if (clientId) {
      const foundClient = CLIENTS.find(c => c.id === clientId);
      setClient(foundClient || null);
    }
  }, [clientId]);

  const handleUpdate = (field: keyof Client, value: string) => {
    if (client) {
      setClient({ ...client, [field]: value });
    }
  };

  const handleSaveChanges = () => {
    Alert.alert("Salvo!", "As alterações foram salvas com sucesso.");
    router.back();
  }

  const handleDeleteClient = () => {
    Alert.alert(
      "Excluir Cliente",
      `Tem certeza que deseja excluir ${client?.name}?`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", style: "destructive", onPress: () => router.back() }
      ]
    );
  }

  if (!client) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Cliente não encontrado.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <AppHeader username="Admin" />
      </View>

      <View style={styles.formContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back-circle" size={42} color={Colors.light.primary} />
        </TouchableOpacity>

        <InputField
          label="Nome:"
          value={client.name}
          onChangeText={(text) => handleUpdate('name', text)}
        />
        <InputField
          label="Telefone:"
          value={client.phone}
          onChangeText={(text) => handleUpdate('phone', text)}
        />
        <InputField
          label="Endereço:"
          value={client.address}
          onChangeText={(text) => handleUpdate('address', text)}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Salvar"
            onPress={handleSaveChanges}
            variant="primary"
            style={{ width: '100%', marginBottom: 15 }}
          />
          <Button
            title="Excluir cliente"
            onPress={handleDeleteClient}
            variant="outline"
            style={{ width: '100%' }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  // =========================================================
  // |||||                A ÚNICA MUDANÇA É AQUI             |||||
  // =========================================================
  headerWrapper: {
    backgroundColor: '#fff',
    // Aumente este valor para criar mais espaço em branco
    paddingBottom: 40,
  },
  formContainer: {
    flex: 1,
    backgroundColor: Colors.light.darkBackground,
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
  },
  buttonContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
}); 