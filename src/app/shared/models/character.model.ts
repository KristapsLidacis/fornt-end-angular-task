export interface CharacterApiResponse{
  info: CharacterInfo;
  results: Character[];
}

interface CharacterInfo{
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Character{
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
interface Location{
 name: string;
 url: string;
}
