import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';

export default class LoginScreen extends React.Component{


    Login=async(email,password)=>{
        if(email && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
                    this.props.navigation.navigate('Transaction')
                }
            }
            catch(error){
                switch(error.code){
                    case 'auth/user-not-found' :    Alert.alert("user doesn't exist")
                                                    console.log("doesn't exist")
                    
                    break;
                    case 'auth/invalid-email':   Alert.alert("Incorrect email or password")

                    break;

                }
            }


        }

        else{
            Alert.alert('enter email and password');
        }
    }



    render(){
        return(
            <View>
                <KeyboardAvoidingView style={{alignItems:"center",marginTop:20}}>
                    <View>
                        <Image
                            source={require("../assets/booklogo.jpg")}
                            style= {{width:200, height:200}}   />
                        <Text style={{textAlign:"center", fontSize:30}}> Wily </Text>
                    </View>

                    <View>
                        <TextInput
                            style={styles.loginBox}
                            placeholder="abc@example.com"
                            keyboardType='email.address'
                            onChangeText={(text)=>{
                                this.setState({
                                    emailId:text
                                })
                            }}  />

<TextInput
                            style={styles.loginBox}
                            secureTextEntry={true}
                            placeholder="enter password"
                            
                            onChangeText={(text)=>{
                                this.setState({
                                    password:text
                                })
                            }}  />    
                    </View>

                    <View>
                        <TouchableOpacity style={{height:30,width:100, borderWidth:2,marginTop:20,paddingTop:5,borderRadius:10}}
                        onPress={()=>{
                            this.Login(this.state.emailId, this.state.password)
                        }}>
                            <Text style={{textAlign:"center"}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
                <Text>Login Screen</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    loginBox:{
        width:300,
        height:40,
        borderWidth:2,
        fontSize:20,
        margin:10,
        paddingLeft:10
    }
})