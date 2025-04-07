import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';

const App = () => {
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

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

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
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A1EC4',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#4A1EC4',
    textAlign: 'center',
  },
  bottomSection: {
    flex: 1.2,
    backgroundColor: '#1f213a',
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
  loginButton: {
    backgroundColor: '#5B17E5',
    width: '80%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    borderColor: '#FF4D67',
    borderWidth: 2,
    width: '80%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
