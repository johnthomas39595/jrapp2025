import { Ionicons, } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LanguagePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    "Tamil",
    "English",
    "हिंदी (Hindi)",
    "മലയാളം (Malayalam)",
    "ಕನ್ನಡ (Kannada)",
    "తెలుగు (Telugu)",
    "ગુજરાતી (Gujarati)",
  ];

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#522772" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Language</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* Info bar */}
      <View style={styles.infoBar}>
        <Text style={styles.infoText}>Choose a Language</Text>
        <TouchableOpacity style={styles.saveButton} onPress={() => router.back()}>
            <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Language Lists */}
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {languages.map((lang, index) => (
          <TouchableOpacity key={index} style={styles.row} onPress={() => setSelectedLanguage(lang)}>
            <Text style={styles.textContainer}>{lang}</Text>
            <View style={styles.radioOuter}>
              {selectedLanguage === lang && <View style={styles.radioInner} />}
            </View>

          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

/* Styles */
const styles = StyleSheet.create({

  container: { 
    flex: 1, 
    backgroundColor: "#fff" 
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:25,
    paddingVertical:20,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#e4c5ecff",
  },

  headerTitle: { 
    fontSize: 20, 
    fontWeight: "700", 
    color: "#522772" 
  },

  saveButton:{
    borderRadius: 5,
    marginLeft:200,
    justifyContent: "center",
    alignItems: "center",
  },

  saveText:{
    color:"#522772",
    fontWeight:"700",
    fontSize: 15,
  },

  infoBar: { 
    flexDirection: "row",
    backgroundColor: "#EAE4F1", 
    padding: 25, 
    paddingHorizontal: 15 
  },

  infoText: { 
    color: "#522772", 
    fontSize: 15 
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#f3ecf7",
  },

  textContainer: { 
    flex: 1, 
    marginLeft: 10,
    fontSize:18,
    color: "#522772", 
    fontWeight: "500", 
  },

  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#dfbdf8ff",
    alignItems: "center",
    justifyContent: "center",
  },


  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#7d6291ff",
  },

});
