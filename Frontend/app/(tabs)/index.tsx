import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

// CAMINHOS CORRIGIDOS
import Button from '../../components/Button';
import { Colors } from '../../constants/Colors';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.topSection}>
        <Text style={styles.title}>Pense</Text>
        <Text style={styles.title}>ilimitadamente!</Text>
        <Text style={styles.subtitle}>Seja melhor que</Text>
        <Text style={styles.subtitle}>a si próprio</Text>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.greeting}>Olá, Adm!</Text>

        <Button
          title="Login"
          onPress={() => router.push('/explore')}
          variant="primary"
          style={{ width: '80%', marginBottom: 15 }}
        />

        <Button
          title="Cadastrar"
          onPress={() => { /* Lógica de cadastro */ }}
          variant="outline"
          style={{ width: '80%', borderColor: Colors.light.danger }}
        />
      </View>
    </SafeAreaView>
  );
};

// ... (estilos permanecem os mesmos)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.light.secondary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.secondary,
    textAlign: 'center',
  },
  bottomSection: {
    flex: 1.2,
    backgroundColor: Colors.light.darkBackground,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    paddingTop: 40,
  },
  greeting: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});