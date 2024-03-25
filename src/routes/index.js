import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home } from "../pages/home"
import { Search } from "../pages/search"
import { Book } from "../pages/book"
import { Profile } from "../pages/profile"

import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
        },

        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />
            }

            return <Ionicons name="home-outline" size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="search" size={size} color={color} />
            }

            return <Ionicons name="search-outline" size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Book"
        component={Book}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="book" size={size} color={color} />
            }

            return <Ionicons name="book-outline" size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />
            }

            return <Ionicons name="person-outline" size={size} color={color} />
          },
        }}
      />
    </Tab.Navigator>
  )
}
