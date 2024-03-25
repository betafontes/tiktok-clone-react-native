import { useState, useRef } from "react"

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
      video: "/assets/video-1.mp4",
      name: "@videoilustrativo",
      description: "aprendendo os estudos sobre react native",
    },
    {
      id: "2",
      video: "/assets/video-2.mp4",
      name: "@videoilustrativo",
      description: "aprendendo os estudos sobre react native",
    },
    {
      id: "3",
      video: "/assets/video-3.mp4",
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
