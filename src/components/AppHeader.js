import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const AppHeader = (props) => (
    <View style={styles.container}>
        <Text>AppHeader</Text>
    </View>
    )
export default AppHeader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});