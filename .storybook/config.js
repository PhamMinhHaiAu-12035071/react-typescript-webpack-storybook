/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { configure } from "@storybook/react"

const req = require.context("../src/components", true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
