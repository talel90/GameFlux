import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Layout } from '@/constants/Layout';
import { ChevronRight } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

interface SectionHeaderProps {
  title: string;
  onSeeAllPress?: () => void;
  delay?: number;
}

export default function SectionHeader({ title, onSeeAllPress, delay = 0 }: SectionHeaderProps) {
  return (
    <Animated.View 
      entering={FadeIn.delay(delay).duration(500)}
      style={styles.container}
    >
      <Text style={styles.title}>{title}</Text>
      
      {onSeeAllPress && (
        <TouchableOpacity 
          onPress={onSeeAllPress} 
          style={styles.seeAllButton}
          activeOpacity={0.7}
        >
          <Text style={styles.seeAllText}>See All</Text>
          <ChevronRight size={16} color={Colors.primary[500]} />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.spacing.m,
    paddingHorizontal: Layout.spacing.m,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.dark.text,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 14,
    color: Colors.primary[500],
    fontWeight: '600',
    marginRight: 2,
  },
});