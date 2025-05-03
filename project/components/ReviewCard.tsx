import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Review } from '@/types/article';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Star } from 'lucide-react-native';

interface ReviewCardProps {
  review: Review;
  onPress: () => void;
  index?: number;
}

export default function ReviewCard({ review, onPress, index = 0 }: ReviewCardProps) {
  const fadeInDelay = 300 + (index * 100);
  
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(review.rating / 2);
    const halfStar = review.rating % 2 >= 1;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star 
            key={i} 
            size={16} 
            color={Colors.accent[500]} 
            fill={Colors.accent[500]} 
          />
        );
      } else if (i === fullStars && halfStar) {
        stars.push(
          <Star 
            key={i} 
            size={16} 
            color={Colors.accent[500]} 
            fill={Colors.accent[500]} 
            strokeWidth={1}
          />
        );
      } else {
        stars.push(
          <Star 
            key={i} 
            size={16} 
            color={Colors.neutral[500]} 
            strokeWidth={1}
          />
        );
      }
    }
    
    return stars;
  };
  
  return (
    <Animated.View 
      entering={FadeIn.delay(fadeInDelay).duration(500)}
      style={styles.container}
    >
      <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.card}>
        <Image source={{ uri: review.imageUrl }} style={styles.image} />
        
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={2}>
            {review.title}
          </Text>
          
          <View style={styles.ratingContainer}>
            <View style={styles.stars}>
              {renderStars()}
            </View>
            <Text style={styles.ratingText}>{review.rating.toFixed(1)}</Text>
          </View>
          
          <Text style={styles.summary} numberOfLines={2}>
            {review.summary}
          </Text>
          
          <View style={styles.footer}>
            <Text style={styles.author}>
              By {review.author}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Layout.spacing.m,
    borderRadius: Layout.borderRadius.medium,
    overflow: 'hidden',
    width: '100%',
  },
  card: {
    backgroundColor: Colors.dark.card,
    borderRadius: Layout.borderRadius.medium,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: Layout.borderRadius.medium,
    borderTopRightRadius: Layout.borderRadius.medium,
  },
  content: {
    padding: Layout.spacing.m,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.dark.text,
    marginBottom: Layout.spacing.xs,
    lineHeight: 24,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.s,
  },
  stars: {
    flexDirection: 'row',
    marginRight: Layout.spacing.s,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.accent[500],
  },
  summary: {
    fontSize: 14,
    color: Colors.neutral[300],
    marginBottom: Layout.spacing.m,
    lineHeight: 20,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[800],
    paddingTop: Layout.spacing.s,
  },
  author: {
    fontSize: 12,
    color: Colors.neutral[400],
    fontStyle: 'italic',
  },
});