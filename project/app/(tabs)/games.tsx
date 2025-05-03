import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { upcomingGames } from '@/data/mockData';
import { Game } from '@/types/article';
import SectionHeader from '@/components/SectionHeader';
import SearchBar from '@/components/SearchBar';
import { router } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';

interface GameListItemProps {
  game: Game;
  onPress: (id: string) => void;
  index: number;
}

function GameListItem({ game, onPress, index }: GameListItemProps) {
  const fadeInDelay = 300 + (index * 100);
  
  return (
    <Animated.View
      entering={FadeIn.delay(fadeInDelay).duration(500)}
      style={styles.gameItem}
    >
      <View style={styles.gameCard}>
        <View style={styles.gameImageContainer}>
          <View style={styles.gamePlatforms}>
            {game.platforms.map((platform, idx) => (
              <View key={idx} style={styles.platformBadge}>
                <Text style={styles.platformText}>{platform}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.gameInfo}>
          <Text style={styles.gameTitle}>{game.title}</Text>
          <Text style={styles.gameDevPub}>
            {game.developer} • {game.publisher}
          </Text>
          
          <View style={styles.genreContainer}>
            {game.genres.map((genre, idx) => (
              <View key={idx} style={styles.genreBadge}>
                <Text style={styles.genreText}>{genre}</Text>
              </View>
            ))}
          </View>
          
          <Text style={styles.gameReleaseDate}>
            Release Date: {new Date(game.releaseDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
          
          <Text style={styles.gameDescription} numberOfLines={3}>
            {game.description}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}

export default function GamesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredGames = searchQuery 
    ? upcomingGames.filter(game => 
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.genres.some(genre => genre.toLowerCase().includes(searchQuery.toLowerCase())) ||
        game.platforms.some(platform => platform.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : upcomingGames;
  
  const navigateToGame = (id: string) => {
    router.push(`/game/${id}`);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        entering={FadeIn.duration(500)}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Games</Text>
      </Animated.View>
      
      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClear={() => setSearchQuery('')}
        placeholder="Search games by title, developer, platform..."
        delay={100}
      />
      
      <SectionHeader 
        title={searchQuery ? "Search Results" : "Upcoming Games"} 
        delay={200}
      />
      
      <FlatList
        data={filteredGames}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <GameListItem 
            game={item} 
            onPress={navigateToGame} 
            index={index} 
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
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
  listContent: {
    paddingHorizontal: Layout.spacing.m,
    paddingBottom: Layout.spacing.xxl,
  },
  gameItem: {
    marginBottom: Layout.spacing.m,
  },
  gameCard: {
    backgroundColor: Colors.dark.card,
    borderRadius: Layout.borderRadius.medium,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  gameImageContainer: {
    height: 160,
    backgroundColor: Colors.neutral[800],
    justifyContent: 'flex-end',
    padding: Layout.spacing.s,
  },
  gamePlatforms: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Layout.spacing.xs,
  },
  platformBadge: {
    backgroundColor: Colors.primary[600],
    borderRadius: Layout.borderRadius.small,
    paddingHorizontal: Layout.spacing.s,
    paddingVertical: 4,
  },
  platformText: {
    color: Colors.dark.text,
    fontWeight: '600',
    fontSize: 10,
  },
  gameInfo: {
    padding: Layout.spacing.m,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.dark.text,
    marginBottom: Layout.spacing.xs,
  },
  gameDevPub: {
    fontSize: 14,
    color: Colors.neutral[400],
    marginBottom: Layout.spacing.s,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Layout.spacing.xs,
    marginBottom: Layout.spacing.s,
  },
  genreBadge: {
    backgroundColor: Colors.neutral[700],
    borderRadius: Layout.borderRadius.small,
    paddingHorizontal: Layout.spacing.s,
    paddingVertical: 4,
  },
  genreText: {
    color: Colors.neutral[300],
    fontWeight: '500',
    fontSize: 12,
  },
  gameReleaseDate: {
    fontSize: 14,
    color: Colors.accent[500],
    fontWeight: '600',
    marginBottom: Layout.spacing.s,
  },
  gameDescription: {
    fontSize: 14,
    color: Colors.neutral[300],
    lineHeight: 20,
  },
});