import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '@/constants/Colors';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  style?: ViewStyle;
}

export default function Button({ onPress, title, variant = 'primary', style }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[`${variant}Button`], style]}
      onPress={onPress}
    >
      <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  primaryButton: {
    backgroundColor: Colors.light.primary,
  },
  dangerButton: {
    backgroundColor: Colors.light.danger,
  },
  outlineButton: {
    borderColor: Colors.light.danger,
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryText: {
    color: Colors.light.lightText,
  },
  dangerText: {
    color: Colors.light.lightText,
  },
  outlineText: {
    color: Colors.light.danger,
  },
});