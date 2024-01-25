import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const InputBox = ({inputTitle, keyboardType,value,setValue, autoComplete,secureTextEntry=false}) => {
  return (
    <View>
      <Text>{inputTitle}</Text>
      <TextInput
        style={styles.inputBox}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text)=>setValue(text)}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    backgroundColor: '#ffff',
    marginBottom: 20,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: '#af9f85',
  },
});
