import { useState, useEffect } from "react";
import pins from "../assets/data/pins"
import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function PostScreen() {
  const [ratio, setRatio] = useState(1);
  const [pin, setPin] = useState(null);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const route = useRoute();

  const pinId = route.params.id;

  useEffect(() => {
    const pinFounded = pins.find(item => item.id === pinId);
    if(pinFounded) {
      setPin(pinFounded);
      Image.getSize(pinFounded.image, (width, height) => setRatio(width / height));
    }
  }, [route.params])

  const goBack = () => {
    navigation.goBack();
  }

  if(!pin) return <Text>Pin not found..</Text>

  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
      <StatusBar  style="light" />
      
      <View style={styles.root}>
        <Image source={{ uri: pin.image }} style={styles.image, { aspectRatio: ratio }} borderTopLeftRadius={30}  borderTopRightRadius={30} />
        <Text style={styles.title}>{pin.title}</Text>
      </View>

      <Pressable onPress={goBack} style={[ styles.backBtn, { top: insets.top + 20 } ]}>
        <Ionicons name={"chevron-back"} size={35} color={"white"} />
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  image: {
    width: '100%',
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  backBtn: {
    position: 'absolute',
    left: 10,
  }
})