import { useState, useEffect } from "react";
import pins from "../assets/data/pins"
import { View, Text, StyleSheet, Image, Pressable, Alert } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useNhostClient } from "@nhost/react";
import { Post } from "../types.d";

const GET_POST = `query MyQuery($id: uuid!) {
  posts_by_pk(id: $id) {
    id
    image
    title
    created_at
    user {
      avatarUrl
      displayName
      id
    }
  }
}`;

export default function PostScreen() {
  const [ratio, setRatio] = useState(1);
  const [post, setPost] = useState<any>(null);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const route = useRoute();
  const nHost = useNhostClient();
  const id = route.params?.id;

  const fetchPost = async (postId) => {
    const response = await nHost.graphql.request(GET_POST, { id: postId, });
    
    if(response.error) {
      Alert.alert("Error fetching post");
    }else {
      setPost(response.data.posts_by_pk);
    }
  }

  useEffect(() => {
    fetchPost(id);
  }, [route.params])

  const goBack = () => {
    navigation.goBack();
  }

  if(!post) return <Text>Pin not found..</Text>

  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
      <StatusBar  style="light" />
      
      <View style={styles.root}>
        <Image source={{ uri: post.image }} style={styles.image, { aspectRatio: ratio }} borderTopLeftRadius={30}  borderTopRightRadius={30} />
        <Text style={styles.title}>{post.title}</Text>
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