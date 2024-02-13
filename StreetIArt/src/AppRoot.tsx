import React from "react";
import { Text } from "react-native";

import CoreProvider from "core/providers/CoreProvider";

import NavigationProvider from "navigation/providers/NavigationProvider";

function AppRoot() {
  return (
    <CoreProvider>
      <NavigationProvider />
    </CoreProvider>
  );
}

export default AppRoot;
