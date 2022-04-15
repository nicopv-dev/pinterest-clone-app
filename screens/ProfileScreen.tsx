import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://www.blexar.com/avatar.png" }} style={styles.avatar}/>
      <Text style={styles.title}>ProfileScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatar: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
  }
});
