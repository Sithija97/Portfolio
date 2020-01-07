import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

//subcomponents
import CategoryScreen from "./subComponents/Category";

export default class ExploreScreen extends React.Component {
  UNSAFE_componentWillMount() {
    this.headerHeight = 80;
    if (Platform == "android") {
      this.headerHeight = 100 + StatusBar.currentHeight;
    }
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <View style={styles.search}>
              <Icon name="md-search" size={24} style={{ marginRight: 10 }} />
              <TextInput
                placeholder="Try Kandy.."
                placeholderTextColor="grey"
                style={styles.input}
              />
            </View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={styles.SithiView}>
              <Text style={styles.SithiText}>
                What can we help you find, Sithija?
              </Text>
            </View>

            <View style={styles.ScrollConatiner}>
              <ScrollView
              horizontal="true">
                <CategoryScreen
                  ImageUrl={require("../assets/home.jpg")}
                  name="Home"
                />

                <CategoryScreen
                  ImageUrl={require("../assets/home.jpg")}
                  name="Home"
                />
              </ScrollView>
            </View>
          </ScrollView>
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
  header: {
    height: this.headerHeight,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd"
  },
  input: {
    flex: 1,
    fontWeight: "700",
    backgroundColor: "white"
  },
  search: {
    flexDirection: "row",
    padding: 12,
    marginHorizontal: 20,
    backgroundColor: "white",
    marginTop: 30,
    marginTop: Platform.OS == "android" ? 30 : null
  },
  SithiText: {
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 20
  },

  SithiView: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20
  },

  ScrollConatiner: {
    height: 130,
    marginTop: 20
  },

  ScrollInsider: {
    height: 130,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: "#dddddd"
  },

  HomeText: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10
  }
});
