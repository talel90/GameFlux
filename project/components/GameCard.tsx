import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Game } from '@/types/article';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import Animated, { FadeIn } from 'react-native-reanimated';
import { CalendarDays, Gamepad2 } from 'lucide-react-native';

interface GameCardProps {
  game: Game;
  onPress: () => void;
  index?: number;
}

export default function GameCard({ game, onPress, index = 0 }: GameCardProps) {
  const fadeInDelay = 300 + (index * 100);
  
  const formattedDate = new Date(game.releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  
  return (
    <Animated.View 
      entering={FadeIn.delay(fadeInDelay).duration(500)}
      style={styles.container}
    >
      <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.card}>
        <Image source={{ uri: game.imageUrl }} style={styles.image} />
        <View style={styles.overlay} />
        
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {game.title}
          </Text>
          
          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <CalendarDays size={14} color={Colors.neutral[300]} />
              <Text style={styles.metaText}>{formattedDate}</Text>
            </View>
            
            <View style={styles.platformsContainer}>
              {game.platforms.map((platform, idx) => (
                <View key={idx} style={styles.platformTag}>
                  <Gamepad2 size={12} color={Colors.dark.text} />
                  <Text style={styles.platformText}>{platform}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: Layout.spacing.m,
    width: 220,
    borderRadius: Layout.borderRadius.medium,
    overflow: 'hidden',
  },
  card: {
    height: 180,
    borderRadius: Layout.borderRadius.medium,
    overflow: 'hidden',
    backgroundColor: Colors.dark.card,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: Layout.borderRadius.medium,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
    backgroundGradient: ['transparent', 'rgba(0,0,0,0.8)'],
    borderRadius: Layout.borderRadius.medium,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Layout.spacing.m,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.dark.text,
    marginBottom: Layout.spacing.s,
  },
  metaContainer: {
    gap: Layout.spacing.s,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: Colors.neutral[300],
  },
  platformsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Layout.spacing.xs,
  },
  platformTag: {
    backgroundColor: Colors.primary[500],
    borderRadius: Layout.borderRadius.small,
    paddingHorizontal: Layout.spacing.xs,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  platformText: {
    color: Colors.dark.text,
    fontSize: 10,
    fontWeight: '600',
  },
});