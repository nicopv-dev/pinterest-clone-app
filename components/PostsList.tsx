import { StyleSheet, Image, ScrollView, FlatList, useWindowDimensions } from 'react-native';
import pins from '../assets/data/pins';
import EditScreenInfo from './EditScreenInfo';
import Pin from './Pin';
import { Text, View } from './Themed';
import { RootTabScreenProps } from '../types';
import { Post } from "../types.d";

interface IPostList {
  posts: Post[];
}

export default function PostsList({ posts }: IPostList) {
  const width = useWindowDimensions().width;
  const numColumns = Math.ceil(width / 350);

  return (
    <ScrollView>
  		<View style={styles.container}>
        {Array.from(Array(numColumns)).map((col, colIndex) => (
          <View style={styles.column}>
            {posts.filter((_, index) => index % numColumns === colIndex).map((item, index) => (
              <Pin pin={item} key={index} />
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
		padding: 10,
  },
  column: {
    flex: 1,
  }
});
