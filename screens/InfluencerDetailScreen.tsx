import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { influencerData } from '../data/mockData';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const tabBarHeight = 50;

const InfluencerDetailScreen = ({ route, navigation }) => {
  const { influencerId } = route.params;
  const influencer = influencerData.find(inf => inf.id === influencerId);
  
  const [activeTab, setActiveTab] = useState('portfolio');
  
  if (!influencer) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Influencer not found</Text>
      </SafeAreaView>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'portfolio':
        return (
          <View style={styles.portfolioContainer}>
            <Text style={styles.sectionTitle}>Recent Work</Text>
            <FlatList
              data={influencer.recentWork}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.portfolioItem}>
                  <Image source={{ uri: item.image }} style={styles.portfolioImage} />
                  <View style={styles.portfolioBrandTag}>
                    <Text style={styles.portfolioBrandText}>{item.brand}</Text>
                  </View>
                </View>
              )}
              contentContainerStyle={styles.portfolioList}
            />
            
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.bioText}>{influencer.bio}</Text>
            
            <View style={styles.statsGrid}>
              <View style={styles.statBox}>
                <Text style={styles.statValue}>{influencer.followers}</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
              
              <View style={styles.statBox}>
                <Text style={styles.statValue}>{influencer.engagementRate}%</Text>
                <Text style={styles.statLabel}>Engagement</Text>
              </View>
              
              <View style={styles.statBox}>
                <View style={styles.ratingBox}>
                  <Text style={styles.statValue}>{influencer.rating}</Text>
                  <Ionicons name="star" size={16} color="#FFD700" style={styles.ratingIcon} />
                </View>
                <Text style={styles.statLabel}>Rating</Text>
              </View>
            </View>
          </View>
        );
      
      case 'packages':
        return (
          <View style={styles.packagesContainer}>
            {influencer.packages.map((pkg) => (
              <TouchableOpacity 
                key={pkg.id} 
                style={styles.packageCard}
                onPress={() => navigation.navigate('BookingScreen', { 
                  influencerId: influencer.id,
                  packageId: pkg.id 
                })}
              >
                <View style={styles.packageHeader}>
                  <Text style={styles.packageName}>{pkg.name}</Text>
                  <Text style={styles.packagePrice}>{pkg.price}</Text>
                </View>
                <Text style={styles.packageDescription}>{pkg.description}</Text>
                <TouchableOpacity style={styles.selectPackageButton}>
                  <Text style={styles.selectPackageText}>Select</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
            
            <TouchableOpacity style={styles.customPackageButton}>
              <Text style={styles.customPackageText}>Request Custom Package</Text>
            </TouchableOpacity>
          </View>
        );
      
      case 'availability':
        return (
          <View style={styles.availabilityContainer}>
            <Text style={styles.sectionTitle}>Available On</Text>
            <View style={styles.daysContainer}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <View 
                  key={day} 
                  style={[
                    styles.dayItem,
                    influencer.availability.includes(day) && styles.availableDay
                  ]}
                >
                  <Text 
                    style={[
                      styles.dayText,
                      influencer.availability.includes(day) && styles.availableDayText
                    ]}
                  >
                    {day}
                  </Text>
                </View>
              ))}
            </View>
            
            <Text style={styles.availabilityNote}>
              The influencer typically responds within 24-48 hours
            </Text>
            
            <Text style={styles.sectionTitle}>Booking Calendar</Text>
            <View style={styles.calendarPlaceholder}>
              <MaterialIcons name="date-range" size={40} color="#ccc" />
              <Text style={styles.calendarPlaceholderText}>
                Calendar will show available dates
              </Text>
            </View>
          </View>
        );
      
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Cover Image & Header */}
        <View style={styles.coverContainer}>
          <Image source={{ uri: influencer.coverImage }} style={styles.coverImage} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.gradient}
          />
          
          <View style={styles.backButtonContainer}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.profileInfoContainer}>
            <Image source={{ uri: influencer.profilePic }} style={styles.profileImage} />
            
            <View style={styles.nameSection}>
              <Text style={styles.name}>{influencer.name}</Text>
              <View style={styles.locationContainer}>
                <Ionicons name="location-outline" size={16} color="#fff" />
                <Text style={styles.location}>{influencer.location}</Text>
              </View>
              
              <View style={styles.tagContainer}>
                <View style={styles.nicheTag}>
                  <Text style={styles.nicheText}>{influencer.niche}</Text>
                </View>
                
                <View style={styles.platformTag}>
                  {influencer.platform === 'Instagram' && <Ionicons name="logo-instagram" size={14} color="#fff" />}
                  {influencer.platform === 'YouTube' && <Ionicons name="logo-youtube" size={14} color="#fff" />}
                  {influencer.platform === 'TikTok' && <FontAwesome name="music" size={14} color="#fff" />}
                  <Text style={styles.platformText}>{influencer.platform}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        
        {/* Tab Bar */}
        <View style={styles.tabBar}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'portfolio' && styles.activeTab]}
            onPress={() => setActiveTab('portfolio')}
          >
            <Text 
              style={[styles.tabText, activeTab === 'portfolio' && styles.activeTabText]}
            >
              Portfolio
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'packages' && styles.activeTab]}
            onPress={() => setActiveTab('packages')}
          >
            <Text 
              style={[styles.tabText, activeTab === 'packages' && styles.activeTabText]}
            >
              Packages
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'availability' && styles.activeTab]}
            onPress={() => setActiveTab('availability')}
          >
            <Text 
              style={[styles.tabText, activeTab === 'availability' && styles.activeTabText]}
            >
              Availability
            </Text>
          </TouchableOpacity>
        </View>
        
        {/* Tab Content */}
        {renderTabContent()}
        
        <View style={{ height: 100 }} />
      </ScrollView>
      
      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.messageButton}>
          <Ionicons name="chatbubble-outline" size={24} color="#5E60CE" />
          <Text style={styles.messageButtonText}>Message</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.bookNowButton}
          onPress={() => navigation.navigate('BookingScreen', { influencerId: influencer.id })}
        >
          <Text style={styles.bookNowButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  coverContainer: {
    height: 300,
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 160,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfoContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#fff',
  },
  nameSection: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  location: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 4,
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  nicheTag: {
    backgroundColor: '#5E60CE',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  nicheText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  platformTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  platformText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 4,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    height: tabBarHeight,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#5E60CE',
  },
  tabText: {
    fontSize: 14,
    color: '#777',
  },
  activeTabText: {
    color: '#5E60CE',
    fontWeight: '600',
  },
  portfolioContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 8,
  },
  portfolioList: {
    paddingRight: 16,
  },
  portfolioItem: {
    marginRight: 12,
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
  },
  portfolioImage: {
    width: width / 2.5,
    height: width / 2,
    borderRadius: 8,
  },
  portfolioBrandTag: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  portfolioBrandText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  bioText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  statsGrid: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 16,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginRight: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    marginLeft: 4,
  },
  packagesContainer: {
    padding: 16,
  },
  packageCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  packageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  packageName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  packagePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5E60CE',
  },
  packageDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  selectPackageButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  selectPackageText: {
    color: '#5E60CE',
    fontSize: 14,
    fontWeight: '600',
  },
  customPackageButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#5E60CE',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  customPackageText: {
    color: '#5E60CE',
    fontSize: 16,
    fontWeight: '600',
  },
  availabilityContainer: {
    padding: 16,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dayItem: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  availableDay: {
    backgroundColor: '#5E60CE',
  },
  dayText: {
    fontSize: 12,
    color: '#777',
  },
  availableDayText: {
    color: '#fff',
    fontWeight: '600',
  },
  availabilityNote: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 24,
  },
  calendarPlaceholder: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderStyle: 'dashed',
  },
  calendarPlaceholderText: {
    color: '#999',
    marginTop: 8,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  messageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#5E60CE',
    borderRadius: 24,
    marginRight: 12,
  },
  messageButtonText: {
    color: '#5E60CE',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },
  bookNowButton: {
    flex: 1,
    backgroundColor: '#5E60CE',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookNowButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default InfluencerDetailScreen;