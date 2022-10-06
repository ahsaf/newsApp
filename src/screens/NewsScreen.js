import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from "react-native";
import AppHeader from "../components/AppHeader";
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get("window");
const NewsScreen = (props) => {
    const [entries,setEntries] = useState([
        {id:1,title:"Test News",date:"10 min ago", image:"https://i.guim.co.uk/img/media/8cbfb533505814b052257090e2e21354c6bb084f/0_143_1280_768/master/1280.jpg?width=465&quality=85&dpr=1&s=none"},
        {id:2,title:"Test News 2", image:"https://media.npr.org/assets/img/2022/10/04/gettyimages-12436214131-a5591d73f6ef7a2c06902a823e2798fbb34774bc-s1100-c50.jpg"},
        {id:2,title:"Test News 3", image:"https://cdn.britannica.com/18/194818-050-E7A7A993/view-Kiev-Ukraine.jpg"}
    ]);
    const  _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Image source={{uri:item.image}} style={{width:width - 20,height:500}} />
                <View style={styles.newsTitle}>
                    <Text style={styles.title}>{ item.date }</Text>
                    <Text style={styles.title}>{ item.title }</Text>
                </View>
    
            </View>
        );
    }
    return(
        <View style={styles.container}>
            <AppHeader 

            />
            <ScrollView>
            <View style={{height:500}}>
             <Carousel
              data={entries}
              renderItem={_renderItem}
              itemWidth={width - 60}
              sliderWidth={width}
              layout={'default'}
              
            />
            </View>
            <View style={styles.body}>
                <Text style={{fontSize:20,fontWeight:"500"}}>No Staring</Text>
                <Text style={{marginTop:8}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View>
            </ScrollView>
        </View>
    )
}
export default NewsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
    slide:{
        borderRadius:12,
        overflow:"hidden",
        
    },
    newsTitle:{
        position:"absolute",
        bottom:16,
        left:16
    },
    title:{
        fontSize:18,
        fontWeight:"500",
        color:"#fff"
    },
    body:{
        padding:30
    }
});