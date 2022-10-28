import React from 'react'
import { SafeAreaView, ScrollView, View, StyleSheet, Text, TouchableOpacity,Image } from 'react-native';
import AppBarComponent from '../Common/AppBarComponent';
import profile from '../../../assets/profile.png'


const FView = () => {
  return (
    <SafeAreaView>
      <ScrollView>
   
     <AppBarComponent/>
    
        <View style={styles.container}>
          <Text style={styles.title}>FEEDBACK VIEW</Text>
        </View>

        
        <View style={styles.box} >
            <View><Image source={profile} style={styles.BorderClass1}></Image></View>
           
            <View><Text style={styles.label}>Admin User</Text></View>
            <View><Text style={styles.label1}>Thank You For Your Feedback</Text></View>

          <View>
            <TouchableOpacity style={styles.defaultButton1} >
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white', textAlign: 'center' }}> DELETE</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({

  title: {

    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: '#1fbf3f',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding:10

  },
  container: {
    backgroundColor: 'white',
  },
  label: {
    fontSize: 16,
    marginTop: -40,
    marginLeft: 100,
    fontWeight: "bold",
    textAlign: "center",
    color: 'black'

  },
  label1: {
    fontSize: 16,
    marginTop: -1,
    marginLeft: -100,
    fontWeight: "bold",
    textAlign: "center",
    color: 'black'

  },
  box: {

    backgroundColor: 'lightgray',
    height: 170,
    width: 340,
    borderColor: 'darkgray',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 50,
    borderRadius: 10,
    borderWidth: 2,


  },
  defaultButton1: {

    backgroundColor: '#ff4d4d',
    marginTop: -100,
    marginLeft: 130,
    marginRight: 30,
    padding: 5,
    borderRadius: 15,
    fontWeight: 'bold',
    fontSize:16

  },

  BorderClass1:
  {

      width: 80,
      height: 80,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius:10,
      marginTop:10,
      marginLeft:10,
      marginRight:10
  }





})
export default FView;
