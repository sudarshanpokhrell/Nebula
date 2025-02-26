import { Meditation } from './types';

export const meditations: Meditation[] = [
  {
    id: 1,
    title: '60 Seconds of Mindfulness',
    duration: 1,
    type: 'audio',
    pro: false,
    image: 'https://images.pexels.com/photos/3772612/pexels-photo-3772612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Add an image URL here
  },
  {
    id: 2,
    title: '5 Minute Breathing Exercise',
    duration: 5,
    type: 'audio',
    pro: true,
    image: 'https://images.pexels.com/photos/1234035/pexels-photo-1234035.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'Body Scan Meditation',
    duration: 10,
    type: 'audio',
    pro: true,
    image: 'https://images.pexels.com/photos/1179863/pexels-photo-1179863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Loving-Kindness Practice',
    duration: 15,
    type: 'audio',
    pro: true,
    image: 'https://images.pexels.com/photos/1179863/pexels-photo-1179863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    title: 'Stress Relief Meditation',
    duration: 8,
    type: 'audio',
    pro: true,
    image: 'https://images.pexels.com/photos/158465/waterlily-pink-water-lily-water-plant-158465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    title: 'Morning Energy Boost',
    duration: 3,
    type: 'audio',
    pro: true,
    image: 'https://images.pexels.com/photos/1179863/pexels-photo-1179863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];
