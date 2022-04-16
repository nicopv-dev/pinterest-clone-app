import { useEffect, useState } from 'react';
import pins from '../assets/data/pins';
import PostsList from '../components/PostsList';
import { RootTabScreenProps } from '../types';
import { Post } from "../types.d";
import { useNhostClient } from "@nhost/react";
import { Alert } from 'react-native';

const GET_POSTS = `query {
  posts {
    id,
    image,
    title,
    created_at,
    user_id
  }
}`;

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [posts, setPosts] = useState([]);
  const nHost = useNhostClient();
  
  const fetchPosts = async () => {
    const { data, error } = await nHost.graphql.request(GET_POSTS);
    if(error) {
      Alert.alert("Error fetching posts");
    }else {
      setPosts(data.posts);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <PostsList posts={posts} />
  );
}
