import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class TripsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.container}>Trips</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
