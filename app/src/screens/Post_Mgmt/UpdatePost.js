import React,{useState,useEffect} from 'react';
import { SafeAreaView, ScrollView, View ,StyleSheet,Text,TextInput,Image,TouchableOpacity} from 'react-native'


import axios from 'axios';

const UpdatePost = ({route})=> {

   
    const id = route.params.paramKey;
    const [data,setData] =useState([])
    
   

    useEffect(() => {
    axios
      .get(`http://localhost:8000/posts/${id}`)

      .then((res) => {
        setData(res.data);
       
        console.log(res.data);
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  

  const updateData=(e)=> {
    e.preventDefault();
     axios
        .put(`http://localhost:8000/posts/${id}`,data)
      .then(() => {
        console.log(data);
        alert("Post Details updated Successfully");
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    
  };


  return (

    <SafeAreaView>
    <ScrollView>
            
            <View  style={styles.container}>
            <marquee style ={styles.title}>UPDATE POST</marquee>
            </View>


            <View>
            <Text style={styles.label}>Topic</Text>
            <TextInput style={styles.inputfields}  onChangeText={handleChange}  value={data.topic}/>
            </View>


            <View>
            <Text style={styles.label}>Category</Text>
            <TextInput style={styles.inputfields}  onChangeText={handleChange}  name="category" id="category" value={data.category}/>
            </View>


            <View>
            <Text style={styles.label}>Relevant Link</Text>
            <TextInput style={styles.inputfields}  onChangeText={handleChange} name="relevantLink"  id="relevantLink" value={data.relevantLink}/>
            </View>

            <View>
            <Text style={styles.label}>Description</Text>
            <textarea style={styles.inputfields}  onChangeT={handleChange} name="description" id="description" value={data.description}/>
            </View>


        <View>
        <TouchableOpacity style={styles.defaultButton} >
        <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}} onPress={updateData}>UPDATE </Text>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={styles.defaultButton1} >
            <Text style={{fontWeight:'bold' , fontSize:20, color:'black' ,textAlign:'center'}}> CANCEL</Text>
        </TouchableOpacity>
        </View>


            
    </ScrollView>
</SafeAreaView>

)}
const styles = StyleSheet.create({

title:{
 
    fontSize:20,
    textAlign:'center',
    color:'black',
    fontWeight:'bold',
    backgroundColor:'#1fbf3f',
    marginLeft:10,
    marginRight:10

},
container:{
    backgroundColor:'white',
},
label: {
    fontSize: 20,
    marginTop:30,
    marginLeft:-160,
    fontWeight: "bold",
    textAlign: "center",
    color: 'black'

},

inputfields:{
 
    borderColor:'a7a7',
    borderWidth:1,
    padding:5,
    fontSize:16,
    borderRadius:10,
    marginTop:5,
    marginLeft:30,
    marginRight:30,
    
},
BorderClass:
{

    width: 150,
    height: 150,
    borderWidth: 4,
    borderColor: 'black',
    marginTop:10,
    marginLeft:10
},
defaultButton:{
  
    backgroundColor:'#1fbf3f',
    marginTop:10,
    marginLeft:50,
    marginRight:50,
    padding:10,
    borderRadius:15


 },
 defaultButton1:{
   
     backgroundColor:'#a1f0b0',
     marginTop:10,
     marginLeft:50,
     marginRight:50,
     padding:10,
     borderRadius:15


  },
  defaultButton2:{

    backgroundColor:'#a1f0b0',
    marginLeft:180,
    marginRight:10,
    marginTop:-100,
    padding:10,
    borderRadius:15


  }



    
})

export default UpdatePost