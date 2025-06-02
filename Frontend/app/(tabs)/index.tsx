import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import SearchBar from '../../components/UserList/SearchBar';
import UserList from '../../components/UserList/UsersList';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <UserList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2F',
    paddingTop: 40,
  },
});