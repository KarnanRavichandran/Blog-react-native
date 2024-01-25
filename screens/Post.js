import {View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FooterMenu from '../components/Menus/FooterMenu';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { PostContext } from '../context/postContext';


const Post = () => {
  // global state
  const[posts,setPost] = useState(PostContext)
  // local state
  const[title,setTitle] = useState()
  const[description,setDescription] = useState()
  const[loading,setLoading] = useState(false);

  const navigation = useNavigation()

  // function
  const handleClick = async()=>{
    try {
      if(!title){
        alert('Please add to a title')
      }
      if(!description){
        alert('Please add to a description')
      }
      const {data} = await axios.post('/post/create-post',{title,description})
      setLoading(false)
      setPost([...posts,data?.post])
      alert(data?.message)
      navigation.navigate('Home')
      
    } catch (error) {
      alert(error.response.data.message || error.message)
      setLoading(false)
      console.log(error)
    }
  }
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.heading}>Create a Post</Text>
          <TextInput
            placeholder="Add a Title"
            style={styles.inputBox}
            placeholderTextColor={'gray'}
            value={title}
            onChangeText={(text)=>setTitle(text)}
          />

          <TextInput
            placeholder="Add a description"
            style={styles.inputBox}
            placeholderTextColor={'gray'}
            multiline={true}
            numberOfLines={6}
            value={description}
            onChangeText={(text)=>setDescription(text)}
          />
        </View>
        <View style={{alignItems:'center'}}>
     <TouchableOpacity style={styles.postBtn} onPress={handleClick}>
        <Text style={styles.postBtnText}>
        <FontAwesome5 
          name="plus-square"
          size={18}
        />&nbsp;&nbsp;
        Create Text</Text>
      </TouchableOpacity>
     </View>
      </ScrollView>
  

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <FooterMenu />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'space-between',
    marginTop: 40,
  },
  heading: {
    textTransform: 'uppercase',
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputBox: {
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    paddingTop: 10,
    width: 330,
    marginTop: 30,
    fontSize: 16,
    paddingLeft: 15,
    borderColor: 'gray',
    borderWidth: 1,
  },
  postBtn:{
  backgroundColor:"black",
  width:300,
  marginTop:30,
  height:40,
  alignItems:'center',
  justifyContent:"center",
  borderRadius:10
  },
  postBtnText:{
    color:"#fff",
    fontSize:18,
    fontWeight:'bold'
  }
});
export default Post;
