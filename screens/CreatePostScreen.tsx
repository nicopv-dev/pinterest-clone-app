import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TextInput, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CreatePostScreen() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onSubmit = () => {};

  return (
    <View style={styles.root}>
      <View>
        <Button title={!image ? "Upload your Pin" : "Upload another Pin"} onPress={pickImage}  />
      </View>
      {image && (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <TextInput placeholder='Title...' value={title} onChangeText={setTitle} stlye={styles.inputTitle} />
          <Button title='Submit Image' onPress={onSubmit}>Submit</Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  image: {
    width: '100%', 
    aspectRatio: 1,
  },
  inputTitle: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 5,
    width: '100%',
    borderRadius: 5,
  }
})