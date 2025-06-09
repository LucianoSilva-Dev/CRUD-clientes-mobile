// Frontend/components/AddClientModal.tsx
import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InputField from './InputField';
import Button from './Button';
import { Colors } from '../constants/Colors';

interface AddClientModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (client: { name: string; phone: string; address: string }) => void;
}

export default function AddClientModal({ visible, onClose, onSave }: AddClientModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = () => {
    if (name && phone && address) {
      onSave({ name, phone, address });
      setName('');
      setPhone('');
      setAddress('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close-circle" size={30} color={Colors.light.danger} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Adicionar Novo Cliente</Text>
          <InputField label="Nome Completo" value={name} onChangeText={setName} />
          <InputField label="Telefone" value={phone} onChangeText={setPhone} />
          <InputField label="Endereço" value={address} onChangeText={setAddress} />
          <Button title="Salvar" onPress={handleSave} variant="primary" style={{ width: '100%', marginTop: 10 }}/>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalView: {
    margin: 20,
    width: '90%',
    backgroundColor: Colors.light.darkBackground,
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
});