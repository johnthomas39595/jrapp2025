import { Ionicons, MaterialCommunityIcons, MaterialIcons, } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Image, StyleSheet, TextInput, TouchableOpacity, View, } from "react-native";

export default function TabsLayout() {
  return (
    <>
      {/* TOP BAR */}
      <View style={styles.topBar}>
       
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />

      
        <View style={styles.searchBox}>
          <Ionicons name="search" size={22} color="#9371aeff" />

          <TextInput
            placeholder="Search here..."
            placeholderTextColor="#C9B7D8"
            style={styles.searchInput}/>

          <Ionicons name="mic-sharp" size={24} color="#9370aeff" />
        </View>

       
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="notifications-active" size={28} color="#522772" />
        </TouchableOpacity>

  
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIcons name="menu" size={30} color="#522772" />
        </TouchableOpacity>
      </View>

      {/* BOTTOM TABS */}
      <Tabs
        screenOptions={{
          headerShown: false,

          tabBarStyle: {
            height: 70,
            backgroundColor: "#EAE4F1",
            borderTopWidth: 0,
          },

          tabBarActiveTintColor: "#522772", 
          tabBarInactiveTintColor: "#9C7BB4", 

          tabBarLabelStyle: {
            fontSize: 11,
            marginBottom: 5,
            fontWeight: "600",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={26} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="videos"
          options={{
            title: "Videos",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="ondemand-video" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="live"
          options={{
            title: "Live",
            tabBarIcon: ({ color }) => (
              <Ionicons name="radio" size={26} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="magazines"
          options={{
            title: "Magazines",
            tabBarIcon: ({ color }) => (
              <Ionicons name="book" size={26} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-circle" size={28} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  /* TOP BAR */
  topBar: {
    width: "100%",
    height: 90,
    backgroundColor: "#EAE4F1",
    paddingTop: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  logo: {
    width: 55,
    height: 55,
    borderRadius: 40,
    resizeMode: "contain",
  },

  searchBox: {
    flex: 1,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#D3C4DF",
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#4A1A64",
    paddingVertical: 0,
  },

  iconButton: {
    padding: 3,
  },
});
