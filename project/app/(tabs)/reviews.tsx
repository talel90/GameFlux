import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { popularReviews } from '@/data/mockData';
import SearchBar from '@/components/SearchBar';
import SectionHeader from '@/components/SectionHeader';
import ReviewCard from '@/components/ReviewCard';
import { router } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function ReviewsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredReviews = searchQuery 
    ? popularReviews.filter(review => 
        review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : popularReviews;
  
  const navigateToReview = (id: string) => {
    router.push(`/review/${id}`);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        entering={FadeIn.duration(500)}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Game Reviews</Text>
      </Animated.View>
      
      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClear={() => setSearchQuery('')}
        placeholder="Search reviews by title, author..."
        delay={100}
      />
      
      <SectionHeader 
        title={searchQuery ? "Search Results" : "Latest Reviews"} 
        delay={200}
      />
      
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredReviews.map((review, index) => (
          <ReviewCard 
            key={review.id}
            review={review}
            onPress={() => navigateToReview(review.id)}
            index={index}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  header: {
    padding: Layout.spacing.m,
    backgroundColor: Colors.dark.card,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Montserrat-Bold',
    color: Colors.dark.text,
  },
  scrollContent: {
    paddingHorizontal: Layout.spacing.m,
    paddingBottom: Layout.spacing.xxl,
  },
});