import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Article } from '@/types/article';
import { Bookmark, Clock, MessageCircle, ThumbsUp } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import Animated, { FadeIn } from 'react-native-reanimated';

interface ArticleCardProps {
  article: Article;
  onPress: () => void;
  index?: number;
  compact?: boolean;
}

export default function ArticleCard({ article, onPress, index = 0, compact = false }: ArticleCardProps) {
  const fadeInDelay = 300 + (index * 100);
  
  return (
    <Animated.View 
      entering={FadeIn.delay(fadeInDelay).duration(500)}
      style={compact ? styles.containerCompact : styles.container}
    >
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={compact ? styles.cardCompact : styles.card}>
          <Image 
            source={{ uri: article.imageUrl }} 
            style={compact ? styles.imageCompact : styles.image} 
          />
          
          <View style={compact ? styles.contentCompact : styles.content}>
            <View style={styles.categoryContainer}>
              <Text style={styles.category}>{article.category.toUpperCase()}</Text>
            </View>
            
            <Text 
              style={compact ? styles.titleCompact : styles.title} 
              numberOfLines={compact ? 2 : 3}
            >
              {article.title}
            </Text>
            
            {!compact && (
              <Text style={styles.summary} numberOfLines={2}>
                {article.summary}
              </Text>
            )}
            
            <View style={styles.metaContainer}>
              <View style={styles.authorTimeContainer}>
                <Text style={styles.author} numberOfLines={1}>
                  {article.author}
                </Text>
                <View style={styles.timeContainer}>
                  <Clock size={12} color={Colors.neutral[400]} />
                  <Text style={styles.readTime}>{article.readTime} min</Text>
                </View>
              </View>
              
              {!compact && (
                <View style={styles.statsContainer}>
                  <View style={styles.statItem}>
                    <ThumbsUp size={14} color={Colors.neutral[400]} />
                    <Text style={styles.statText}>{article.likes}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <MessageCircle size={14} color={Colors.neutral[400]} />
                    <Text style={styles.statText}>{article.comments}</Text>
                  </View>
                  {article.isBookmarked && (
                    <Bookmark size={14} color={Colors.accent[500]} fill={Colors.accent[500]} />
                  )}
                </View>
              )}
            </View>
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
  },
  containerCompact: {
    marginBottom: Layout.spacing.s,
    borderRadius: Layout.borderRadius.medium,
    overflow: 'hidden',
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
  cardCompact: {
    backgroundColor: Colors.dark.card,
    borderRadius: Layout.borderRadius.medium,
    overflow: 'hidden',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: Layout.borderRadius.medium,
    borderTopRightRadius: Layout.borderRadius.medium,
  },
  imageCompact: {
    width: 100,
    height: 100,
    borderTopLeftRadius: Layout.borderRadius.medium,
    borderBottomLeftRadius: Layout.borderRadius.medium,
  },
  content: {
    padding: Layout.spacing.m,
  },
  contentCompact: {
    padding: Layout.spacing.s,
    flex: 1,
  },
  categoryContainer: {
    backgroundColor: Colors.primary[600],
    borderRadius: Layout.borderRadius.small,
    paddingHorizontal: Layout.spacing.s,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: Layout.spacing.s,
  },
  category: {
    color: Colors.dark.text,
    fontWeight: '600',
    fontSize: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: Layout.spacing.s,
    color: Colors.dark.text,
    lineHeight: 24,
  },
  titleCompact: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: Layout.spacing.xs,
    color: Colors.dark.text,
    lineHeight: 18,
  },
  summary: {
    fontSize: 14,
    color: Colors.neutral[300],
    marginBottom: Layout.spacing.s,
    lineHeight: 20,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Layout.spacing.xs,
  },
  authorTimeContainer: {
    flex: 1,
  },
  author: {
    fontSize: 12,
    color: Colors.neutral[300],
    fontWeight: '600',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  readTime: {
    fontSize: 11,
    color: Colors.neutral[400],
    marginLeft: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Layout.spacing.s,
  },
  statText: {
    fontSize: 12,
    color: Colors.neutral[400],
    marginLeft: 3,
  },
});