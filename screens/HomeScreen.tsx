import { StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import pins from '../assets/data/pins';
import EditScreenInfo from '../components/EditScreenInfo';
import Pin from '../components/Pin';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
  		<View style={styles.container}>
        {/* <Pin pin={pins[0]} /> */}
        
        <View style={styles.column}>
          {pins.filter((item, index) => index % 2 === 0).map((item, index) => (
            <Pin pin={item} key={index} />
          ))}
        </View>
        <View style={styles.column}>
          {pins.filter((item, index) => index % 2 === 1).map((item, index) => (
            <Pin pin={item} key={index} />
          ))}
        </View>
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
