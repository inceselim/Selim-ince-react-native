import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { darkStyle, lightStyle } from "./style"
import { RadioButton } from 'react-native-paper';

import SegmentedControlTab from 'react-native-segmented-control-tab';

import axios from 'axios';

export default function CategoryCard() {
  const [categoryData, setcategoryData] = useState([])
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(4);

  axios
    .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/")
    .then(user => {
      setcategoryData(user.data)
    })

  const tabValues = categoryData.map(i => i.name)
  tabValues.push("All")

  function handleSingleIndexSelect(index: any) {
    // For single Tab Selection SegmentedControlTab
    setSelectedIndex(index);
    setIsEnabled(previousState => !previousState);
  }

  return (
    <SafeAreaView >
      <SegmentedControlTab
        values={tabValues}
        selectedIndex={selectedIndex}
        onTabPress={handleSingleIndexSelect}
      />
    </SafeAreaView>
  );
}

