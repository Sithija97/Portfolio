import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"

export default class ExploreScreen extends React.Component {
    UNSAFE_componentWillMount(){
        this.headerHeight = 80
        if(Platform=='android'){
            this.headerHeight=100 + StatusBar.currentHeight
        }
    }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
           <View style={{flex:1}}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <Icon name ="md-search" size={24} style={{marginRight:10}}/>
                        <TextInput
                            placeholder="Try Kandy.."
                            placeholderTextColor ="grey"
                            style={styles.input}/>
                    </View>
                </View>
           </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header:{height:this.headerHeight , backgroundColor:"white",
  borderBottomWidth:1, borderBottomColor:"#dddddd"},
  input:{
      flex:1,
      fontWeight:'700',
      backgroundColor:'white',
      
      
  },
  search:{
      flexDirection:'row',
      padding:12,
      marginHorizontal:20,
      backgroundColor:'white',
      marginTop:30,
      marginTop:Platform.OS == 'android' ? 30 : null
      
  }
});
