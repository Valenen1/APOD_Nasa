import { Image, StyleSheet, View } from "react-native";
import Boton from "./buttonDetalles";
import TextWhite from "./textwhite";

const Visor = ({ Data, onPres }) => {
  return (
    <View style={styles.container}>
      <TextWhite texto={Data.title} />
      <Image style={styles.img} source={{ uri: Data.url }} />
      <TextWhite texto={Data.date} />
      <Boton onPres={onPres} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 10,
    borderColor: "#fc3d21",
    borderWidth: 2,
    borderRadius: 10,
  },
  img: {
    alignSelf: "center",
    width: 270,
    height: 200,
    borderRadius: 10,
  },
});

export default Visor;
