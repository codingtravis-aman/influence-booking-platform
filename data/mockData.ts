// Mock data for influencers
export const influencerData = [
  {
    id: '1',
    name: 'Priya Sharma',
    profilePic: 'https://api.dev/assets/image?text=portrait%20of%20an%20indian%20female%20fashion%20influencer&aspect=1:1&seed=1',
    coverImage: 'https://api.dev/assets/image?text=fashion%20influencer%20posing%20with%20city%20skyline&aspect=16:9&seed=10',
    platform: 'Instagram',
    followers: '1.2M',
    engagementRate: 4.8,
    rating: 4.9,
    location: 'Mumbai',
    niche: 'Fashion',
    startingPrice: '25K',
    bio: 'Fashion and lifestyle influencer with a passion for sustainable fashion. Collaborations with major brands like H&M and Zara.',
    availability: ['Mon', 'Wed', 'Thu', 'Sat'],
    recentWork: [
      { id: 'w1', brand: 'H&M', image: 'https://api.a0.dev/assets/image?text=fashion%20influencer%20photoshoot%20with%20clothing%20brand&aspect=4:5&seed=101' },
      { id: 'w2', brand: 'Myntra', image: 'https://api.a0.dev/assets/image?text=fashion%20model%20posing%20with%20shopping%20bags&aspect=4:5&seed=102' },
      { id: 'w3', brand: 'Zara', image: 'https://api.a0.dev/assets/image?text=influencer%20wearing%20trendy%20outfit%20in%20urban%20setting&aspect=4:5&seed=103' },
    ],
    packages: [
      { id: 'p1', name: 'Basic Post', price: '₹25,000', description: '1 Instagram post with product placement' },
      { id: 'p2', name: 'Premium Package', price: '₹75,000', description: '3 posts + 5 stories + 1 Reel' },
      { id: 'p3', name: 'Full Campaign', price: '₹1,50,000', description: 'Complete 2-week campaign with multiple posts, stories, and exclusive content' },
    ],
  },
  {
    id: '2',
    name: 'Vikram Mehta',
    profilePic: 'https://api.dev/assets/image?text=portrait%20of%20an%20indian%20male%20tech%20influencer&aspect=1:1&seed=2',
    coverImage: 'https://api.dev/assets/image?text=tech%20influencer%20reviewing%20gadgets%20in%20modern%20studio&aspect=16:9&seed=20',
    platform: 'YouTube',
    followers: '850K',
    engagementRate: 6.2,
    rating: 4.7,
    location: 'Bangalore',
    niche: 'Tech',
    startingPrice: '45K',
    bio: 'Tech reviewer and gadget enthusiast. Creating in-depth reviews and unboxing videos of the latest tech products.',
    availability: ['Tue', 'Wed', 'Fri', 'Sun'],
    recentWork: [
      { id: 'w1', brand: 'OnePlus', image: 'https://api.dev/assets/image?text=tech%20influencer%20holding%20smartphone&aspect=4:5&seed=201' },
      { id: 'w2', brand: 'Boat', image: 'https://api.a0.dev/assets/image?text=man%20reviewing%20headphones%20in%20studio&aspect=4:5&seed=202' },
      { id: 'w3', brand: 'Samsung', image: 'https://api.a0.dev/assets/image?text=tech%20reviewer%20with%20latest%20gadgets&aspect=4:5&seed=203' },
    ],
    packages: [
      { id: 'p1', name: 'Product Review', price: '₹45,000', description: '10-15 minute dedicated YouTube review' },
      { id: 'p2', name: 'Comparison Video', price: '₹65,000', description: 'Comparison with competitor products, highlighting your USPs' },
      { id: 'p3', name: 'Tech Series', price: '₹1,20,000', description: 'Series of 3 videos featuring your product line with social media promotion' },
    ],
  },
  {
    id: '3',
    name: 'Aarav Fitness',
    profilePic: 'https://api.dev/assets/image?text=portrait%20of%20muscular%20indian%20fitness%20influencer&aspect=1:1&seed=3',
    coverImage: 'https://api.dev/assets/image?text=fitness%20influencer%20working%20out%20in%20gym&aspect=16:9&seed=30',
    platform: 'Instagram',
    followers: '680K',
    engagementRate: 5.7,
    rating: 4.8,
    location: 'Delhi',
    niche: 'Fitness',
    startingPrice: '35K',
    bio: 'Certified fitness trainer and nutrition expert. Helping people transform their bodies and lifestyles through workout routines and diet plans.',
    availability: ['Mon', 'Tue', 'Thu', 'Fri', 'Sat'],
    recentWork: [
      { id: 'w1', brand: 'MyProtein', image: 'https://api.dev/assets/image?text=fitness%20influencer%20with%20protein%20supplements&aspect=4:5&seed=301' },
      { id: 'w2', brand: 'Nike', image: 'https://api.a0.dev/assets/image?text=muscular%20man%20in%20workout%20clothes%20at%20gym&aspect=4:5&seed=302' },
      { id: 'w3', brand: 'Fitbit', image: 'https://api.a0.dev/assets/image?text=fitness%20model%20checking%20smartwatch%20during%20workout&aspect=4:5&seed=303' },
    ],
    packages: [
      { id: 'p1', name: 'Product Feature', price: '₹35,000', description: '1 dedicated post + 3 stories featuring your fitness product' },
      { id: 'p2', name: 'Workout Series', price: '₹80,000', description: '5 posts series showcasing workout routines with your products' },
      { id: 'p3', name: 'Brand Ambassador', price: '₹2,00,000', description: '1-month brand ambassadorship with regular content and exclusivity' },
    ],
  },
  {
    id: '4',
    name: 'Meera Patel',
    profilePic: 'https://api.dev/assets/image?text=portrait%20of%20indian%20female%20beauty%20influencer&aspect=1:1&seed=4',
    coverImage: 'https://api.a0.dev/assets/image?text=beauty%20influencer%20showing%20makeup%20techniques&aspect=16:9&seed=40',
    platform: 'Instagram',
    followers: '950K',
    engagementRate: 5.3,
    rating: 4.6,
    location: 'Hyderabad',
    niche: 'Beauty',
    startingPrice: '40K',
    bio: 'Beauty expert and makeup artist. Creating tutorials, product reviews, and skincare routines for all skin types.',
    availability: ['Wed', 'Thu', 'Fri', 'Sun'],
    recentWork: [
      { id: 'w1', brand: 'Nykaa', image: 'https://api.a0.dev/assets/image?text=beauty%20influencer%20applying%20makeup&aspect=4:5&seed=401' },
      { id: 'w2', brand: 'Sugar', image: 'https://api.dev/assets/image?text=woman%20with%20various%20cosmetic%20products&aspect=4:5&seed=402' },
      { id: 'w3', brand: 'Maybelline', image: 'https://api.a0.dev/assets/image?text=beauty%20content%20creator%20filming%20tutorial&aspect=4:5&seed=403' },
    ],
    packages: [
      { id: 'p1', name: 'Product Review', price: '₹40,000', description: 'Dedicated post and stories reviewing your beauty product' },
      { id: 'p2', name: 'Tutorial Feature', price: '₹70,000', description: 'Full makeup tutorial featuring your product line' },
      { id: 'p3', name: 'Beauty Campaign', price: '₹1,80,000', description: 'Full product launch campaign with multiple content pieces over 2 weeks' },
    ],
  },
  {
    id: '5',
    name: 'Arjun Travels',
    profilePic: 'https://api.a0.dev/assets/image?text=portrait%20of%20indian%20male%20travel%20influencer&aspect=1:1&seed=5',
    coverImage: 'https://api.a0.dev/assets/image?text=travel%20influencer%20at%20scenic%20mountain%20destination&aspect=16:9&seed=50',
    platform: 'Instagram',
    followers: '530K',
    engagementRate: 7.2,
    rating: 4.9,
    location: 'Pune',
    niche: 'Travel',
    startingPrice: '30K',
    bio: 'Full-time traveler exploring hidden gems across India and beyond. Specializes in budget travel guides and breathtaking photography.',
    availability: ['Mon', 'Tue', 'Wed', 'Sat'],
    recentWork: [
      { id: 'w1', brand: 'MakeMyTrip', image: 'https://api.dev/assets/image?text=travel%20content%20creator%20at%20beach%20resort&aspect=4:5&seed=501' },
      { id: 'w2', brand: 'GoIbibo', image: 'https://api.a0.dev/assets/image?text=man%20with%20backpack%20hiking%20in%20mountains&aspect=4:5&seed=502' },
      { id: 'w3', brand: 'Airbnb', image: 'https://api.a0.dev/assets/image?text=travel%20influencer%20in%20luxury%20hotel%20room&aspect=4:5&seed=503' },
    ],
    packages: [
      { id: 'p1', name: 'Destination Feature', price: '₹30,000', description: '3 posts + 5 stories showcasing your destination/property' },
      { id: 'p2', name: 'Travel Series', price: '₹85,000', description: 'Full travel blog + video content of the experience' },
      { id: 'p3', name: 'Luxury Experience', price: '₹1,50,000', description: 'Premium content creation with professional videography and extended stay' },
    ],
  }
];

// Mock data for bookings
export const bookingsData = [
  {
    id: 'b1',
    influencerId: '1',
    status: 'upcoming',
    date: '2025-03-15',
    packageName: 'Premium Package',
    amount: '₹75,000',
  },
  {
    id: 'b2',
    influencerId: '3',
    status: 'completed',
    date: '2025-02-20',
    packageName: 'Product Feature',
    amount: '₹35,000',
  },
  {
    id: 'b3',
    influencerId: '2',
    status: 'upcoming',
    date: '2025-03-25',
    packageName: 'Product Review',
    amount: '₹45,000',
  }
];

// Mock conversations data
export const conversationsData = [
  {
    id: 'c1',
    influencerId: '1',    lastMessage: 'I\'m excited about our upcoming collaboration!',
    timestamp: '10:30 AM',
    unread: 2,
  },
  {
    id: 'c2',
    influencerId: '2',
    lastMessage: 'Sure, I can post the review by next Tuesday.',
    timestamp: 'Yesterday',
    unread: 0,
  },
  {
    id: 'c3',
    influencerId: '4',
    lastMessage: 'Could you send me the product details?',
    timestamp: 'Mar 1',
    unread: 0,
  }
];