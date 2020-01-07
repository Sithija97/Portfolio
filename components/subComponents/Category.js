import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class CategoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.ScrollInsider}>
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.ImageUrl}
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          />
        </View>
        <View style={styles.HomeText}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    ScrollInsider:{
        height:130,
        width:130,
        marginLeft:20,
        borderWidth:0.5,
        borderColor:'#dddddd'
  
    },
  
    HomeText:{
        flex:1,
        paddingLeft:10,
        paddingTop:10
    }
});
