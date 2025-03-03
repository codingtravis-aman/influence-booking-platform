import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const categories = [
  { id: 'all', label: 'All', icon: 'apps' },
  { id: 'fashion', label: 'Fashion', icon: 'checkroom' },
  { id: 'beauty', label: 'Beauty', icon: 'face' },
  { id: 'fitness', label: 'Fitness', icon: 'fitness-center' },
  { id: 'food', label: 'Food', icon: 'restaurant' },
  { id: 'tech', label: 'Tech', icon: 'devices' },
  { id: 'travel', label: 'Travel', icon: 'flight' },
  { id: 'gaming', label: 'Gaming', icon: 'sports-esports' },
  { id: 'music', label: 'Music', icon: 'music-note' },
];

const FilterBar = ({ activeFilter, setActiveFilter }) => {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.filterItem,
              activeFilter === category.label && styles.activeFilterItem
            ]}
            onPress={() => setActiveFilter(category.label === 'All' ? 'All' : category.label)}
          >
            <MaterialIcons 
              name={category.icon} 
              size={20} 
              color={activeFilter === category.label ? '#ffffff' : '#444'} 
            />
            <Text 
              style={[
                styles.filterText,
                activeFilter === category.label && styles.activeFilterText
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <TouchableOpacity style={styles.advancedFilterButton}>
        <Ionicons name="options-outline" size={20} color="#5E60CE" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f3f5',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
  },
  activeFilterItem: {
    backgroundColor: '#5E60CE',
  },
  filterText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#444',
  },
  activeFilterText: {
    color: '#ffffff',
    fontWeight: '500',
  },
  advancedFilterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f2f3f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
});

export default FilterBar;