import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"

import Card from "../components/Card"
import colors from "../constants/colors"
import lose from "../assets/fonts/images/gameOver.png"
import win from "../assets/fonts/images/win.jpg"

const ResultScreen = ({ result }) => {
  const [image, setImage] = useState("")

  useEffect(() => {
    handleIamge()
  }, [])

  const handleIamge = () => {
    if (result === "Win") {
      setImage(win)
      return
    }
    setImage(lose)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Card>
          <Text>{`You ${result}`}</Text>
        </Card>
        <Image style={styles.imageContainer} source={image} />
      </View>
    </SafeAreaView>
  )
}

export default ResultScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  imageContainer: {
    height: 320,
    width: 320,
    marginTop: 50,
  },
})
