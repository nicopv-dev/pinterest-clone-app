import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Pin(props) {
  const { id, title, image } = props.pin;
  const [ratio, setRatio] = useState(1);
  const navigation = useNavigation();
  
  useEffect(() => {
    if(image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image])

  const onLike = () => {};

  const goToPostPage = () => {
    navigation.navigate("Post", { id });
  };

  return (
    <Pressable onPress={goToPostPage} style={styles.pin}>
      <View>
        <Image 
          borderRadius={25}
          source={{ uri: image }}
          style={styles.image, { aspectRatio: ratio }}
        />
        <Pressable onPress={onLike} style={styles.heartBtn}>
          <AntDesign name="hearto" size={24} color="black" />
        </Pressable>
      </View>
			<Text style={styles.title} numberOfLines={2}>{title}</Text>
		</Pressable>
  )
}

const styles = StyleSheet.create({
  pin: {
		width: '100%',
    padding: 4,
	},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
		margin: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
	image: {
		width: '100%',
	},
  heartBtn: {
    position: "absolute",
    backgroundColor: "#b8b8b8",
    bottom: 10,
    right: 10,
    padding: 4,
    borderRadius: 50,
  }
})