import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { popularReviews } from '@/data/mockData';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { ArrowLeft, CircleCheck as CheckCircle2, Clock, Share2, Star, Circle as XCircle } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function ReviewDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  const review = popularReviews.find(r => r.id === id);
  
  if (!review) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>Review not found</Text>
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
  
  const formattedDate = new Date(review.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(review.rating / 2);
    const halfStar = review.rating % 2 >= 1;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star 
            key={i} 
            size={24} 
            color={Colors.accent[500]} 
            fill={Colors.accent[500]} 
          />
        );
      } else if (i === fullStars && halfStar) {
        stars.push(
          <Star 
            key={i} 
            size={24} 
            color={Colors.accent[500]} 
            fill={Colors.accent[500]} 
            strokeWidth={1}
          />
        );
      } else {
        stars.push(
          <Star 
            key={i} 
            size={24} 
            color={Colors.neutral[500]} 
            strokeWidth={1}
          />
        );
      }
    }
    
    return stars;
  };
  
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
          <Text style={styles.title}>{review.title}</Text>
          
          <View style={styles.ratingContainer}>
            <View style={styles.starsContainer}>
              {renderStars()}
            </View>
            <Text style={styles.ratingText}>{review.rating.toFixed(1)}/10</Text>
          </View>
          
          <View style={styles.authorDateContainer}>
            <Text style={styles.author}>Review by {review.author}</Text>
            <Text style={styles.date}>{formattedDate}</Text>
          </View>
        </Animated.View>
        
        <Animated.View
          entering={FadeIn.delay(200).duration(500)}
        >
          <Image 
            source={{ uri: review.imageUrl }} 
            style={styles.image} 
          />
        </Animated.View>
        
        <Animated.View
          entering={FadeIn.delay(300).duration(500)}
        >
          <Text style={styles.summary}>{review.summary}</Text>
          
          <Text style={styles.content}>{review.content}</Text>
          
          <View style={styles.prosConsContainer}>
            <View style={styles.prosContainer}>
              <Text style={styles.prosConsTitle}>Pros</Text>
              {review.pros.map((pro, index) => (
                <View key={index} style={styles.proConItem}>
                  <CheckCircle2 size={18} color={Colors.success[500]} />
                  <Text style={styles.proText}>{pro}</Text>
                </View>
              ))}
            </View>
            
            <View style={styles.consContainer}>
              <Text style={styles.prosConsTitle}>Cons</Text>
              {review.cons.map((con, index) => (
                <View key={index} style={styles.proConItem}>
                  <XCircle size={18} color={Colors.error[500]} />
                  <Text style={styles.conText}>{con}</Text>
                </View>
              ))}
            </View>
          </View>
          
          <View style={styles.verdictContainer}>
            <Text style={styles.verdictTitle}>Verdict</Text>
            <View style={styles.verdictContent}>
              <Text style={styles.verdictText}>
                A compelling {review.rating < 7 ? 'attempt' : 'addition'} to the genre that 
                {review.rating > 8 ? ' excels in most areas' : review.rating > 6 ? ' delivers a solid experience' : ' falls short in some key areas'}.
              </Text>
              <View style={styles.finalScoreContainer}>
                <Text style={styles.finalScoreLabel}>Final Score</Text>
                <Text style={styles.finalScore}>{review.rating.toFixed(1)}</Text>
              </View>
            </View>
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
  title: {
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Montserrat-ExtraBold',
    color: Colors.dark.text,
    lineHeight: 32,
    marginHorizontal: Layout.spacing.m,
    marginTop: Layout.spacing.m,
    marginBottom: Layout.spacing.s,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.s,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: Layout.spacing.s,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.accent[500],
  },
  authorDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.m,
  },
  author: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.neutral[300],
  },
  date: {
    fontSize: 14,
    color: Colors.neutral[400],
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
  prosConsContainer: {
    marginHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.l,
  },
  prosContainer: {
    marginBottom: Layout.spacing.m,
  },
  consContainer: {
  },
  prosConsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.dark.text,
    marginBottom: Layout.spacing.s,
  },
  proConItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.s,
  },
  proText: {
    fontSize: 16,
    color: Colors.neutral[300],
    marginLeft: Layout.spacing.s,
  },
  conText: {
    fontSize: 16,
    color: Colors.neutral[300],
    marginLeft: Layout.spacing.s,
  },
  verdictContainer: {
    marginHorizontal: Layout.spacing.m,
  },
  verdictTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.dark.text,
    marginBottom: Layout.spacing.s,
  },
  verdictContent: {
    backgroundColor: Colors.neutral[800],
    borderRadius: Layout.borderRadius.medium,
    padding: Layout.spacing.m,
  },
  verdictText: {
    fontSize: 16,
    color: Colors.neutral[200],
    lineHeight: 24,
    marginBottom: Layout.spacing.m,
  },
  finalScoreContainer: {
    alignItems: 'center',
    backgroundColor: Colors.neutral[900],
    borderRadius: Layout.borderRadius.medium,
    padding: Layout.spacing.m,
  },
  finalScoreLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.neutral[300],
    marginBottom: Layout.spacing.s,
  },
  finalScore: {
    fontSize: 36,
    fontWeight: '700',
    color: Colors.accent[500],
  },
});