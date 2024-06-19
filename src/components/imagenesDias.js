import { Image, StyleSheet, View } from "react-native";
import TextWhite from "./textwhite";
import Boton from "./buttonDetalles";

const ImagenesDias = ({ title, date, url, onPres }) => {
  return (
    <View style={styles.container}>
      <View style={styles.izqcontainer}>
        <TextWhite texto={title} />
        <TextWhite texto={date} />
        <Boton onPres={onPres} />
      </View>
      <View style={styles.dercontainer}>
        <Image source={{ uri: url }} style={styles.img} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 90,
    borderRadius: 25,
  },
  container: {
    marginTop: 10,
    flexDirection: "row",
    padding: 5,
    borderColor: "#fc3d21",
    borderWidth: 1,
    borderRadius: 10,
  },
  izqcontainer: {
    flex: 0.7,
    alignItems: "flex-start",
  },
  dercontainer: {
    flex: 0.3,
    alignContent: "flex-end",
  },
});

export default ImagenesDias;
