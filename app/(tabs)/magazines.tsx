import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

export default function Magazines() {
  const [activeCategory, setActiveCategory] = useState("Yesu Viduvikkiraar");

  const [selectedYear, setSelectedYear] = useState("2025");
  const [yearModalVisible, setYearModalVisible] = useState(false);

  const [language, setLanguage] = useState("Tamil");
  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  const categories = ["Yesu Viduvikkiraar", "Youth", "Kids"];
  const years = ["2025", "2024", "2023", "2022"];
  const languages = ["Tamil","English","Hindi","Kannada","Telugu","Malayalam","Gujarati","Bengali",];

  /** GENERAL MAGAZINES **/
  const GeneralMagazines = [
    { id: 1, img: require("@/assets/images/Magazines/General/Mag_nov.png"), month: "Nov 2025" },
    { id: 2, img: require("@/assets/images/Magazines/General/Mag_oct.png"), month: "Oct 2025" },
    { id: 3, img: require("@/assets/images/Magazines/General/Mag_sep.png"), month: "Sep 2025" },
    { id: 4, img: require("@/assets/images/Magazines/General/Mag_aug.png"), month: "Aug 2025" },
    { id: 5, img: require("@/assets/images/Magazines/General/Mag_jul.png"), month: "Jul 2025" },
    { id: 6, img: require("@/assets/images/Magazines/General/Mag_jun.png"), month: "Jun 2025" },
    { id: 7, img: require("@/assets/images/Magazines/General/Mag_may.png"), month: "May 2025" },
    { id: 8, img: require("@/assets/images/Magazines/General/Mag_apr.png"), month: "Apr 2025" },
    { id: 9, img: require("@/assets/images/Magazines/General/Mag_mar.png"), month: "Mar 2025" },
    { id: 10, img: require("@/assets/images/Magazines/General/Mag_feb.png"), month: "Feb 2025" },
    { id: 11, img: require("@/assets/images/Magazines/General/Mag_jan.png"), month: "Jan 2025" },
  ];

  /** YOUTH MAGAZINES **/
  const youthMagazines = [
    { id: 1, img: require("@/assets/images/Magazines/Youth/Y_nov.png"), month: "Nov 2025" },
    { id: 2, img: require("@/assets/images/Magazines/Youth/Y_oct.png"), month: "Oct 2025" },
    { id: 3, img: require("@/assets/images/Magazines/Youth/Y_sep.png"), month: "Sep 2025" },
    { id: 4, img: require("@/assets/images/Magazines/Youth/Y_aug.png"), month: "Aug 2025" },
    { id: 5, img: require("@/assets/images/Magazines/Youth/Y_jul.png"), month: "Jul 2025" },
    { id: 6, img: require("@/assets/images/Magazines/Youth/Y_jun.png"), month: "Jun 2025" },
    { id: 7, img: require("@/assets/images/Magazines/Youth/Y_may.png"), month: "May 2025" },
    { id: 8, img: require("@/assets/images/Magazines/Youth/Y_apr.png"), month: "Apr 2025" },
    { id: 9, img: require("@/assets/images/Magazines/Youth/Y_mar.png"), month: "Mar 2025" },
    { id: 10, img: require("@/assets/images/Magazines/Youth/Y_feb.png"), month: "Feb 2025" },
    { id: 11, img: require("@/assets/images/Magazines/Youth/Y_jan.png"), month: "Jan 2025" },
  ];

  /** KIDS MAGAZINES **/
  const kidsMagazines = [
    { id: 1, img: require("@/assets/images/Magazines/Kids/K_nov.png"), month: "Nov 2025" },
    { id: 2, img: require("@/assets/images/Magazines/Kids/K_oct.png"), month: "Oct 2025" },
    { id: 3, img: require("@/assets/images/Magazines/Kids/K_sep.png"), month: "Sep 2025" },
    { id: 4, img: require("@/assets/images/Magazines/Kids/K_aug.png"), month: "Aug 2025" },
    { id: 5, img: require("@/assets/images/Magazines/Kids/K_jul.png"), month: "Jul 2025" },
    { id: 6, img: require("@/assets/images/Magazines/Kids/K_jun.png"), month: "Jun 2025" },
    { id: 7, img: require("@/assets/images/Magazines/Kids/K_may.png"), month: "May 2025" },
    { id: 8, img: require("@/assets/images/Magazines/Kids/K_apr.png"), month: "Apr 2025" },
    { id: 9, img: require("@/assets/images/Magazines/Kids/K_mar.png"), month: "Mar 2025" },
    { id: 10, img: require("@/assets/images/Magazines/Kids/K_feb.png"), month: "Feb 2025" },
    { id: 11, img: require("@/assets/images/Magazines/Kids/K_jan.png"), month: "Jan 2025" },
  ];

  /** CATEGORY SWITCH **/
  let magazinesToShow = GeneralMagazines;
  if (activeCategory === "Youth") magazinesToShow = youthMagazines;
  if (activeCategory === "Kids") magazinesToShow = kidsMagazines;

  return (
    <View style={{ flex: 1 }}>

      {/* TOP BAR */}
      <View style={styles.topBar}>

        {/* LANGUAGE BUTTON */}
        <TouchableOpacity onPress={() => setLanguageModalVisible(true)}>
          <Text style={styles.language}>{language}</Text>
        </TouchableOpacity>

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

        {/* YEAR BUTTON */}
        <TouchableOpacity style={styles.yearButton} onPress={() => setYearModalVisible(true)}>
          <Text style={styles.yearText}>{selectedYear}</Text>
          <Ionicons name="chevron-down" size={16} color="#522772" />
        </TouchableOpacity>
      </View>

      {/* MAGAZINE GRID */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.grid}>
          {magazinesToShow.map((m) => (
            <View key={m.id} style={styles.card}>
              <Image source={m.img} style={styles.image} />
              <Text style={styles.dateText}>Released: {m.month}</Text>

              <TouchableOpacity style={styles.downloadBtn}>
                <Text style={styles.downloadText}>Download</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* YEAR MODAL */}
      <Modal visible={yearModalVisible} transparent animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setYearModalVisible(false)}>
          <View style={styles.modalBox}>
            {years.map((year) => (
              <TouchableOpacity
                key={year}
                style={styles.yearOption}
                onPress={() => {
                  setSelectedYear(year);
                  setYearModalVisible(false);
                }}
              >
                <Text style={styles.yearOptionText}>{year}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      {/* LANGUAGE MODAL */}
      <Modal visible={languageModalVisible} transparent animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setLanguageModalVisible(false)}>
          <View style={styles.modalBox}>
            {languages.map((lang) => (
              <TouchableOpacity
                key={lang}
                style={styles.yearOption}
                onPress={() => {
                  setLanguage(lang);
                  setLanguageModalVisible(false);
                }}
              >
                <Text style={styles.yearOptionText}>{lang}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#522772",
    paddingVertical: 15,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  language: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
    marginRight: 5,
    marginLeft:5,
  },
  centerWrapper: {
    flex: 1,
    alignItems: "center",
  },

  categoryRow: {
    flexDirection: "row",
    flex: 1,
    gap: 5,
  },
  categoryButton: {
    paddingVertical: 4,
    paddingHorizontal: 15,
    backgroundColor: "#00000040",
    borderRadius: 7,
  },
  categoryActive: {
    backgroundColor: "#ffffff40",
  },
  categoryText: {
    fontSize: 12,
    color: "#fff",
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
