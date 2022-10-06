import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

const AppHeader = (props) => (
    <View style={styles.container}>
        <Text style={{fontSize:16,fontWeight:"500"}}>Latest News</Text>
        <Image source={require("../assets/images/search.png")} style={{width:24,height:24}} />
    </View>
    )
export default AppHeader;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent:"space-between",
        height:60,
        paddingHorizontal:20,
        backgroundColor:"#fff",
        flexDirection:"row"
    }
});