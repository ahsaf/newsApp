import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {  Button } from 'react-native-paper';
import colors from "../constants/colors";

const OtpScreen = (props) =>{
    const [otp, setOtp] = React.useState("");
    const onSubmit = ()=>{
        props.navigation.navigate("BottomTab");
    }
    return(
        <View style={styles.container}>
            <View style={{width:"100%"}}>
                <Text style={styles.heading}>Enter your</Text>
                <Text style={styles.heading}>OTP Number</Text>
            </View>
            
            <OTPInputView
                style={{width: '80%', height: 200}}
                pinCount={4}
                code={otp}
                onCodeChanged = {code => {setOtp(code)}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                })}
            />
        <Button onPress={onSubmit} style={styles.loginButton}  color="#fff">Submit</Button>

        </View>
        )
} 
export default OtpScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FFFFFF",
        paddingHorizontal:20
    },  
    borderStyleBase: {
        width: 45,
        height: 45
      },
      borderStyleHighLighted: {
        borderColor: "#333333",
      },
      underlineStyleBase: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderRadius:4,
        borderColor:"#333"
      },
      underlineStyleHighLighted: {
        borderColor: "#333333",
      },
      heading:{
        fontSize:20,
        textAlign:"left",
        fontWeight:"bold"
      },
    loginButton:{backgroundColor:colors.PRIMARY,color:"#ffffff",width:"100%",padding:6}

});