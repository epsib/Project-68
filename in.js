import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';


class Facebook extends React.Component{
  render(){
    return(
       <View>
        <TouchableOpacity style={styles.fb}   
              >
          <Text style={styles.text}
          onPress={() => {
              Linking.openURL("https://www.instagram.com/")
            }}>Instagram</Text>
        </TouchableOpacity>
       </View>
    );
  }
}
export default Facebook;

const styles = StyleSheet.create({
  fb:{
    marginLeft: 100,
    marginTop: 200,
    borderWidth: 2,
    width: 150,
    height: 75,
    backgroundColor: 'rgb(255, 0, 183)',
    borderRadius: 50,
 },
 text:{
  marginTop: 12, 
  alignItems:'center',
  textAlign: 'center', 
  fontSize: 30, 
  fontWeight: 'bold',
  color:"white"
 }


})