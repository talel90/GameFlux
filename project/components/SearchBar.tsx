import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { Search, X } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
  placeholder?: string;
  delay?: number;
}

export default function SearchBar({ 
  value, 
  onChangeText, 
  onClear, 
  placeholder = 'Search for news, games, reviews...', 
  delay = 0 
}: SearchBarProps) {
  return (
    <Animated.View 
      entering={FadeIn.delay(delay).duration(500)}
      style={styles.container}
    >
      <View style={styles.searchIconContainer}>
        <Search size={18} color={Colors.neutral[400]} />
      </View>
      
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.neutral[500]}
      />
      
      {value.length > 0 && (
        <TouchableOpacity onPress={onClear} style={styles.clearButton}>
          <X size={18} color={Colors.neutral[400]} />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.neutral[800],
    borderRadius: Layout.borderRadius.medium,
    paddingHorizontal: Layout.spacing.s,
    marginHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.m,
    height: 44,
  },
  searchIconContainer: {
    marginRight: Layout.spacing.xs,
  },
  input: {
    flex: 1,
    color: Colors.dark.text,
    fontSize: 15,
    paddingVertical: Layout.spacing.s,
  },
  clearButton: {
    padding: Layout.spacing.xs,
  },
});