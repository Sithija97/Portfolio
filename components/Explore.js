import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"

export default class ExploreScreen extends React.Component {
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
  header:{height:80, backgroundColor:"white",
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
      
  }
});
