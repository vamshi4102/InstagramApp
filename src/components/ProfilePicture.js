import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const ProfilePicture = (props) => {
  const PofileContainer = props.Position === 'PostCard'?50:87;
  const PofileImage = props.Position === 'PostCard'?45:80;
  return (
      <View style={styles.story_container}>
        <LinearGradient colors={props.isRead?['#ddd', '#ddd', '#ddd']: ['#962fbf', '#fa7e1e', '#feda75']} style={[styles.image_container,{width:PofileContainer,height:PofileContainer}]}>
          <Image
            source={{
              uri: props.Url,
            }}
            style={[styles.profile_image,{width:PofileImage,height:PofileImage}]}
          />
        </LinearGradient>
      </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  story_container: {
    // width: 100,
    // height: '100%',
    alignItems: 'center',
    marginHorizontal:3,
  },
  image_container:{
    borderWidth:0,
    borderColor:'red',
    borderRadius:50,
    padding:2,
    justifyContent:'center',
    alignItems:'center'
  },
  profile_image: {
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#fff',
  },
  user_name: {
    textAlign: 'center',
    marginTop: 5,
  },
});
