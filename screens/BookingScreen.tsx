import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { influencerData } from '../data/mockData';
import { toast } from 'sonner-native';

const BookingScreen = ({ route, navigation }) => {
  const { influencerId, packageId } = route.params;
  const influencer = influencerData.find(inf => inf.id === influencerId);
  
  // Get the selected package or default to the first one
  const selectedPackage = packageId 
    ? influencer.packages.find(pkg => pkg.id === packageId) 
    : influencer.packages[0];
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [campaignType, setCampaignType] = useState('post');
  const [customRequests, setCustomRequests] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  if (!influencer) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Influencer not found</Text>
      </SafeAreaView>
    );
  }

  const handleBooking = () => {
    if (!selectedDate) {
      toast.error('Please select a date');
      return;
    }
    
    // Simulate booking process
    toast.success('Booking successful!');
    
    // Navigate to the bookings page
    setTimeout(() => {
      navigation.navigate('Bookings');
    }, 1500);
  };

  const campaignTypes = [
    { id: 'post', label: 'Post', icon: 'image-outline' },
    { id: 'story', label: 'Story', icon: 'movie-outline' },
    { id: 'video', label: 'Video', icon: 'videocam-outline' },
    { id: 'reel', label: 'Reel', icon: 'play-circle-outline' },
  ];

  // Dummy dates for availability
  const availableDates = [
    '2025-03-08',
    '2025-03-09',
    '2025-03-15',
    '2025-03-16',
    '2025-03-22',
    '2025-03-23',
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Influencer</Text>
        <View style={styles.placeholderView} />
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Influencer Summary */}
        <View style={styles.influencerSummary}>
          <Image 
            source={{ uri: influencer.profilePic }} 
            style={styles.influencerImage} 
          />
          <View style={styles.influencerInfo}>
            <Text style={styles.influencerName}>{influencer.name}</Text>
            <View style={styles.influencerDetails}>
              <View style={styles.nicheTag}>
                <Text style={styles.nicheText}>{influencer.niche}</Text>
              </View>
              <View style={styles.platformTag}>
                <Ionicons 
                  name={influencer.platform === 'Instagram' ? 'logo-instagram' : 
                        influencer.platform === 'YouTube' ? 'logo-youtube' : 'musical-notes'} 
                  size={14} 
                  color="#5E60CE" 
                />
                <Text style={styles.platformText}>{influencer.platform}</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Selected Package */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Selected Package</Text>
          <View style={styles.packageCard}>
            <View style={styles.packageHeader}>
              <Text style={styles.packageName}>{selectedPackage.name}</Text>
              <Text style={styles.packagePrice}>{selectedPackage.price}</Text>
            </View>
            <Text style={styles.packageDescription}>{selectedPackage.description}</Text>
            
            <TouchableOpacity 
              style={styles.changePackageButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.changePackageText}>Change Package</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Date Selection */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Select Date</Text>
          <View style={styles.dateSelectionContainer}>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.datesScrollContent}
            >
              {availableDates.map((date) => {
                const dateObj = new Date(date);
                const day = dateObj.getDate();
                const month = dateObj.toLocaleString('default', { month: 'short' });
                const isSelected = selectedDate === date;
                
                return (
                  <TouchableOpacity
                    key={date}
                    style={[styles.dateItem, isSelected && styles.selectedDateItem]}
                    onPress={() => setSelectedDate(date)}
                  >
                    <Text style={[styles.dateMonth, isSelected && styles.selectedDateText]}>
                      {month}
                    </Text>
                    <Text style={[styles.dateDay, isSelected && styles.selectedDateText]}>
                      {day}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          
          <Text style={styles.dateSelectionPrompt}>
            {selectedDate ? `Selected: ${new Date(selectedDate).toDateString()}` : 'Please select a available date'}
          </Text>
        </View>
        
        {/* Campaign Type */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Campaign Type</Text>
          <View style={styles.campaignTypesContainer}>
            {campaignTypes.map((type) => (
              <TouchableOpacity
                key={type.id}
                style={[
                  styles.campaignTypeItem,
                  campaignType === type.id && styles.selectedCampaignType
                ]}
                onPress={() => setCampaignType(type.id)}
              >
                <Ionicons 
                  name={type.icon} 
                  size={24} 
                  color={campaignType === type.id ? '#fff' : '#5E60CE'} 
                />
                <Text 
                  style={[
                    styles.campaignTypeText,
                    campaignType === type.id && styles.selectedCampaignTypeText
                  ]}
                >
                  {type.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Custom Requests */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Additional Requests</Text>
          <TextInput
            style={styles.customRequestsInput}
            placeholder="Add specific requirements, product details, or instructions..."
            value={customRequests}
            onChangeText={setCustomRequests}
            multiline
            textAlignVertical="top"
          />
        </View>
        
        {/* Price Summary */}
        <View style={styles.priceSummaryContainer}>
          <Text style={styles.priceSummaryTitle}>Price Summary</Text>
          
          <View style={styles.priceRow}>
            <Text style={styles.priceItemLabel}>Base Package</Text>
            <Text style={styles.priceItemValue}>{selectedPackage.price}</Text>
          </View>
          
          {campaignType === 'video' && (
            <View style={styles.priceRow}>
              <Text style={styles.priceItemLabel}>Video Content (+20%)</Text>
              <Text style={styles.priceItemValue}>
                +₹{parseInt(selectedPackage.price.replace(/[^\d]/g, '')) * 0.2 / 1000}K
              </Text>
            </View>
          )}
          
          <View style={styles.priceRow}>
            <Text style={styles.priceItemLabel}>Platform Fee (5%)</Text>
            <Text style={styles.priceItemValue}>
              +₹{parseInt(selectedPackage.price.replace(/[^\d]/g, '')) * 0.05 / 1000}K
            </Text>
          </View>
          
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalValue}>
              ₹{(
                parseInt(selectedPackage.price.replace(/[^\d]/g, '')) * 
                (1 + (campaignType === 'video' ? 0.2 : 0) + 0.05) / 1000
              ).toFixed(1)}K
            </Text>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.bookButton}
            onPress={handleBooking}
          >
            <Text style={styles.bookButtonText}>Confirm Booking</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{ height: 30 }} />
      </ScrollView>
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
  placeholderView: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  influencerSummary: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  influencerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  influencerInfo: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  influencerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  influencerDetails: {
    flexDirection: 'row',
    marginTop: 4,
  },
  nicheTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  nicheText: {
    color: '#5E60CE',
    fontSize: 12,
    fontWeight: '500',
  },
  platformTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  platformText: {
    color: '#5E60CE',
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 4,
  },
  sectionContainer: {
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  packageCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
  },
  packageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  packageName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  packagePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5E60CE',
  },
  packageDescription: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  changePackageButton: {
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  changePackageText: {
    color: '#5E60CE',
    fontSize: 14,
    fontWeight: '500',
  },
  dateSelectionContainer: {
    marginBottom: 12,
  },
  datesScrollContent: {
    paddingRight: 16,
  },
  dateItem: {
    width: 60,
    height: 70,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  selectedDateItem: {
    backgroundColor: '#5E60CE',
  },
  dateMonth: {
    fontSize: 14,
    color: '#666',
  },
  dateDay: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  selectedDateText: {
    color: '#fff',
  },
  dateSelectionPrompt: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  campaignTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  campaignTypeItem: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginRight: 8,
  },
  selectedCampaignType: {
    backgroundColor: '#5E60CE',
  },
  campaignTypeText: {
    color: '#5E60CE',
    marginTop: 8,
    fontSize: 14,
  },
  selectedCampaignTypeText: {
    color: '#fff',
  },
  customRequestsInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    height: 100,
    textAlignVertical: 'top',
  },
  priceSummaryContainer: {
    backgroundColor: '#fff',
    marginTop: 8,
    padding: 16,
    borderRadius: 8,
  },
  priceSummaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  priceItemLabel: {
    fontSize: 14,
    color: '#666',
  },
  priceItemValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    marginTop: 4,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5E60CE',
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 8,
  },
  bookButton: {
    backgroundColor: '#5E60CE',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingScreen;