import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import FooterMenuItem from '@/components/widget/FooterMenuItem';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'হোম',
          tabBarButton: (props) => (
            <FooterMenuItem {...props} title='হোম' link="/" icon="home"/>
          ),
        }}
      />
      <Tabs.Screen
        name="tasbeeh"
        
        options={{
          title: 'তাসবিহ',
          tabBarButton: (props) => (
            <FooterMenuItem {...props} title='তাসবিহ' link="/page/tasbeeh" icon="counter"/>
          ),
        }}
      />
      <Tabs.Screen
        name="dua"
        
        options={{
          title: 'দোয়া',
          tabBarButton: (props) => (
            <FooterMenuItem {...props} title='দোয়া' link="/dua" icon="hands-pray"/>
          ),
        }}
      />
      <Tabs.Screen
        name="sura"
        options={{
          title: 'সূরা',
          tabBarButton: (props) => (
            <FooterMenuItem {...props} title='সূরা' link="/menu/8" icon="book-open-page-variant-outline"/>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'রমাদান',
          tabBarButton: (props) => (
            <FooterMenuItem {...props} title='রমাদান' link="/explore" icon="weather-sunny"/>
          )
        }}
      />
    </Tabs>
  );
}
