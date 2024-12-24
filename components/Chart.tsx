import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import styles, { colors } from "../constants/Styles";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
  ChartYLabel,
} from "@rainbow-me/animated-charts";

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

export const { width: SIZE } = Dimensions.get("window");

const Chart: React.FC<ChartItemProps> = ({
  currentPrice,
  logoURL,
  name,
  symbol,
  priceChangePercentage7d,
  sparkline,
  marketCap,
}) => {
  const formatUSD = (value) => {
    "worklet";
    if (value === "") {
      const formattedValue = `$${currentPrice.toLocaleString("en-US", {
        currency: "USD",
      })}`;
      return formattedValue;
    }
    const formattedValue = `$${parseFloat(value)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
    return formattedValue;
  };

  const performanceColor =
    priceChangePercentage7d > 0
      ? colors.performancePositive
      : colors.performanceNegative;

  return (
    <ChartPathProvider
      data={{ points: sparkline, smoothingStrategy: "bezier" }}
    >
      <View style={styles.chartWrapper}>
        <View style={styles.titlesWrapper}>
          <View style={styles.upperTitle}>
            <View style={styles.upperLeftTitle}>
              <Image
                source={{ uri: logoURL }}
                style={styles.chartImage}
              ></Image>
              <Text style={styles.subtitle}>
                {name} ({symbol})
              </Text>
            </View>
            <Text style={styles.subtitle}>7d</Text>
          </View>

          <View style={styles.lowerTitle}>
            <ChartYLabel format={formatUSD} style={styles.boldTitle} />
            {/* <Text style={styles.boldTitle}>
              ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
            </Text> */}
            <Text style={[styles.title, { color: performanceColor }]}>
              {priceChangePercentage7d.toFixed(2)}%
            </Text>
          </View>
        </View>
        <View style={styles.chartLineWrapper}>
          <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
          <ChartDot style={{ backgroundColor: "black" }} />
        </View>
      </View>
    </ChartPathProvider>
  );
};

export default Chart;
