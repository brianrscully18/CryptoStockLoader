import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles, { colors } from "../constants/Styles";

export interface ListItemProps {
  name: string;
  ticker: string;
  price: number;
  performance: number;
  logoURL: string;
  onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
  name,
  ticker,
  price,
  performance,
  logoURL,
  onPress,
}) => {
  const performanceColor =
    performance > 0 ? colors.performancePositive : colors.performanceNegative;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.listingWrapper}>
        {/* Left Hand Side */}
        <View style={styles.leftWrapper}>
          <Image
            source={{
              uri: logoURL,
            }}
            style={styles.image}
          ></Image>
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.ticker}>{ticker.toUpperCase()}</Text>
          </View>
        </View>

        {/* Right Hand Side */}
        <View style={styles.rightWrapper}>
          <Text style={styles.price}>
            ${price.toLocaleString("en-US", { currency: "USD" })}
          </Text>
          <Text style={[styles.performance, { color: performanceColor }]}>
            {performance.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
