import React, { useState } from "react";
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Switch,} from "react-native";
import {Ionicons,MaterialCommunityIcons,MaterialIcons,FontAwesome,} from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function PermissionsPage() {
  const router = useRouter();
  const [contacts, setContacts] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [location, setLocation] = useState(false);
  const [media, setMedia] = useState(false);
  const [camera, setCamera] = useState(false);
  const [microphone, setMicrophone] = useState(false);

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#522772" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Permissions</Text>

        <View style={{ width: 26 }} />
      </View>

      {/* Info bar */}
      <View style={styles.infoBar}>
        <Text style={styles.infoText}>
          Do we have your permission to access the following?
        </Text>
      </View>

      {/* List */}
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {[
          {
            key: "contacts",
            Icon: <MaterialCommunityIcons name="account-group" size={30} color="#522772" />,
            title: "Contacts",
            desc: "To share with your Friends",
            value: contacts,
            setValue: setContacts,
          },
          {
            key: "notifications",
            Icon: <FontAwesome name="bell" size={28} color="#522772" />,
            title: "Notifications",
            desc: "To receive app notifications",
            value: notifications,
            setValue: setNotifications,
          },
          {
            key: "location",
            Icon: <Ionicons name="location-sharp" size={30} color="#522772" />,
            title: "Location",
            desc: "To find nearby branches",
            value: location,
            setValue: setLocation,
          },
          {
            key: "media",
            Icon: <MaterialIcons name="perm-media" size={30} color="#522772" />,
            title: "Media & Files",
            desc: "To upload images and videos",
            value: media,
            setValue: setMedia,
          },
          {
            key: "camera",
            Icon: <Ionicons name="camera" size={30} color="#522772" />,
            title: "Camera",
            desc: "To scan QR codes",
            value: camera,
            setValue: setCamera,
          },
          {
            key: "microphone",
            Icon: <MaterialCommunityIcons name="microphone" size={30} color="#522772" />,
            title: "Microphone",
            desc: "To voice search",
            value: microphone,
            setValue: setMicrophone,
          },
        ].map((item) => (
          <View key={item.key} style={styles.row}>
            {item.Icon}
            <View style={styles.textContainer}>
              <Text style={styles.permTitle}>{item.title}</Text>
              <Text style={styles.permDesc}>{item.desc}</Text>
            </View>

            <Switch
              value={item.value}
              onValueChange={item.setValue}
              trackColor={{ false: "#e8d7f0", true: "#8d43ca" }}
              thumbColor={"#fff"}
            />
          </View>
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

  infoBar: { 
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
    marginLeft: 12 
  },

  permTitle: { 
    fontSize: 17, 
    fontWeight: "700", 
    color: "#522772" 
  },

  permDesc: { 
    fontSize: 13, 
    color: "#7d628d", 
    marginTop: 2 
  },

});
