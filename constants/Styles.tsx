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
  // MAIN APPLICATION ***** MAIN APPLICATION ***** MAIN APPLICATION *****
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
  // LISTING ***** LISTING ***** LISTING *****
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
  performance: {
    backgroundColor: colors.background,
  },
  // MODAL WINDOW ***** MODAL WINDOW ***** MODAL WINDOW *****
  modalContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  modalContentContainer: {
    flex: 1,
    minHeight: 400,
  },
  bottomSheet: {
    shadowColor: "000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  // MODAL CHART AND INFORMATION ***** MODAL CHART AND INFORMATION *****
  chartWrapper: {
    marginVertical: 16,
  },
  titlesWrapper: {
    padding: 1,
    marginHorizontal: 16,
  },
  upperTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upperLeftTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 14,
    color: colors.ticker,
    paddingLeft: 5,
  },
  lowerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
  },
  boldTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  chartImage: {
    width: 36,
    height: 36,
  },
  chartLineWrapper: {
    marginTop: 10,
  },
});

export default styles;
