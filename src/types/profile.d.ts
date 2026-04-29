export interface Profile {
  name: string;
  vision: string;
  mission: string[];
  history: string;
  address: string;
  contact: {
    email: string;
    phone: string;
    whatsapp?: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  map_embed_url?: string;
}