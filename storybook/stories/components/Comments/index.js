// @flow
import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import Emoji from 'react-native-emoji'
import { H4 } from '..'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  sub: {
    flexDirection: 'row'
  },
  emoji: {
    fontSize: 18,
    marginBottom: 4
  },
  h4: {
    top: 2,
    left: 2
  }
})

type CommentsT = {
  title: string,
  onPress: Function,
  viewStyle: ViewStyleProp
}

const Comments = memo<CommentsT>(({ title, onPress, viewStyle }) => {
  const { container, sub, emoji, h4 } = styles
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <View style={sub}>
        <Emoji name=":thought_balloon:" style={emoji} />
        <H4 title={title} textStyle={h4} />
      </View>
    </TouchableOpacity>
  )
})

export { Comments }
