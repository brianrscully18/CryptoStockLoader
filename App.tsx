import { FlatList, Text, View } from "react-native";
import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";
import ListItem, { ListItemProps } from "./components/ListItem";
import { SAMPLE_DATA } from "./assets/data/sampleData";
import styles from "./constants/Styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-gesture-handler";
import Chart from "./components/Chart";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

export default function App() {
  const [selectedCoinData, setSelectedCoinData] =
    useState<ListItemProps | null>(null);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["50%"], []);
  const openModal = (item: ListItemProps) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current?.present();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <Text style={styles.topTitle}>Crypto</Text>
          </View>
          <View style={styles.divider} />

          <FlatList
            keyExtractor={(item) => item.id}
            data={SAMPLE_DATA}
            renderItem={({ item }) => (
              <ListItem
                name={item.name}
                ticker={item.symbol}
                price={item.current_price}
                performance={item.price_change_percentage_7d_in_currency}
                logoURL={item.image}
                onPress={() => openModal(item)}
              />
            )}
          />
        </View>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          style={styles.bottomSheet}
        >
          <BottomSheetView style={styles.modalContentContainer}>
            {selectedCoinData ? (
              <Chart
                currentPrice={selectedCoinData.current_price}
                logoURL={selectedCoinData.image}
                name={selectedCoinData.name}
                symbol={selectedCoinData.symbol.toUpperCase()}
                priceChangePercentage7d={
                  selectedCoinData.price_change_percentage_7d_in_currency
                }
                sparkline={selectedCoinData.sparkline_in_7d.price}
                marketCap={selectedCoinData.market_cap}
              />
            ) : null}
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
