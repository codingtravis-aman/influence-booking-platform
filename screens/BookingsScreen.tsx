import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { bookingsData, influencerData } from '../data/mockData';

const BookingsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const filteredBookings = bookingsData.filter(booking => 
    booking.status === activeTab
  );
  
  const getInfluencerById = (id) => {
    return influencerData.find(influencer => influencer.id === id);
  };
  
  const renderBookingItem = ({ item }) => {
    const influencer = getInfluencerById(item.influencerId);
    
    if (!influencer) return null;
    
    return (
      <TouchableOpacity 
        style={styles.bookingCard}
        onPress={() => navigation.navigate('InfluencerDetail', { influencerId: influencer.id })}
      >
        <View style={styles.bookingHeader}>
          <View style={styles.influencerInfo}>
            <Image source={{ uri: influencer.profilePic }} style={styles.influencerImage} />
            <View>
              <Text style={styles.influencerName}>{influencer.name}</Text>
              <Text style={styles.bookingDate}>
                {new Date(item.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </Text>
            </View>
          </View>
          
          <View style={[
            styles.statusBadge,
            item.status === 'upcoming' ? styles.upcomingBadge : styles.completedBadge
          ]}>
            <Text style={styles.statusText}>
              {item.status === 'upcoming' ? 'Upcoming' : 'Completed'}
            </Text>
          </View>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.bookingDetails}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Package:</Text>
            <Text style={styles.detailValue}>{item.packageName}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Amount:</Text>
            <Text style={styles.detailAmount}>{item.amount}</Text>
          </View>
        </View>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={styles.messageButton}
            onPress={() => navigation.navigate('Messages')}
          >
            <Ionicons name="chatbubble-outline" size={20} color="#5E60CE" />
            <Text style={styles.messageButtonText}>Message</Text>
          </TouchableOpacity>
          
          {item.status === 'upcoming' ? (
            <TouchableOpacity 
              style={styles.rescheduleButton}
              onPress={() => navigation.navigate('BookingScreen', { influencerId: influencer.id })}
            >
              <MaterialIcons name="schedule" size={20} color="#5E60CE" />
              <Text style={styles.rescheduleButtonText}>Reschedule</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity 
              style={styles.reviewButton}
              onPress={() => {}}
            >
              <Ionicons name="star-outline" size={20} color="#5E60CE" />
              <Text style={styles.reviewButtonText}>Leave Review</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Bookings</Text>
        <View style={{ width: 40 }} />
      </View>
      
      {/* Tabs */}
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'upcoming' && styles.activeTab]}
          onPress={() => setActiveTab('upcoming')}
        >
          <Text 
            style={[styles.tabText, activeTab === 'upcoming' && styles.activeTabText]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'completed' && styles.activeTab]}
          onPress={() => setActiveTab('completed')}
        >
          <Text 
            style={[styles.tabText, activeTab === 'completed' && styles.activeTabText]}
          >
            Completed
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'cancelled' && styles.activeTab]}
          onPress={() => setActiveTab('cancelled')}
        >
          <Text 
            style={[styles.tabText, activeTab === 'cancelled' && styles.activeTabText]}
          >
            Cancelled
          </Text>
        </TouchableOpacity>
      </View>
      
      {/* Booking List */}
      {filteredBookings.length > 0 ? (
        <FlatList
          data={filteredBookings}
          keyExtractor={(item) => item.id}
          renderItem={renderBookingItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyState}>
          <MaterialIcons name="event-busy" size={60} color="#ccc" />
          <Text style={styles.emptyStateTitle}>No {activeTab} bookings</Text>
          <Text style={styles.emptyStateSubtitle}>
            {activeTab === 'upcoming' 
              ? 'Book an influencer to see upcoming bookings here'
              : activeTab === 'completed'
              ? 'Your completed bookings will appear here'
              : 'Cancelled bookings will appear here'
            }
          </Text>
          {activeTab === 'upcoming' && (
            <TouchableOpacity 
              style={styles.browseButton}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.browseButtonText}>Browse Influencers</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home-outline" size={24} color="#999" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="date-range" size={24} color="#5E60CE" />
          <Text style={[styles.navText, styles.activeNavText]}>Bookings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Messages')}
        >
          <Ionicons name="chatbubble-outline" size={24} color="#999" />
          <Text style={styles.navText}>Messages</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons name="person-outline" size={24} color="#999" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#5E60CE',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#5E60CE',
    fontWeight: '600',
  },
  listContent: {
    padding: 16,
  },
  bookingCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  influencerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  influencerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  influencerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bookingDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
  },
  upcomingBadge: {
    backgroundColor: '#e6f7ff',
  },
  completedBadge: {
    backgroundColor: '#f0f9eb',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#5E60CE',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 12,
  },
  bookingDetails: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  detailAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5E60CE',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    flex: 1,
    marginRight: 8,
  },
  messageButtonText: {
    color: '#5E60CE',
    marginLeft: 6,
    fontWeight: '500',
    fontSize: 14,
  },
  rescheduleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    flex: 1,
    marginLeft: 8,
  },
  rescheduleButtonText: {
    color: '#5E60CE',
    marginLeft: 6,
    fontWeight: '500',
    fontSize: 14,
  },
  reviewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    flex: 1,
    marginLeft: 8,
  },
  reviewButtonText: {
    color: '#5E60CE',
    marginLeft: 6,
    fontWeight: '500',
    fontSize: 14,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
  },
  emptyStateSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  browseButton: {
    backgroundColor: '#5E60CE',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  browseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#999',
  },
  activeNavText: {
    color: '#5E60CE',
    fontWeight: '500',
  },
});

export default BookingsScreen;