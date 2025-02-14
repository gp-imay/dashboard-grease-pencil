import { supabase } from '../lib/supabase';

export interface Script {
  id: string;
  name: string;
  genre: string;
  progress: number;
  created_at: string;
}

const mockScripts: Script[] = [
  {
    id: '1',
    name: 'The Last Horizon',
    genre: 'Action',
    progress: 75,
    created_at: '2024-03-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Coffee & Dreams',
    genre: 'Comedy',
    progress: 45,
    created_at: '2024-03-14T15:30:00Z'
  },
  {
    id: '3',
    name: 'Neural Path',
    genre: 'Sci-fi',
    progress: 90,
    created_at: '2024-03-13T09:15:00Z'
  },
  {
    id: '4',
    name: 'Heartstrings',
    genre: 'Rom-com',
    progress: 30,
    created_at: '2024-03-12T14:45:00Z'
  },
  {
    id: '5',
    name: 'City Lights',
    genre: 'Drama',
    progress: 60,
    created_at: '2024-03-11T11:20:00Z'
  }
];

export const mockApi = {
  async getUserScripts(): Promise<Script[]> {
    const { data: { session } } = await supabase.auth.getSession();
    
    // In a real implementation, we would fetch scripts based on the user's ID
    // For now, we'll just return mock data after a small delay to simulate an API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return mockScripts;
  }
};