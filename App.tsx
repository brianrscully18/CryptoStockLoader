import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "./components/ListItem";
import { SAMPLE_DATA } from "./assets/data/sampleData";
import styles from "./constants/Styles";

export default function App() {
  return (
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
            performance={item.price_change_percentage_24h}
            logoURL={item.image}
          />
        )}
      />
    </View>
  );
}
