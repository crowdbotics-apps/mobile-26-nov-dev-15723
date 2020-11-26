import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { CheckBox_4: false, CheckBox_5: true }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <Text>Sample text content</Text>
      <CheckBox
        title=""
        disabled={true}
        containerStyle={styles.CheckBox_4}
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
      <CheckBox
        title=""
        disabled={true}
        containerStyle={styles.CheckBox_5}
        checked={this.state.CheckBox_5}
        onPress={nextChecked => this.setState({ CheckBox_5: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_2: {},
  Text_3: {},
  CheckBox_4: {
    width: 100,
    marginLeft: 5,
    marginRight: 10,
    marginTop: 15,
    alignSelf: "center",
    textDecorationLine: "line-through",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 19
  },
  View_1: {},
  Text_2: {},
  Text_3: {},
  CheckBox_4: {
    width: 100,
    marginLeft: 5,
    marginRight: 10,
    marginTop: 15,
    alignSelf: "center",
    textDecorationLine: "line-through",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 19
  },
  CheckBox_5: {
    width: 100,
    marginLeft: 5,
    marginRight: 10,
    marginTop: 15,
    alignSelf: "center",
    textDecorationLine: "line-through",
    textTransform: "uppercase",
    lineHeight: 18,
    letterSpacing: 19
  }
})
