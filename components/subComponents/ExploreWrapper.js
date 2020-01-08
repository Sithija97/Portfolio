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
  Image,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

//subcomponents
import CategoryScreen from "./Category";

const { height, width } = Dimensions.get("window");

export default class ExploreWrapperScreen extends React.Component {
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
          <ScrollView scrollEventThrottle={16} vertical={true}>
            {/* showsHorizontalScrollIndicator={false}> */}

            <View style={styles.SithiView}>
              <Text style={styles.SithiText}>
                What can we help you find, Sithija?
              </Text>
            </View>

            <View style={styles.ScrollConatiner}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <CategoryScreen
                  ImageUrl={require("./imgs/home.jpg")}
                  name="Home"
                />

                <CategoryScreen
                  ImageUrl={require("./imgs/experiences.jpg")}
                  name="Experiences"
                />

                <CategoryScreen
                  ImageUrl={require("./imgs/restaurant.jpg")}
                  name="Restaurant"
                />
              </ScrollView>
            </View>
            <View style={styles.AirbnbIntro}>
              <Text style={styles.AirbnbIntroT}>Introducing Airbnb Plus</Text>
              <Text style={{ marginTop: 10, fontWeight: "100" }}>
                A new Selection of homes verified for quality and comfort
              </Text>
              <View style={styles.HomeImg}>
                <Image
                  source={require("./imgs/home.jpg")}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                    borderRadius: 6
                  }}
                />
              </View>
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
    height: this.startHeaderHeight,
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
  AirbnbIntro: {
    marginTop: 40,
    paddingHorizontal: 20
  },
  AirbnbIntroT: {
    fontWeight: "700",
    fontSize: 24
  },

  HomeImg: {
    width: width - 40,
    height: 200,
    marginTop: 20
  }
});
