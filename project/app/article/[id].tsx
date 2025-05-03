import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { mockArticles } from '@/data/mockData';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { ArrowLeft, Bookmark, Clock, MessageCircle, Share2, ThumbsUp } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function ArticleDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  const article = mockArticles.find(a => a.id === id);
  
  if (!article) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>Article not found</Text>
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
  
  const formattedDate = new Date(article.publishDate).toLocaleDateString('en-US', {
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
            <Bookmark 
              size={24} 
              color={article.isBookmarked ? Colors.accent[500] : Colors.dark.text} 
              fill={article.isBookmarked ? Colors.accent[500] : 'transparent'}
            />
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
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>{article.category.toUpperCase()}</Text>
          </View>
          
          <Text style={styles.title}>{article.title}</Text>
          
          <View style={styles.authorDateContainer}>
            <Text style={styles.author}>{article.author}</Text>
            <Text style={styles.date}>{formattedDate}</Text>
          </View>
          
          <View style={styles.readTimeContainer}>
            <Clock size={14} color={Colors.neutral[400]} />
            <Text style={styles.readTime}>{article.readTime} min read</Text>
          </View>
        </Animated.View>
        
        <Animated.View
          entering={FadeIn.delay(200).duration(500)}
        >
          <Image 
            source={{ uri: article.imageUrl }} 
            style={styles.image} 
          />
        </Animated.View>
        
        <Animated.View
          entering={FadeIn.delay(300).duration(500)}
        >
          <Text style={styles.summary}>{article.summary}</Text>
          
          <Text style={styles.content}>{article.content}</Text>
          
          <View style={styles.tagsContainer}>
            {article.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>#{tag}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.engagementContainer}>
            <TouchableOpacity style={styles.engagementButton}>
              <ThumbsUp size={20} color={Colors.neutral[400]} />
              <Text style={styles.engagementText}>{article.likes}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.engagementButton}>
              <MessageCircle size={20} color={Colors.neutral[400]} />
              <Text style={styles.engagementText}>{article.comments}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.engagementButton}>
              <Share2 size={20} color={Colors.neutral[400]} />
              <Text style={styles.engagementText}>Share</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: Colors.dark.card,
  },
  backButton: {
    padding: Layout.spacing.xs,
  },
  headerActions: {
    flexDirection: 'row',
  },
  headerButton: {
    marginLeft: Layout.spacing.m,
    padding: Layout.spacing.xs,
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
  categoryContainer: {
    backgroundColor: Colors.primary[600],
    borderRadius: Layout.borderRadius.small,
    paddingHorizontal: Layout.spacing.s,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginTop: Layout.spacing.m,
    marginHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.s,
  },
  category: {
    color: Colors.dark.text,
    fontWeight: '600',
    fontSize: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Montserrat-ExtraBold',
    color: Colors.dark.text,
    lineHeight: 32,
    marginHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.s,
  },
  authorDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.xs,
  },
  author: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.neutral[300],
    marginRight: Layout.spacing.s,
  },
  date: {
    fontSize: 14,
    color: Colors.neutral[400],
  },
  readTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.m,
  },
  readTime: {
    fontSize: 14,
    color: Colors.neutral[400],
    marginLeft: 4,
  },
  image: {
    width: '100%',
    height: 240,
    marginBottom: Layout.spacing.m,
  },
  summary: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.neutral[200],
    lineHeight: 24,
    marginHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.m,
  },
  content: {
    fontSize: 16,
    color: Colors.neutral[300],
    lineHeight: 24,
    marginHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.l,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.m,
    gap: Layout.spacing.xs,
  },
  tag: {
    backgroundColor: Colors.neutral[800],
    borderRadius: Layout.borderRadius.small,
    paddingHorizontal: Layout.spacing.s,
    paddingVertical: 4,
  },
  tagText: {
    color: Colors.neutral[300],
    fontSize: 12,
  },
  engagementContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: Layout.spacing.m,
    paddingBottom: Layout.spacing.s,
    marginHorizontal: Layout.spacing.m,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[800],
  },
  engagementButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Layout.spacing.s,
  },
  engagementText: {
    color: Colors.neutral[400],
    fontSize: 14,
    marginLeft: Layout.spacing.xs,
  },
});