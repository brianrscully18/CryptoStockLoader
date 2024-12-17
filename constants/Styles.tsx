import { StyleSheet } from "react-native";

export const colors = {
  background: "#FFF",
  pageTitle: "#000",
  stockTitle: "#000",
  ticker: "#676767",
  price: "#000",
  performancePositive: "#34C759",
  performanceNegative: "#FF3830",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 16,
    fontWeight: "bold",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.background,
    marginHorizontal: 16,
    marginTop: 16,
  },
  listingWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  leftWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightWrapper: {
    alignItems: "flex-end",
  },
  image: {
    height: 48,
    width: 48,
    objectFit: "contain",
    marginRight: 10,
  },
  titleTickerWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.stockTitle,
  },
  ticker: {
    fontSize: 16,
    color: colors.ticker,
    marginTop: 2,
  },
  price: {
    fontWeight: "bold",
  },
  performance: {},
});

export default styles;
