import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../components/Forms/InputBox';
import SubmitButton from '../../components/Forms/SubmitButton';
import axios from 'axios';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // functions
  const handleSubmit = async()=>{
    try {
      setLoading(true)
      if(!name || !email || !password ){
       Alert.alert('Please Fill All Filelds')
       setLoading(false)
       return;
      }
       const{data} = await axios.post('/auth/register',{
        name,email,password
       });
       alert(data && data.message)
      console.log('Register Data ==>',{name,email,password});
    } catch (error) {
      alert(error.response.data.mesage)
      navigation.navigate('Login')
      setLoading(false)
      console.log(error)
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{marginHorizontal: 20}}>
        <InputBox inputTitle={'Name'} value={name} setValue={setName} />

        <InputBox
          inputTitle={'Email'}
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEmail}
        />

        <InputBox
          inputTitle={'Password'}
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />
      </View>
      <View>
        <SubmitButton
         btnTitle="Register" 
        loading={loading} 
        handleSubmit={handleSubmit}
        />
        <Text style={styles.linkText}>Alredy Register Please 
        <Text style={styles.link}  onPress={() => navigation.navigate('Login')}>Login</Text></Text>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e1d5c9',
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e2225',
  },
  inputBox: {
    height: 40,
    backgroundColor: '#ffff',
    marginBottom: 20,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: '#af9f85',
  },
  linkText:{
    textAlign:'center'
  },
  link:{
    color:'red'
  }
});
