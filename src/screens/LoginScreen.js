import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { TextInput, Button } from 'react-native-paper';
import colors from "../constants/colors";

const LoginScreen = (props) => {
    const [mobileNumber, setMobileNumber] = React.useState("");
    const onLogin = ()=>{
        props.navigation.navigate("OtpScreen");
    }
    return(
    <View style={styles.container}>
        <View style={{alignItems:"center"}}>
        <Image source={require("../assets/images/newsicon.png")} style={{width:200,height:200}} />   
        <Text style={{fontSize:20}}>News App</Text>
        </View>
        <TextInput
            label="Mobile Number"
            value={mobileNumber}
            style={{width:"100%"}}
            underlineColor={colors.GRAY}
            activeUnderlineColor={colors.MAT_BLACK}
            onChangeText={text => setMobileNumber(text)}
            keyboardType="numeric"
            
        />
        <Button onPress={onLogin} style={styles.loginButton}  color="#fff">Login</Button>
    </View>
    )
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:20,
        paddingVertical:40,
        backgroundColor:"#fff"
    },
    loginButton:{backgroundColor:colors.PRIMARY,color:"#ffffff",width:"100%",padding:6}
});