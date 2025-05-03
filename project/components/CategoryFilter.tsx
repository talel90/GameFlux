import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { ArticleCategory } from '@/types/article';
import Animated, { FadeIn } from 'react-native-reanimated';

interface CategoryFilterProps {
  selectedCategory: ArticleCategory | 'all';
  onSelectCategory: (category: ArticleCategory | 'all') => void;
  delay?: number;
}

export default function CategoryFilter({ 
  selectedCategory, 
  onSelectCategory,
  delay = 0 
}: CategoryFilterProps) {
  const categories = [
    { id: 'all', label: 'All' },
    { id: ArticleCategory.NEWS, label: 'News' },
    { id: ArticleCategory.REVIEW, label: 'Reviews' },
    { id: ArticleCategory.GUIDE, label: 'Guides' },
    { id: ArticleCategory.FEATURE, label: 'Features' },
    { id: ArticleCategory.INTERVIEW, label: 'Interviews' },
    { id: ArticleCategory.OPINION, label: 'Opinion' },
  ];
  
  return (
    <Animated.View 
      entering={FadeIn.delay(delay).duration(500)}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.selectedCategoryButton
            ]}
            onPress={() => onSelectCategory(category.id as ArticleCategory | 'all')}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.id && styles.selectedCategoryText
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Layout.spacing.m,
    paddingBottom: Layout.spacing.m,
    gap: Layout.spacing.s,
  },
  categoryButton: {
    paddingHorizontal: Layout.spacing.m,
    paddingVertical: Layout.spacing.xs,
    borderRadius: Layout.borderRadius.circle,
    backgroundColor: Colors.neutral[800],
    borderWidth: 1,
    borderColor: Colors.neutral[700],
  },
  selectedCategoryButton: {
    backgroundColor: Colors.primary[600],
    borderColor: Colors.primary[500],
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.neutral[300],
  },
  selectedCategoryText: {
    color: Colors.dark.text,
  },
});