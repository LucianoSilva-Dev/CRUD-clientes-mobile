import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export default function InputField({ label, value, onChangeText, placeholder }: InputFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.light.darkBackground,
    color: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});