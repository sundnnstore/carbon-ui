import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Uranium from 'uranium'
import { Breakpoints, connectTheme } from '../../index'

const CardText = ({ children, style, textStyle }) =>
  <View css={[styles.root, style]}>
    <Text css={[styles.text, textStyle]}>
      {children}
    </Text>
  </View>

CardText.propTypes = {
  /**
  * Text style.
  */
  textStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  /**
   * Due to using Text component internally, CardText can only accept children of type:
   * - Text components
   * - literal strings
   * - Array of Text or string literals (nesting)
   */
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(Text),
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.instanceOf(Text),
        PropTypes.string])),
  ]).isRequired,
}

export default
  connectTheme(
  Uranium(
  CardText))

const styles = {
  root: {
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 16,
    // Larger left and right padding for tablet and desktop.
    [Breakpoints.md]: {
      paddingHorizontal: 24,
    },
  },
  text: {
    fontSize: 14,
  },
}
