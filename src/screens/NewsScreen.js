import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const NewsScreen = (props) => {
    return(
        <View style={styles.container}>
            <Text>NewsScreen</Text>
        </View>
    )
}
export default NewsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});