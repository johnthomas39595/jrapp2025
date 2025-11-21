import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const user = {
  name: "John",
  email: "john@gmail.com",
  avatar: {
    uri: "https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000",
  },
};

export default function ProfilePage() {
  return (
    <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingBottom: 20 }}>

      {/* PROFILE BANNER */}
      <LinearGradient
        colors={["#1d0231ff", "#522772"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.profileBanner} >
        <Image source={user.avatar} style={styles.avatar} />

        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>

        <TouchableOpacity style={styles.arrowButton}>
          <Ionicons name="arrow-forward" size={22} color="#fff" />
        </TouchableOpacity>

      </LinearGradient>

      {/* CATEGORY BOXES */}
      <View style={styles.container1}>

        <TouchableOpacity style={styles.box}>
          <Ionicons name="people" size={36} color="#4a1a64" />
          <Text style={styles.title}>Donations</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <MaterialCommunityIcons name="checkbox-marked" size={36} color="#4a1a64" />
          <Text style={styles.title}>Subscriptions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} >
          <MaterialCommunityIcons name="hands-pray" size={36} color="#4a1a64" />
          <Text style={styles.title}>Blessing Plans</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}  >
          <MaterialCommunityIcons name="fire" size={36} color="#4a1a64" />
          <Text style={styles.title}>Revival Plan</Text>
        </TouchableOpacity>

      </View>


      {/* SETTINGS SECTION */}
      <View style={styles.Container2}>
        <Text style={styles.Settings}>Settings</Text>

        <View style={styles.settingsContainer}>

          {/* PERMISSIONS */}
          <TouchableOpacity style={styles.settingsContents} onPress={() => router.push("/profile/permissions")}>
            <View style={styles.leftRow}>
              <MaterialCommunityIcons name="script-text-key" size={24} color="#522772" />
              <Text style={styles.settingsText}>Permissions</Text>
            </View>
            <MaterialIcons name="arrow-right" size={24} color="#522772" />
          </TouchableOpacity>

          {/* APP LANGUAGE */}
          <TouchableOpacity style={styles.settingsContents} onPress={() => router.push("/profile/AppLanguages")}>
            <View style={styles.leftRow}>
              <MaterialIcons name="language" size={24} color="#522772" />
              <Text style={styles.settingsText}>App Language</Text>
            </View>
            <MaterialIcons name="arrow-right" size={24} color="#522772" />
          </TouchableOpacity>

          {/* CHANGE PASSWORD */}
          <TouchableOpacity style={styles.settingsContents} onPress={() => router.push("/profile/ChangePassword")}>
            <View style={styles.leftRow}>
              <Ionicons name="lock-open" size={24} color="#522772" />
              <Text style={styles.settingsText}>Change Password</Text>
            </View>
            <MaterialIcons name="arrow-right" size={24} color="#522772" />
          </TouchableOpacity>

          {/* CONTACT PREFERENCE */}
          <TouchableOpacity style={styles.settingsContents} onPress={() => router.push("/profile/ContactPreference")}>
            <View style={styles.leftRow}>
              <MaterialIcons name="room-preferences" size={24} color="#522772" />
              <Text style={styles.settingsText}>Contact Preference</Text>
            </View>
            <MaterialIcons name="arrow-right" size={24} color="#522772" />
          </TouchableOpacity>

          {/* NOTIFICATIONS */}
          <TouchableOpacity
            style={styles.settingsContents}>
            <View style={styles.leftRow}>
              <MaterialIcons name="edit-notifications" size={24} color="#522772" />
              <Text style={styles.settingsText}>Notifications</Text>
            </View>
            <MaterialIcons name="arrow-right" size={24} color="#522772" />
          </TouchableOpacity>

          {/* FAMILY MEMBERS */}
          <TouchableOpacity
            style={styles.settingsContents}>
            <View style={styles.leftRow}>
              <FontAwesome6 name="house" size={24} color="#522772" />
              <Text style={styles.settingsText}>Family Members</Text>
            </View>
            <MaterialIcons name="arrow-right" size={24} color="#522772" />
          </TouchableOpacity>
        </View>
      </View>

      {/* OTHERS */}
      <View style={styles.Container2}>
        <Text style={styles.Settings}>Others</Text>


        <View style={styles.settingsContainer}>

          {/* SHARE APP */}
          <TouchableOpacity style={styles.settingsContents}>
            <View style={styles.leftRow}>
              <Ionicons name="share-social-sharp" size={24} color="#522772" />
              <Text style={styles.settingsText}>Share App</Text>
            </View>
            <MaterialIcons name="arrow-right" size={24} color="#522772" />
          </TouchableOpacity>

          {/* DELETE ACCOUNT */}
          <TouchableOpacity style={styles.settingsContents}>
            <View style={styles.leftRow}>
              <MaterialCommunityIcons name="delete-empty" size={24} color="#522772" />
              <Text style={styles.settingsText}>Delete Account</Text>
            </View>
            <MaterialIcons name="arrow-right" size={24} color="#522772" />
          </TouchableOpacity>

          {/* LOGOUT */}
          <TouchableOpacity style={styles.settingsContents}>
            <View style={styles.leftRow}>
              <Ionicons name="log-out" size={24} color="#522772" />
              <Text style={styles.settingsText}>Logout</Text>
            </View>
            <MaterialIcons name="arrow-right" size={24} color="#522772" />
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  profileBanner: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: "relative",
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginRight: 20,
    borderWidth: 5,
    borderColor: "#d2c2d6ff",
    elevation: 10,
  },

  userName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },

  userEmail: {
    fontSize: 18,
    color: "#e8d9f3",
    marginTop: 2,
  },

  arrowButton: {
    position: "absolute",
    right: 20,
    top: 20,
    padding: 5,
  },

  container1: {
    marginTop: 10,
    paddingHorizontal: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  box: {
    width: "49.5%",
    height: 100,
    backgroundColor: "#EAE4F1",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 3,
  },

  title: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "600",
    color: "#522772",
  },

  Container2: {
    width: "97%",
    backgroundColor: "#EAE4F1",
    paddingVertical: 20,
    marginTop: 8,
    borderRadius: 15,
    marginLeft: 5,
  },

  Settings: {
    fontSize: 17,
    fontWeight: "600",
    color: "#522772",
    paddingBottom: 10,
    marginLeft: 15,
  },

  settingsContainer: {
    flexDirection: "column",
    paddingHorizontal: 5,
  },

  settingsContents: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 5,
  },

  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  settingsText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#522772",
  },
});
