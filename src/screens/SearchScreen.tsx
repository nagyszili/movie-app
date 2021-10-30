import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { blackColor, whiteColor } from '../utils/colors';

export const SearchScreen: React.FC<{}> = () => {
  const [queryString, setQueryString] = useState<string>();
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        {/* <Icon name="search" color="rgba(0, 0, 0, 0.5)" size={24} /> */}
        <TextInput
          style={styles.input}
          value={queryString}
          onChangeText={setQueryString}
          placeholder="Search"
          placeholderTextColor="rgba(88, 87, 87, 0.75)"
          //   onSubmitEditing={() => search && search(queryString)}
          returnKeyType="search"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: whiteColor,
    minHeight: 36,
    borderRadius: 6,
  },
  input: {
    flex: 1,
    fontSize: 15,
    marginHorizontal: 10,
    height: 50,
    width: 400,
    color: blackColor,
  },
});
