export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const STATS = [
  { value: 20000, suffix: '+', label: 'Drivers Trained' },
  { value: 100, suffix: '%', label: 'Customer Satisfaction Guaranteed' },
  { value: 22, suffix: '+', label: 'Years of Experience' },
  { value: 1, suffix: ':1', label: 'Personalized Training' },
]

export const COURSE_TYPES = [
  {
    id: 'refresher',
    num: '01',
    title: 'Refresher Course',
    subtitle: 'For licensed drivers needing confidence boost',
    totalHours: 10,
    practicalHours: 8,
    theoryHours: 2,
    days: 8,
    description: 'Perfect for licensed drivers who need to regain confidence on main roads. 8 days of 1-hour daily practical sessions plus 2 hours of complimentary theory.',
    features: ['Main road practical sessions', 'Complimentary theory sessions', 'Traffic navigation refresher', 'Parking & reversing practice', 'RTO rules update'],
    acExtra: { '8': 1000 },
    pricing: {
      'Maruti Suzuki Swift': 4500,
      'Maruti Suzuki Wagon R': 4500,
      'Maruti Suzuki Swift Dzire': 5000,
      'Maruti Suzuki Baleno': 5000,
      'Maruti Suzuki Fronx': 5000,
    },
  },
  {
    id: 'basic',
    num: '02',
    title: 'Basic / Fresher Course',
    subtitle: 'Complete training for new learners',
    totalHours: 18,
    practicalHours: 16,
    theoryHours: 2,
    days: 16,
    description: 'Comprehensive training for first-time learners. 16 days of 1-hour daily main road sessions plus 2 hours of complimentary theory. Covers everything from basics to test-ready skills.',
    features: ['Complete beginner curriculum', 'Main road practical sessions', 'Complimentary theory sessions', 'Clutch & gear mastery', 'Traffic rules & signage', 'Parking techniques', 'RTO test preparation'],
    acExtra: { '16': 2000 },
    pricing: {
      'Maruti Suzuki Swift': 8500,
      'Maruti Suzuki Wagon R': 8500,
      'Maruti Suzuki Swift Dzire': 9500,
      'Maruti Suzuki Baleno': 9500,
      'Maruti Suzuki Fronx': 9500,
    },
  },
]

export const SERVICES = COURSE_TYPES

export const USP_FEATURES = [
  { title: 'Google 5.0 Rating', description: 'Highest rated driving school in Delhi — 5.0 stars from 500+ verified reviews.' },
  { title: '1:1 Training', description: 'Dedicated instructor per person — no shared sessions, ever.' },
  { title: '365 Days Open', description: 'We train on weekends, holidays, and public holidays without exception.' },
  { title: 'Free Pickup & Drop', description: 'Door-to-door service for your convenience.' },
  { title: 'Pause & Resume', description: 'Freeze your course for any reason. Sessions never expire.' },
  { title: 'Completion Guarantee', description: 'We train you until you\'re test-ready — at no extra cost.' },
  { title: '100% Pass Rate', description: 'Consistently above the Delhi RTO average since 2003.' },
  { title: 'RTO Assistance', description: 'We handle your application, slot booking, and test accompaniment.' },
  { title: 'Flexible Slots', description: 'Morning 6 AM to evening 8 PM — seven days a week.' },
]

export const FLEET = [
  {
    id: 1,
    name: 'Maruti Suzuki Fronx',
    type: 'SUV',
    transmission: 'Manual',
    price: '₹7,500/mo',
    tag: 'SUV',
    img: '/images/fronx.webp',
  },
  {
    id: 2,
    name: 'Maruti Suzuki Swift Dzire',
    type: 'Sedan',
    transmission: 'Manual',
    price: '₹6,000/mo',
    tag: 'Most Popular',
    img: '/images/dzire.webp',
  },
  {
    id: 3,
    name: 'Maruti Suzuki Swift',
    type: 'Hatchback',
    transmission: 'Manual',
    price: '₹5,500/mo',
    tag: 'Best Seller',
    img: '/images/swift.jpeg',
  },
  {
    id: 4,
    name: 'Maruti Suzuki Wagon R',
    type: 'Hatchback',
    transmission: 'Manual',
    price: '₹5,000/mo',
    tag: 'Beginner Friendly',
    img: '/images/wagonr.jpg',
  },
  {
    id: 5,
    name: 'Maruti Suzuki Baleno',
    type: 'Hatchback',
    transmission: 'Automatic',
    price: '₹6,500/mo',
    tag: 'Premium',
    img: '/images/baleno.webp',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Priya Mehta',
    location: 'Sector 7, RK Puram',
    text: 'Cleared my driving test on the very first attempt. Rajesh sir was patient and methodical — the 1:1 sessions gave me real confidence in Delhi traffic, not just test-day confidence.',
    date: 'March 2024',
    initials: 'PM',
    color: '#C8900A',
  },
  {
    name: 'Arjun Sharma',
    location: 'Vasant Vihar',
    text: 'I was genuinely terrified of the Ring Road. After 30 sessions I drive it daily without a second thought. The defensive driving module is worth every rupee on its own.',
    date: 'February 2024',
    initials: 'AS',
    color: '#162E5A',
  },
  {
    name: 'Sunita Kapoor',
    location: 'Munirka',
    text: 'Having a female instructor option was important to me. Priya ma\'am was professional and calm from day one, and free pickup from home made logistics effortless.',
    date: 'January 2024',
    initials: 'SK',
    color: '#1A5C3A',
  },
  {
    name: 'Rahul Verma',
    location: 'RK Puram',
    text: 'Switched from another school after 10 sessions of zero progress. Pro Motor got me test-ready in 20 sessions. The pause-and-resume policy meant work travel never disrupted my course.',
    date: 'December 2023',
    initials: 'RV',
    color: '#5C1A1A',
  },
  {
    name: 'Deepa Nair',
    location: 'Safdarjung Enclave',
    text: 'My husband and I enrolled together. Separate instructors, separate schedules — incredibly flexible. The RTO paperwork assistance alone saved us an entire day.',
    date: 'November 2023',
    initials: 'DN',
    color: '#3A1A5C',
  },
  {
    name: 'Vikram Singh',
    location: 'Malviya Nagar',
    text: 'Specifically needed highway confidence before a Chandigarh trip. Booked the expressway module, got exactly what I needed. Precise instruction, no fluff.',
    date: 'October 2023',
    initials: 'VS',
    color: '#1A3F5C',
  },
]

export const FAQS = [
  {
    q: 'How many sessions do I need to learn driving?',
    a: 'Most learners require 20–30 sessions of 45 minutes each. We customize the pace based on your progress. With 20+ years of experience, we know exactly what it takes to make you a confident, test-ready driver.',
  },
  {
    q: 'Do you provide pickup and drop service?',
    a: 'Yes. Free pickup and drop service available.',
  },
  {
    q: 'Can I pause my training midway?',
    a: 'Absolutely. Our Pause & Resume policy lets you freeze your package for any reason — travel, exams, or personal commitments. Your sessions never expire.',
  },
  {
    q: 'Do you help with the RTO licence test?',
    a: 'Yes. We handle documentation, booking your learner\'s and permanent licence slots, and can accompany you to the RTO on test day if needed.',
  },
  {
    q: 'What if I fail my driving test?',
    a: 'Our Completion Guarantee covers you fully. If you fail the RTO test after completing a course, we provide additional training until you pass — no questions asked.',
  },
]

export const INSTRUCTORS = [
  { name: 'Rajesh Kumar', exp: '15 Years', specialty: 'Manual & Defensive Driving', initials: 'RK', color: '#0C1F3F' },
  { name: 'Priya Sharma', exp: '10 Years', specialty: 'Automatic & Highway Driving', initials: 'PS', color: '#C8900A' },
  { name: 'Amit Singh', exp: '12 Years', specialty: 'SUV & Heavy Vehicle Training', initials: 'AS', color: '#162E5A' },
  { name: 'Sunita Verma', exp: '8 Years', specialty: 'Beginner & Female Learners', initials: 'SV', color: '#1A5C3A' },
]

export const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'