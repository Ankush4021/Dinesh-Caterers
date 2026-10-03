// Google Business Profile ka link. "See all reviews" button yahi kholta hai.
export const googleProfile = {
  url: 'https://share.google/w5MiVN7ZIsCV81Ex7',
  rating: null, // jaise 4.9. Null rakhega to rating badge nahi dikhega.
  total: null, // jaise 120. Total reviews ki ginti.
};

// Har review ka format:
// { name: 'Customer ka naam', text: 'Review ka text', rating: 5, event: 'Wedding' }
// event optional hai, na dena ho to hata de.
export const reviews = [
  {
    name: 'Ritika Singh',
    text: '⭐ I really liked the food, it was fresh, tasty, and well presented. The service was excellent and everything was managed very smoothly. They are very professional, polite, and always ready to help with any request. If you are looking for good catering with quality food and reliable service, this is definitely the right contact.',
    rating: 5,
    event: 'Wedding',
  },
  {
    name: 'Vikas Singh',
    text: 'The catering team did a fantastic job. Right from setup to serving, everything was smooth. The best part was that the food tasted just like it looks -delicious! The team was very professional and courteous. I would highly recommend them for any event.',
    rating: 5,
    event: 'Corporate event',
  },
  {
    name: 'Shaurya Singh',
    text: 'We ordered catering for a family function and honestly the food was just perfect. Everyone kept asking who the caterer was. Especially the paneer and biryani - too good.',
    rating: 5,
    event: 'Family function',
  },
  {
    name: 'Shaurya Singh',
    text: 'Food quality and taste were very good. Guests enjoyed, especially the kids. Only thing, I do suggest a bit more variety next time. Otherwise, full paisa vasool.',
    rating: 5,
    event: 'Family function',
  }
];