export interface Population {
  total_residents: number;
  total_households: number;
  population_density: number;
  by_gender: {
    male: number;
    female: number;
  };
  by_religion: {
    islam: number;
    christianity: number;
    catholicism: number;
    hinduism: number;
    buddhism: number;
    other: number;
  };
  by_age: {
    label: string; 
    count: number;
  }[];
  by_education: {
    label: string; 
    count: number;
  }[];
  by_administration: {
    label: string; 
    count: number;
  }[];
  last_updated: string;
}
