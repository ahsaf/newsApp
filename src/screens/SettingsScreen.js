import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

const SettingsScreen = (props) => (
    <View style={styles.container}>
        <Image source={require("../assets/images/user.jpeg")} style={{width:80,height:80,borderRadius:100}}  />
        <Text style={{marginTop:16,fontSize:18}}>Matt Damon</Text>
    </View>
    )
export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
        paddingTop:40,
        backgroundColor:"#fff"
    }
});