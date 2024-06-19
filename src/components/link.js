import { TouchableOpacity, View } from "react-native";
import TextWhite from "./textwhite";

const Link = ({ texto, onPres }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPres}>
        <TextWhite texto={texto} />
      </TouchableOpacity>
    </View>
  );
};

export default Link;
