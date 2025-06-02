import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  user: {
    nome: string;
    fone: string;
    endereco: string;
  };
};

export default function UserCard({ user }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{user.nome}</Text>
      <Text style={styles.text}>{user.fone}</Text>
      <Text style={styles.text}>{user.endereco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#555',
  },
  text: {
    color: 'white',
    width: '33%',
  },
});