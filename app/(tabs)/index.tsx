import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Index() {

  const storyContents = [
    { id: 1, image: require("@/assets/images/StoryImages/walk-with-jesus.jpg"), name: "Walk with Jesus" },
    { id: 2, image: require("@/assets/images/StoryImages/Nov-promise.jpg"), name: "November Promise" },
    { id: 3, image: require("@/assets/images/StoryImages/jebikalam-vanga.jpg"), name: "Come! Let's Pray" },
    { id: 4, image: require("@/assets/images/StoryImages/arathipom-varungal.jpg"), name: "Come! Let's worship" },
    { id: 5, image: require("@/assets/images/StoryImages/family-blessing.jpg"), name: "Family Blessing" },
    { id: 6, image: require("@/assets/images/StoryImages/jolly-time.jpg"), name: "Jolly Time" },
    { id: 7, image: require("@/assets/images/StoryImages/ablaze.jpg"), name: "Ablaze" },
    { id: 8, image: require("@/assets/images/StoryImages/iniya-illaram.jpg"), name: "Iniya Illaram" },
  ];

  const upcomingEventsImages = [
    require("@/assets/images/event1.webp"),
    require("@/assets/images/event2.jpg"),
    require("@/assets/images/event3.jpg"),
    require("@/assets/images/event4.jpg"),
    require("@/assets/images/event5.jpg"),
  ];

  const monthlyMagazines = [
    require("@/assets/images/general.png"),
    require("@/assets/images/youth.png"),
    require("@/assets/images/kids.png"),
  ];

  return (
    <View style={{ flex: 1 }}>

      {/* FIXED TOP - LOCATION + STORIES (WILL NOT SCROLL) */}
      <View>
        {/* NEARBY BRANCHES BAR */}
        <TouchableOpacity style={styles.LocationBanner}>
          <View style={styles.locContents}>
            <MaterialIcons name="my-location" size={24} style={styles.locIcon} />
            <Text style={styles.locText}>Nearby Branches...</Text>
          </View>
        </TouchableOpacity>

        {/* SCROLL STORY BAR */}
        <ScrollView
          style={styles.scrollContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}>

          <View style={styles.scrollContents}>
            {storyContents.map((story) => (
              <TouchableOpacity key={story.id} style={styles.scrollitems}>
                <View style={styles.imageContainer}>
                  <Image source={story.image} style={styles.scrollImages} />
                </View>
                <Text style={styles.scrollText}>{story.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* SCROLLABLE CONTENT BELOW STORIES */}
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={true}>

        {/* IMAGE SLIDER */}
        <Image source={require("@/assets/images/01-1-scaled.jpg")} style={styles.slideImage} />

        {/* PROFILE IMAGE AND DAILY VERSE */}
        <View style={styles.profileContainer}>
          <View>

            <View style={styles.textContainer}>
             <Text style={styles.headerText}>Today's Bible Passage</Text>
             <Text style={styles.innerText}>சங்கீதம் 32</Text>
            </View>

            <View style={styles.textContainer}>
             <Text style={styles.headerText}>Today's Verse</Text>
             <Text style={styles.innerText}>நான் உனக்குப் போதித்து, நீ நடக்கவேண்டிய வழியை உனக்குக் காட்டுவேன்.</Text>
             <Text style={styles.innerText}>சங்கீதம் 32:8</Text>
            </View>

          </View>
          <Image source={require("@/assets/images/profilebanner2.png")} style={styles.profileImage2} />
        </View>

        {/* UPCOMING EVENTS */}
        <View style={styles.eventsContainer}>
          <Text style={styles.eventText}>Upcoming Events..</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.eventsScrollContainer}
          >
            {upcomingEventsImages.map((img, index) => (
              <Image
                key={index}
                source={img}
                style={styles.eventImage}
              />
            ))}
          </ScrollView>
        </View>

        {/* MAGAZINES */}
        <View style={styles.magazineContainer}>
          <Text style={styles.magazineText}>November Month Magazines</Text>

          <View style={styles.magazineScrollContainer}>
            {monthlyMagazines.map((img, index) => (
              <Image
                key={index}
                source={img}
                style={styles.magazineImage}
              />
            ))}
          </View>
        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  LocationBanner: {
    width: "100%",
    height: 45,
    backgroundColor: "#ffffffff",
    paddingTop: 10,
    paddingHorizontal: 10,
    elevation: 3,
  },

  locContents: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  locIcon: {
    color: "#522772",
    paddingLeft: 5,
  },

  locText: {
    color: "#522772"
  },


  //STORY CONTAINER
  scrollContainer: {
    backgroundColor: "#ffff",
    height: 110,
    elevation: 2,
  },

  scrollContents: {
    padding: 3,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  scrollitems: {
    alignItems: "center",
  },

  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 60,
    backgroundColor: "#adadad90"
  },

  scrollImages: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 2.5,
    marginTop: 2.5,
    elevation: 5,
    borderWidth: 3,
    borderColor: "#ffffffff",
  },

  scrollText: {
    color: "#522772",
    fontSize: 8,
    fontWeight: "900",
    marginTop: 4,
  },

  slideImage: {
    width: "100%",
    height: 180,
  },


  //PROFILE BANNER & DAILY VERSE 
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "99%",
    height: 220,
    backgroundColor: "#1d092cff",
    marginTop: 2,
    marginLeft:2,
  },

  textContainer:{
     alignItems: "center",
     paddingRight:200,
     paddingLeft:10,
     marginBottom:18,
  },

  headerText:{
    color: "#ffff",
    fontWeight: "900",
    fontSize: 15,
  },

  innerText:{
    color: "#ffff",
    fontSize: 12,
    textAlign: "center",
    marginTop:5
  },


  profileImage1:{
    width: "35%",
    height: 220,
  },

  profileImage2:{
    position: "absolute",
    width: "55%",
    height: 220,   
    right: 0,   
    resizeMode: "contain",
  },


   //EVENTS SCROLL CONTAINER
  eventsContainer:{
    width: "100%",
    height: 350,
    backgroundColor: "#cec1dcff",
    marginTop:8,
    borderRadius:10,
    marginLeft:5,
    elevation:2,
  },
  eventText: {
    fontSize:16,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "900",
    color: "#522772",
  },

  eventsScrollContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: "row",
    gap: 15,
  },

  eventImage: {
    width: 230,
    height: 300,
    borderRadius: 10,
    resizeMode: "cover"
  },


  //MAGAZINE CONTAINER
  magazineContainer:{
    width: "100%",
    height: 230,
    backgroundColor: "#cec1dcff",
    marginTop:8,
    borderRadius:10,
    marginLeft:5,
    elevation:2,
  },

  magazineScrollContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: "row",
    gap: 10,
  },

  magazineText: {
    fontSize:16,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "900",
    color: "#522772",
  },

  magazineImage: {
    width: 123,
    height: 180,
    borderRadius: 5,
    elevation:3
  },
});