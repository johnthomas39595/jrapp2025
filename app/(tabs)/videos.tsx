import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

export default function Magazines() {
  const [activeCategory, setActiveCategory] = useState("Videos");
  const categories = ["Videos", "Songs"];
  
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topBar}>
        {/* CATEGORY BUTTONS */}
        <View style={styles.centerWrapper}>
        <View style={styles.categoryRow}>
          {categories.map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.categoryButton, activeCategory === item && styles.categoryActive]}
              onPress={() => setActiveCategory(item)}
            >
              <Text style={[styles.categoryText, activeCategory === item && styles.categoryTextActive]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        </View>
      </View>

      {/* MAGAZINE GRID */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
         <View>

         </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    width:"100%",
    height:50,
    backgroundColor: "#522772",
    flexDirection: "row",
    alignItems: "center",
  },
  centerWrapper: {
    flex: 1,
    alignItems: "center",
  },

  categoryRow: {
    flexDirection: "row",
    flex: 1,
  },
  categoryButton: {
    width:"50%",
    paddingVertical: 4,
    paddingHorizontal: 15,
    backgroundColor: "#00000040",
  },
  categoryActive: {
    backgroundColor: "#ffffff40",
  },
  categoryText: {
    fontSize: 18,
    color: "#fff",
    textAlign:"center",
    marginTop:10,
  },
  categoryTextActive: {
    fontWeight: "700",
  },
  yearButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 8,
    marginLeft: 10,
  },
  yearText: {
    color: "#522772",
    fontSize: 12,
    fontWeight: "700",
    marginRight: 3,
  },

  scrollContent: {
    padding: 14,
    paddingBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 5,
    marginBottom: 10,
    alignItems: "center",
    elevation: 3,
  },
  image: {
    width: "95%",
    height: 250,
    borderRadius: 10,
    resizeMode: "cover",
  },
  dateText: {
    marginVertical: 5,
    fontSize: 12,
    fontWeight: "500",
    color: "#522772",
  },
  downloadBtn: {
    backgroundColor: "#522772",
    paddingVertical: 4,
    paddingHorizontal: 60,
    borderRadius: 10,
  },
  downloadText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "#00000080",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  yearOption: {
    paddingVertical: 10,
  },
  yearOptionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#522772",
  },
});
