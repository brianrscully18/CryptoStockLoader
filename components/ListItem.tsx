import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import styles, { colors } from "../constants/Styles";

interface ListItemProps {
  name: string;
  ticker: string;
  price: number;
  performance: number;
  logoURL: string;
}

const ListItem: React.FC<ListItemProps> = ({
  name,
  ticker,
  price,
  performance,
  logoURL,
}) => {
  const performancePositive =
    performance > 0 ? colors.performancePositive : colors.performanceNegative;
  return (
    <TouchableOpacity>
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
          <Text style={[styles.performance, { color: performancePositive }]}>
            {performance.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
