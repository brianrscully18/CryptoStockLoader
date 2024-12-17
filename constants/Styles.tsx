import { StyleSheet } from "react-native";

export const colors = {
  background: "#FFF",
  pageTitle: "#FFF",
  stockTitle: "#FFF",
  ticker: "#FFF",
  price: "#FFF",
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
    backgroundColor: "#A9ABB1",
    marginHorizontal: 16,
    marginTop: 16,
  },
  listingWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
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
    color: "#000",
  },
  ticker: {
    fontSize: 16,
    color: "#b3b3b3",
    marginTop: 2,
  },
  price: {
    fontWeight: "bold",
  },
  performance: {},
});

export default styles;
