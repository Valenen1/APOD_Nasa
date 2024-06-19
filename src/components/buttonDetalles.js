import { TouchableOpacity, View } from "react-native";
import TextWhite from "./textwhite";

const Boton = ({ onPres }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPres}>
        <TextWhite texto="Detalles" />
      </TouchableOpacity>
    </View>
  );
};

export default Boton;
