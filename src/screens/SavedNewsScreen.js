import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const SavedNewsScreen = (props) => (
    <View style={styles.container}>
        <Text>SavedNewsScreen</Text>
    </View>
    )
export default SavedNewsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});