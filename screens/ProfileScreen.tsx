import { Entypo, Feather } from '@expo/vector-icons';
import { StyleSheet, Image, ScrollView } from 'react-native';
import pins from '../assets/data/pins';
import EditScreenInfo from '../components/EditScreenInfo';
import PostsList from '../components/PostsList';
import { Text, View } from '../components/Themed';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <Feather name='share' size={24} color="black" style={styles.icon} />
          <Entypo name='dots-three-horizontal' size={24} color="black" style={styles.icon} />
        </View>
        <Image source={{ uri: "https://www.blexar.com/avatar.png" }} style={styles.avatar}/>
        <Text style={styles.title}>ProfileScreen</Text>
        <Text style={styles.subtitle}>10 followers</Text>
      </View>
      <PostsList posts={pins}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#181818',
    fontWeight: "600",
  },
  avatar: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
  }
});
