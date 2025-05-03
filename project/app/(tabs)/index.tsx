import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { mockArticles, popularReviews, upcomingGames } from '@/data/mockData';
import { ArticleCategory } from '@/types/article';
import ArticleCard from '@/components/ArticleCard';
import SectionHeader from '@/components/SectionHeader';
import SearchBar from '@/components/SearchBar';
import { Bell, Menu } from 'lucide-react-native';
import CategoryFilter from '@/components/CategoryFilter';
import GameCard from '@/components/GameCard';
import ReviewCard from '@/components/ReviewCard';
import { router } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | 'all'>('all');
  
  const featuredArticle = mockArticles[0];
  const latestArticles = mockArticles.slice(1, 4);
  
  const filteredArticles = 
    selectedCategory === 'all' 
      ? latestArticles 
      : latestArticles.filter(article => article.category === selectedCategory);
  
  const navigateToArticle = (id: string) => {
    router.push(`/article/${id}`);
  };
  
  const navigateToGame = (id: string) => {
    router.push(`/game/${id}`);
  };
  
  const navigateToReview = (id: string) => {
    router.push(`/review/${id}`);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View 
        entering={FadeIn.duration(500)}
        style={styles.header}
      >
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.menuButton}>
            <Menu size={24} color={Colors.dark.text} />
          </TouchableOpacity>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg' }}
            style={styles.logo}
          />
          <Text style={styles.logoText}>GameFlux</Text>
        </View>
        
        <TouchableOpacity style={styles.notificationButton}>
          <Bell size={24} color={Colors.dark.text} />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </Animated.View>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <SearchBar 
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={() => setSearchQuery('')}
          delay={100}
        />
        
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          delay={200}
        />
        
        <SectionHeader 
          title="Featured" 
          delay={300}
        />
        
        <Animated.View 
          entering={FadeIn.delay(400).duration(500)}
          style={styles.featuredContainer}
        >
          <TouchableOpacity 
            activeOpacity={0.9}
            onPress={() => navigateToArticle(featuredArticle.id)}
            style={styles.featuredCard}
          >
            <Image source={{ uri: featuredArticle.imageUrl }} style={styles.featuredImage} />
            <View style={styles.featuredGradient} />
            <View style={styles.featuredContent}>
              <View style={styles.featuredCategoryContainer}>
                <Text style={styles.featuredCategory}>{featuredArticle.category.toUpperCase()}</Text>
              </View>
              <Text style={styles.featuredTitle}>{featuredArticle.title}</Text>
              <Text style={styles.featuredSummary} numberOfLines={2}>
                {featuredArticle.summary}
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
        
        <SectionHeader 
          title="Latest News" 
          onSeeAllPress={() => router.push('/games')}
          delay={500}
        />
        
        <View style={styles.articlesContainer}>
          {filteredArticles.map((article, index) => (
            <ArticleCard 
              key={article.id}
              article={article}
              onPress={() => navigateToArticle(article.id)}
              index={index}
            />
          ))}
        </View>
        
        <SectionHeader 
          title="Upcoming Games" 
          onSeeAllPress={() => router.push('/games')}
          delay={600}
        />
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContent}
        >
          {upcomingGames.map((game, index) => (
            <GameCard 
              key={game.id}
              game={game}
              onPress={() => navigateToGame(game.id)}
              index={index}
            />
          ))}
        </ScrollView>
        
        <SectionHeader 
          title="Popular Reviews" 
          onSeeAllPress={() => router.push('/reviews')}
          delay={700}
        />
        
        <View style={styles.reviewsContainer}>
          <ReviewCard 
            review={popularReviews[0]}
            onPress={() => navigateToReview(popularReviews[0].id)}
            index={0}
          />
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Layout.spacing.m,
    paddingVertical: Layout.spacing.m,
    backgroundColor: Colors.dark.card,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: Layout.spacing.m,
  },
  logo: {
    width: 28,
    height: 28,
    borderRadius: 8,
    marginRight: Layout.spacing.xs,
  },
  logoText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: Colors.dark.text,
  },
  notificationButton: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.error[500],
    borderWidth: 1,
    borderColor: Colors.dark.card,
  },
  scrollContent: {
    paddingBottom: Layout.spacing.xxl,
  },
  featuredContainer: {
    paddingHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.l,
  },
  featuredCard: {
    borderRadius: Layout.borderRadius.large,
    overflow: 'hidden',
    height: 240,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredGradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  featuredContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Layout.spacing.m,
  },
  featuredCategoryContainer: {
    backgroundColor: Colors.primary[600],
    borderRadius: Layout.borderRadius.small,
    paddingHorizontal: Layout.spacing.s,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: Layout.spacing.s,
  },
  featuredCategory: {
    color: Colors.dark.text,
    fontWeight: '600',
    fontSize: 10,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'Montserrat-ExtraBold',
    color: Colors.dark.text,
    marginBottom: Layout.spacing.s,
  },
  featuredSummary: {
    fontSize: 14,
    color: Colors.neutral[200],
  },
  articlesContainer: {
    paddingHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.l,
  },
  horizontalScrollContent: {
    paddingLeft: Layout.spacing.m,
    paddingRight: Layout.spacing.s,
    marginBottom: Layout.spacing.l,
  },
  reviewsContainer: {
    paddingHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.l,
  },
});