import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { upcomingGames } from '@/data/mockData';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { ArrowLeft, BookOpen, CalendarDays, Gamepad2, Share2 } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function GameDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  const game = upcomingGames.find(g => g.id === id);
  
  if (!game) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>Game not found</Text>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
  const formattedDate = new Date(game.releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        entering={FadeIn.duration(300)}
        style={styles.header}
      >
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color={Colors.dark.text} />
        </TouchableOpacity>
        
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <BookOpen size={24} color={Colors.dark.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Share2 size={24} color={Colors.dark.text} />
          </TouchableOpacity>
        </View>
      </Animated.View>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Animated.View
          entering={FadeIn.delay(100).duration(500)}
        >
          <Image 
            source={{ uri: game.coverImageUrl || game.imageUrl }} 
            style={styles.coverImage} 
          />
          
          <View style={styles.gameInfoContainer}>
            <Text style={styles.title}>{game.title}</Text>
            
            <View style={styles.developerPublisherContainer}>
              <Text style={styles.developerPublisher}>
                {game.developer} • {game.publisher}
              </Text>
            </View>
            
            <View style={styles.releaseDateContainer}>
              <CalendarDays size={16} color={Colors.accent[500]} />
              <Text style={styles.releaseDate}>Releasing on {formattedDate}</Text>
            </View>
            
            <View style={styles.platformsContainer}>
              <Text style={styles.platformsLabel}>Platforms:</Text>
              <View style={styles.platforms}>
                {game.platforms.map((platform, index) => (
                  <View key={index} style={styles.platformTag}>
                    <Gamepad2 size={14} color={Colors.dark.text} />
                    <Text style={styles.platformText}>{platform}</Text>
                  </View>
                ))}
              </View>
            </View>
            
            <View style={styles.genresContainer}>
              <Text style={styles.genresLabel}>Genres:</Text>
              <View style={styles.genres}>
                {game.genres.map((genre, index) => (
                  <View key={index} style={styles.genreTag}>
                    <Text style={styles.genreText}>{genre}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </Animated.View>
        
        <Animated.View
          entering={FadeIn.delay(200).duration(500)}
          style={styles.descriptionContainer}
        >
          <Text style={styles.descriptionTitle}>About</Text>
          <Text style={styles.description}>{game.description}</Text>
        </Animated.View>
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
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  backButton: {
    padding: Layout.spacing.xs,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: Layout.borderRadius.circle,
  },
  headerActions: {
    flexDirection: 'row',
  },
  headerButton: {
    marginLeft: Layout.spacing.m,
    padding: Layout.spacing.xs,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: Layout.borderRadius.circle,
  },
  scrollContent: {
    paddingBottom: Layout.spacing.xxl,
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Layout.spacing.l,
  },
  notFoundText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark.text,
    marginBottom: Layout.spacing.m,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary[500],
  },
  coverImage: {
    width: '100%',
    height: 240,
  },
  gameInfoContainer: {
    paddingHorizontal: Layout.spacing.m,
    paddingTop: Layout.spacing.m,
    marginBottom: Layout.spacing.m,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Montserrat-ExtraBold',
    color: Colors.dark.text,
    marginBottom: Layout.spacing.s,
  },
  developerPublisherContainer: {
    marginBottom: Layout.spacing.s,
  },
  developerPublisher: {
    fontSize: 16,
    color: Colors.neutral[300],
  },
  releaseDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.m,
  },
  releaseDate: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.accent[500],
    marginLeft: Layout.spacing.xs,
  },
  platformsContainer: {
    marginBottom: Layout.spacing.m,
  },
  platformsLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.dark.text,
    marginBottom: Layout.spacing.xs,
  },
  platforms: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Layout.spacing.xs,
  },
  platformTag: {
    backgroundColor: Colors.primary[600],
    borderRadius: Layout.borderRadius.small,
    paddingHorizontal: Layout.spacing.s,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  platformText: {
    color: Colors.dark.text,
    fontSize: 12,
    fontWeight: '600',
  },
  genresContainer: {
    marginBottom: Layout.spacing.m,
  },
  genresLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.dark.text,
    marginBottom: Layout.spacing.xs,
  },
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Layout.spacing.xs,
  },
  genreTag: {
    backgroundColor: Colors.neutral[700],
    borderRadius: Layout.borderRadius.small,
    paddingHorizontal: Layout.spacing.s,
    paddingVertical: 6,
  },
  genreText: {
    color: Colors.neutral[300],
    fontSize: 12,
    fontWeight: '500',
  },
  descriptionContainer: {
    paddingHorizontal: Layout.spacing.m,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.dark.text,
    marginBottom: Layout.spacing.s,
  },
  description: {
    fontSize: 16,
    color: Colors.neutral[300],
    lineHeight: 24,
  },
});