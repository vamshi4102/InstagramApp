import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfilePicture from './ProfilePicture';
import { HeartIcon,ChatBubbleOvalLeftIcon,PaperAirplaneIcon,BookmarkIcon,EllipsisHorizontalIcon } from "react-native-heroicons/outline";
const PostCard = () => {
  const UserPost = {
    id: 2,
    name: 'Satya Nadella',
    image:
      'https://cionews.co.in/wp-content/uploads/2023/11/Article-Main-Image-71.png',
    read: false,
  };
  return (
    <View style={styles.post}>
      {/* post header */}
      <View style={styles.header}>
        <View style={styles.user_header}>
        <ProfilePicture
          Url={UserPost.image}
          isRead={UserPost.read}
          Position={'PostCard'}
        />
        <Text style={styles.username}>Vamshi krishna</Text>
        </View>
        <EllipsisHorizontalIcon color={'black'} size={30} />
      </View>
      {/* post image/slides */}
      <Image
        source={{
          uri: 'https://blog.hootsuite.com/wp-content/uploads/2022/05/How-to-schedule-Instagram-posts.png',
        }}
        style={styles.post_image}
      />
      {/* post actions */}
      <View style={styles.actions}>
        <View style={styles.left}>
            <HeartIcon  color={'black'} size={35} style={styles.action_icon}/>
            <ChatBubbleOvalLeftIcon color={'black'} size={35} style={styles.action_icon} />
            <PaperAirplaneIcon color={'black'} size={35} style={styles.action_icon} />
        </View>
        <View style={styles.right}>
            <BookmarkIcon color={'black'} size={30}/>
        </View>
      </View>
      {/* post footer */}
      <View>
        <View style={styles.reacted}>
          <Text>Liked by</Text>
          <Text style={styles.bold}>Jeff bezos</Text>
          <Text>and</Text>
          <Text style={styles.bold}>Others</Text>
        </View>
        <View style={styles.post_caption}>
          <Text>
            <Text style={styles.bold}>Vamshi krishna</Text>I am feeling happy to
            teach you react native, Hope you all share and support this, Happy
            coding.
          </Text>
        </View>
        <Text style={styles.comments}>View all 234 comments</Text>
        <Text style={styles.date}>22 Feb 2024</Text>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  post: {
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  username: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  post_image: {
    width: '100%',
    height: 400,
    marginVertical: 10,
  },
  reacted: {
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  post_caption: {marginVertical:5},
  comments: {
    fontWeight: 'bold',
    color: '#ccc',
  },
  date:{
    fontWeight:'bold',
    color:'#ccc',
    marginTop:5
  },
  actions:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10
  },
left:{
    flexDirection:'row'
},
right:{

},
action_icon:{
    marginRight:5
},
user_header:{
    flexDirection:'row',
    alignItems:'center'
}
});
