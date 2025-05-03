import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { mockArticles, popularReviews, upcomingGames } from '@/data/mockData';
import { Article, Review, Game, ArticleCategory } from '@/types/article';
import SearchBar from '@/components/SearchBar';
import ArticleCard from '@/components/ArticleCard';
import { router } from 'expo-router';
import { BookOpen, Clock, Gamepad2, ArrowRight, Search as SearchIcon } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

type SearchResult = {
  id: string;
  type: 'article' | 'game' | 'review';
  title: string;
  imageUrl: string;
  subtitle: string;
  category?: ArticleCategory;
};

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'articles' | 'games' | 'reviews'>('all');
  
  const searchResults: SearchResult[] = [];
  
  if (searchQuery.length > 0) {
    // Search articles
    const articleResults = mockArticles
      .filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .map(article => ({
        id: article.id,
        type: 'article' as const,
        title: article.title,
        imageUrl: article.imageUrl,
        subtitle: article.author,
        category: article.category,
      }));
    
    // Search games
    const gameResults = upcomingGames
      .filter(game => 
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.genres.some(genre => genre.toLowerCase().includes(searchQuery.toLowerCase())) ||
        game.platforms.some(platform => platform.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .map(game => ({
        id: game.id,
        type: 'game' as const,
        title: game.title,
        imageUrl: game.imageUrl,
        subtitle: `${game.developer} • ${game.publisher}`,
      }));
    
    // Search reviews
    const reviewResults = popularReviews
      .filter(review => 
        review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map(review => ({
        id: review.id,
        type: 'review' as const,
        title: review.title,
        imageUrl: review.imageUrl,
        subtitle: `Review by ${review.author}`,
      }));
    
    if (activeTab === 'all') {
      searchResults.push(...articleResults, ...gameResults, ...reviewResults);
    } else if (activeTab === 'articles') {
      searchResults.push(...articleResults);
    } else if (activeTab === 'games') {
      searchResults.push(...gameResults);
    } else if (activeTab === 'reviews') {
      searchResults.push(...reviewResults);
    }
  }
  
  const navigateToItem = (item: SearchResult) => {
    if (item.type === 'article') {
      router.push(`/article/${item.id}`);
    } else if (item.type === 'game') {
      router.push(`/game/${item.id}`);
    } else if (item.type === 'review') {
      router.push(`/review/${item.id}`);
    }
  };
  
  const renderSearchResultItem = ({ item, index }: { item: SearchResult; index: number }) => {
    const fadeInDelay = 300 + (index * 50);
    
    let icon;
    if (item.type === 'article') {
      icon = <Clock size={16} color={Colors.neutral[400]} />;
    } else if (item.type === 'game') {
      icon = <Gamepad2 size={16} color={Colors.neutral[400]} />;
    } else if (item.type === 'review') {
      icon = <BookOpen size={16} color={Colors.neutral[400]} />;
    }
    
    return (
      <Animated.View
        entering={FadeIn.delay(fadeInDelay).duration(500)}
      >
        <TouchableOpacity
          style={styles.searchResultItem}
          onPress={() => navigateToItem(item)}
          activeOpacity={0.7}
        >
          <View style={styles.resultContent}>
            <View style={styles.resultTextContent}>
              <Text style={styles.resultTitle} numberOfLines={1}>
                {item.title}
              </Text>
              <View style={styles.resultSubtitleContainer}>
                {icon}
                <Text style={styles.resultSubtitle} numberOfLines={1}>
                  {item.subtitle}
                </Text>
              </View>
            </View>
            <ArrowRight size={20} color={Colors.primary[500]} />
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        entering={FadeIn.duration(500)}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Search</Text>
      </Animated.View>
      
      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClear={() => setSearchQuery('')}
        placeholder="Search for news, games, reviews..."
        delay={100}
      />
      
      <Animated.View
        entering={FadeIn.delay(200).duration(500)}
        style={styles.tabBar}
      >
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'all' && styles.activeTab]}
          onPress={() => setActiveTab('all')}
        >
          <Text style={[styles.tabText, activeTab === 'all' && styles.activeTabText]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'articles' && styles.activeTab]}
          onPress={() => setActiveTab('articles')}
        >
          <Text style={[styles.tabText, activeTab === 'articles' && styles.activeTabText]}>
            Articles
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'games' && styles.activeTab]}
          onPress={() => setActiveTab('games')}
        >
          <Text style={[styles.tabText, activeTab === 'games' && styles.activeTabText]}>
            Games
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'reviews' && styles.activeTab]}
          onPress={() => setActiveTab('reviews')}
        >
          <Text style={[styles.tabText, activeTab === 'reviews' && styles.activeTabText]}>
            Reviews
          </Text>
        </TouchableOpacity>
      </Animated.View>
      
      {searchQuery.length === 0 ? (
        <Animated.View
          entering={FadeIn.delay(300).duration(500)}
          style={styles.emptyStateContainer}
        >
          <SearchIcon size={64} color={Colors.neutral[700]} />
          <Text style={styles.emptyStateTitle}>Search GameFlux</Text>
          <Text style={styles.emptyStateText}>
            Search for news, games, reviews, and more from the world of gaming.
          </Text>
        </Animated.View>
      ) : searchResults.length === 0 ? (
        <Animated.View
          entering={FadeIn.delay(300).duration(500)}
          style={styles.emptyStateContainer}
        >
          <SearchIcon size={64} color={Colors.neutral[700]} />
          <Text style={styles.emptyStateTitle}>No results found</Text>
          <Text style={styles.emptyStateText}>
            We couldn't find any matches for "{searchQuery}". Try a different search term.
          </Text>
        </Animated.View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => `${item.type}-${item.id}`}
          renderItem={renderSearchResultItem}
          contentContainerStyle={styles.searchResultsContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
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
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.m,
  },
  tab: {
    paddingVertical: Layout.spacing.s,
    paddingHorizontal: Layout.spacing.m,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: Colors.primary[500],
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.neutral[400],
  },
  activeTabText: {
    color: Colors.primary[500],
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Layout.spacing.l,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.dark.text,
    marginTop: Layout.spacing.m,
    marginBottom: Layout.spacing.s,
  },
  emptyStateText: {
    fontSize: 14,
    color: Colors.neutral[400],
    textAlign: 'center',
    lineHeight: 20,
  },
  searchResultsContainer: {
    paddingHorizontal: Layout.spacing.m,
    paddingVertical: Layout.spacing.s,
  },
  searchResultItem: {
    backgroundColor: Colors.dark.card,
    borderRadius: Layout.borderRadius.medium,
    padding: Layout.spacing.m,
    marginBottom: Layout.spacing.s,
  },
  resultContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resultTextContent: {
    flex: 1,
    marginRight: Layout.spacing.s,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.dark.text,
    marginBottom: 4,
  },
  resultSubtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultSubtitle: {
    fontSize: 14,
    color: Colors.neutral[400],
    marginLeft: 4,
  },
});