import { View, Text, Image } from "react-native";
import React from "react";
import styles, { colors } from "../constants/Styles";

interface PricePoint {
  x: number;
  y: number;
}

export interface ChartItemProps {
  currentPrice: number;
  logoURL: string;
  name: string;
  symbol: string;
  priceChangePercentage7d: number;
  sparkline: PricePoint[];
  marketCap: number;
}

const Chart: React.FC<ChartItemProps> = ({
  currentPrice,
  logoURL,
  name,
  symbol,
  priceChangePercentage7d,
  sparkline,
  marketCap,
}) => {
  const performanceColor =
    priceChangePercentage7d > 0
      ? colors.performancePositive
      : colors.performanceNegative;
  return (
    <View style={styles.chartWrapper}>
      <View style={styles.titlesWrapper}>
        <View style={styles.upperTitle}>
          <View style={styles.upperLeftTitle}>
            <Image source={{ uri: logoURL }} style={styles.chartImage}></Image>
            <Text style={styles.subtitle}>
              {name} ({symbol})
            </Text>
          </View>
          <Text style={styles.subtitle}>7d</Text>
        </View>

        <View style={styles.lowerTitle}>
          <Text style={styles.boldTitle}>
            ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
          </Text>
          <Text style={[styles.title, { color: performanceColor }]}>
            {priceChangePercentage7d.toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Chart;
