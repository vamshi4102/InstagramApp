import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ProfilePicture from '../../components/ProfilePicture'
import { story_data } from '../../assets/data/story_data'
import styles from './styles'
import PostCard from '../../components/PostCard'

const HomeScreen = () => {
  return (
    <View style={{height:'100%'}}>
        <View style={styles.stories}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{height:150}}>
        {
            story_data.map((story)=>
               <View style={styles.story}>
                <ProfilePicture Url={story.image} isRead={story.read} />
                <Text>{story.name}</Text>
               </View> 
            )
        }
        </ScrollView>
        </View>
        <View style={styles.posts}>
            <PostCard />
        </View>
    </View>
  )
}

export default HomeScreen