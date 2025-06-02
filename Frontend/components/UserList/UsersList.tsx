import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserCard from './UserCard';

const users = [
  { nome: 'Daniel Monteiro Vasques', fone: '(11) 98765-4321', endereco: 'Avenida Monte Azul' },
  { nome: 'Helena Costa e Silva', fone: '(11) 98765-4321', endereco: 'Travessa Bela Vista' },
  { nome: 'Fernando Albuquerque Nogueira', fone: '(11) 98765-4321', endereco: 'Rua dos Ipês' },
  { nome: 'Amanda Freitas Moreira', fone: '(11) 98765-4321', endereco: 'Alameda Aurora' },
  { nome: 'Rafael Duarte Campos', fone: '(11) 98765-4321', endereco: 'Avenida Dom Pedro II' },
  { nome: 'Lucas Tavares de Mendonça', fone: '(11) 98765-4321', endereco: 'Rua das Rosas Brancas' },
  { nome: 'Beatriz Antunes Ferreira', fone: '(11) 98765-4321', endereco: 'Travessa Sol Nascente' },
  { nome: 'Isabela Fontes da Cunha', fone: '(11) 98765-4321', endereco: 'Rua José de Alencar' },
  { nome: 'Gabriela Luz Ribeiro', fone: '(11) 98765-4321', endereco: 'Avenida São Cristóvão' },
];

export default function UserList() {
  return (
    <View style={styles.list}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Nome</Text>
        <Text style={styles.headerText}>Fone</Text>
        <Text style={styles.headerText}>Endereço</Text>
      </View>
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#999',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    width: '33%',
  },
});