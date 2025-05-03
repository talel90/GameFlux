import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, Switch, ScrollView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import Animated, { FadeIn } from 'react-native-reanimated';
import { ArrowRight, Bell, BookMarked, ChevronRight, CircleHelp as HelpCircle, LogOut, Moon, Shield, User } from 'lucide-react-native';
import { mockArticles } from '@/data/mockData';
import ArticleCard from '@/components/ArticleCard';
import { router } from 'expo-router';

interface ProfileOptionProps {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
  showRightArrow?: boolean;
  rightContent?: React.ReactNode;
  delay?: number;
}

function ProfileOption({ 
  icon, 
  title, 
  onPress, 
  showRightArrow = true, 
  rightContent,
  delay = 0 
}: ProfileOptionProps) {
  return (
    <Animated.View
      entering={FadeIn.delay(delay).duration(500)}
    >
      <TouchableOpacity 
        style={styles.optionContainer}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.optionIconContainer}>
          {icon}
        </View>
        <Text style={styles.optionTitle}>{title}</Text>
        <View style={styles.optionRight}>
          {rightContent}
          {showRightArrow && <ChevronRight size={20} color={Colors.neutral[500]} />}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function ProfileScreen() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  
  const bookmarkedArticles = mockArticles.filter(article => article.isBookmarked);
  
  const navigateToArticle = (id: string) => {
    router.push(`/article/${id}`);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Animated.View
          entering={FadeIn.duration(500)}
          style={styles.header}
        >
          <Text style={styles.headerTitle}>Profile</Text>
        </Animated.View>
        
        <Animated.View
          entering={FadeIn.delay(100).duration(500)}
          style={styles.profileCard}
        >
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg' }} 
            style={styles.profileImage} 
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Alex Johnson</Text>
            <Text style={styles.profileEmail}>alex.johnson@example.com</Text>
            <TouchableOpacity style={styles.editProfileButton}>
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        
        <Animated.View
          entering={FadeIn.delay(200).duration(500)}
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionTitle}>Preferences</Text>
        </Animated.View>
        
        <ProfileOption 
          icon={<Moon size={20} color={Colors.neutral[300]} />}
          title="Dark Mode"
          onPress={() => setIsDarkMode(!isDarkMode)}
          showRightArrow={false}
          rightContent={
            <Switch 
              value={isDarkMode}
              onValueChange={setIsDarkMode}
              trackColor={{ false: Colors.neutral[700], true: Colors.primary[500] }}
              thumbColor={Colors.dark.text}
            />
          }
          delay={300}
        />
        
        <ProfileOption 
          icon={<Bell size={20} color={Colors.neutral[300]} />}
          title="Notifications"
          onPress={() => setNotifications(!notifications)}
          showRightArrow={false}
          rightContent={
            <Switch 
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: Colors.neutral[700], true: Colors.primary[500] }}
              thumbColor={Colors.dark.text}
            />
          }
          delay={350}
        />
        
        <Animated.View
          entering={FadeIn.delay(400).duration(500)}
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionTitle}>Account</Text>
        </Animated.View>
        
        <ProfileOption 
          icon={<User size={20} color={Colors.neutral[300]} />}
          title="Account Details"
          onPress={() => {}}
          delay={450}
        />
        
        <ProfileOption 
          icon={<Shield size={20} color={Colors.neutral[300]} />}
          title="Privacy & Security"
          onPress={() => {}}
          delay={500}
        />
        
        <ProfileOption 
          icon={<HelpCircle size={20} color={Colors.neutral[300]} />}
          title="Help & Support"
          onPress={() => {}}
          delay={550}
        />
        
        <ProfileOption 
          icon={<LogOut size={20} color={Colors.error[500]} />}
          title="Sign Out"
          onPress={() => {}}
          delay={600}
        />
        
        <Animated.View
          entering={FadeIn.delay(650).duration(500)}
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionTitle}>Bookmarks</Text>
        </Animated.View>
        
        {bookmarkedArticles.length === 0 ? (
          <Animated.View
            entering={FadeIn.delay(700).duration(500)}
            style={styles.emptyBookmarksContainer}
          >
            <BookMarked size={48} color={Colors.neutral[700]} />
            <Text style={styles.emptyBookmarksTitle}>No Bookmarks Yet</Text>
            <Text style={styles.emptyBookmarksText}>
              When you bookmark articles, they will appear here for easy access.
            </Text>
          </Animated.View>
        ) : (
          <Animated.View
            entering={FadeIn.delay(700).duration(500)}
            style={styles.bookmarksContainer}
          >
            {bookmarkedArticles.map((article, index) => (
              <ArticleCard 
                key={article.id}
                article={article}
                onPress={() => navigateToArticle(article.id)}
                index={index}
                compact
              />
            ))}
          </Animated.View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  scrollContent: {
    paddingBottom: Layout.spacing.xxl,
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
  profileCard: {
    flexDirection: 'row',
    backgroundColor: Colors.dark.card,
    borderRadius: Layout.borderRadius.large,
    padding: Layout.spacing.m,
    marginHorizontal: Layout.spacing.m,
    marginTop: Layout.spacing.m,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: Layout.spacing.m,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.dark.text,
    marginBottom: 2,
  },
  profileEmail: {
    fontSize: 14,
    color: Colors.neutral[400],
    marginBottom: Layout.spacing.s,
  },
  editProfileButton: {
    backgroundColor: Colors.primary[600],
    paddingVertical: 6,
    paddingHorizontal: Layout.spacing.m,
    borderRadius: Layout.borderRadius.medium,
    alignSelf: 'flex-start',
  },
  editProfileText: {
    color: Colors.dark.text,
    fontSize: 12,
    fontWeight: '600',
  },
  sectionHeader: {
    marginTop: Layout.spacing.l,
    marginBottom: Layout.spacing.s,
    paddingHorizontal: Layout.spacing.m,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.dark.text,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.dark.card,
    paddingVertical: Layout.spacing.m,
    paddingHorizontal: Layout.spacing.m,
    marginHorizontal: Layout.spacing.m,
    marginBottom: Layout.spacing.s,
    borderRadius: Layout.borderRadius.medium,
  },
  optionIconContainer: {
    width: 40,
    alignItems: 'center',
  },
  optionTitle: {
    flex: 1,
    fontSize: 16,
    color: Colors.dark.text,
  },
  optionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyBookmarksContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark.card,
    marginHorizontal: Layout.spacing.m,
    padding: Layout.spacing.xl,
    borderRadius: Layout.borderRadius.medium,
  },
  emptyBookmarksTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.dark.text,
    marginTop: Layout.spacing.m,
    marginBottom: Layout.spacing.s,
  },
  emptyBookmarksText: {
    fontSize: 14,
    color: Colors.neutral[400],
    textAlign: 'center',
    lineHeight: 20,
  },
  bookmarksContainer: {
    paddingHorizontal: Layout.spacing.m,
  },
});