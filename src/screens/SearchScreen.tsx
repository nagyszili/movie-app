import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Pressable,
  ListRenderItem,
} from 'react-native';
import { useSearch } from '../api/apollo/search/useSearch';
import client from '../api/axios/client';
import { blackColor, whiteColor } from '../utils/colors';

export const SearchScreen: React.FC<{}> = () => {
  const [queryString, setQueryString] = useState<string>('');
  const [search, { data, loading, error }] = useSearch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log({ data, error });
  }, [data, error]);

  const renderItem: ListRenderItem<any> = ({ item }) => (
    <Pressable>
      <Text>Movie</Text>
    </Pressable>
  );

  const onSearch = () => {
    client.auth();
    // search({ variables: { term: queryString } });
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            value={queryString}
            onChangeText={setQueryString}
            placeholder="Search"
            placeholderTextColor="rgba(88, 87, 87, 0.75)"
            onSubmitEditing={onSearch}
            returnKeyType="search"
          />
        </View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={movies}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
          />
        )}
      </View>
    </SafeAreaView>
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
    minHeight: 40,
    borderRadius: 6,
    margin: 10,
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
