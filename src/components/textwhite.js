import { Text, View } from "react-native";

const TextWhite = ({ texto }) => {
  return (
    <View>
      <Text style={{ color: "white", padding: 3 }}>{texto}</Text>
    </View>
  );
};

export default TextWhite;
