import { useState, useRef } from "react"
import "firebase/storage"
import "firebase/app"

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
  FlatList,
  Dimensions,
} from "react-native"

import { FeedItem } from "../../components/FeedItem"

const { height: heightScreen } = Dimensions.get("screen")

export function Home() {
  let feedItems = [
    {
      id: "1",
      video:
        "https://firebasestorage.googleapis.com/v0/b/tiktok-clone-react-native.appspot.com/o/videos%2Fvideo-1.mp4?alt=media&token=31dd502e-65e9-4a27-a37d-dffd2798a4b3",
      name: "@videoilustrativo",
      description: "aprendendo os estudos sobre react native",
    },
    {
      id: "2",
      video:
        "https://firebasestorage.googleapis.com/v0/b/tiktok-clone-react-native.appspot.com/o/videos%2Fvideo-2.mp4?alt=media&token=5ca6d868-0b14-43e7-a38d-5f49485e448c",
      name: "@videoilustrativo",
      description: "aprendendo os estudos sobre react native",
    },
    {
      id: "3",
      video:
        "https://firebasestorage.googleapis.com/v0/b/tiktok-clone-react-native.appspot.com/o/videos%2Fvideo-3.mp4?alt=media&token=695e0589-1920-44e7-aacb-3b40a0f3499d",
      name: "@videoilustrativo",
      description: "aprendendo os estudos sobre react native",
    },
  ]

  const [showItem, setShowItem] = useState(feedItems[0])
  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setShowItem(feedItems[viewableItems[0].index])
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <TouchableOpacity>
          <Text style={[styles.labelText, { color: "#ddd" }]}>Seguindo</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.labelText, { color: "#fff" }]}>Pra você</Text>
          <View style={styles.indicator}></View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={feedItems}
        renderItem={({ item }) => (
          <FeedItem data={item} currentVisibleItem={showItem} />
        )}
        onViewableItemsChanged={onViewRef.current}
        snapToAlignment="center"
        snapToInterval={heightScreen}
        scrollEventThrottle={200}
        decelerationRate={"fast"}
        viewabilityConfig={{
          waitForInteraction: false,
          viewAreaCoveragePercentThreshold: 100, // significa que um item deve estar totalmente visivel na tela ou cobrir toda tela para contar como visivel.
        }}
        showVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  labels: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    position: "absolute",
    top: 6,
    left: 0,
    right: 0,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 55,
    zIndex: 99,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  indicator: {
    backgroundColor: "#fff",
    width: 32,
    height: 2,
    alignSelf: "center",
  },
})
