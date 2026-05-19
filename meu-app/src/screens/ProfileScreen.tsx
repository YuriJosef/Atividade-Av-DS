import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function ProfileScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://i.imgur.com/9uO2f0Z.jpg' }} 
        style={styles.profileImage} 
      />

      <Text style={styles.name}>João Silva</Text>
      <Text style={styles.location}>Recife - Pernambuco</Text>
      <Text style={styles.bio}>Desenvolvedor React Native</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar para Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 6,
    borderColor: '#1e3a8a',
    marginBottom: 25,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 8,
  },
  location: {
    fontSize: 18,
    color: '#64748b',
    marginBottom: 12,
  },
  bio: {
    fontSize: 17,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#ef4444',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});