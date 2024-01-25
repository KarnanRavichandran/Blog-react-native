import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../context/authContext'
import FooterMenu from '../components/Menus/FooterMenu'
import { PostContext } from '../context/postContext'
import PostCard from '../components/PostCard'

const Home = () => {
    const [state]= useContext(AuthContext)
    const [posts]= useContext(PostContext)
  return (
    <View style={styles.container}>
    <ScrollView>
    <PostCard posts ={posts} />
    </ScrollView>
    <View style={{backgroundColor:'#fff'}}>
    <FooterMenu />
    </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
       flex:1,
        justifyContent:'space-between',
        margin:10,
        marginTop:40
       
    }
})