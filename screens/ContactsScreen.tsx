import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import users from '../data/Users';

import { View } from '../components/Themed';
import ContactListItem from '../components/ContactListItem';

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
        style={{width: '100%'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
