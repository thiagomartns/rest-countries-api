export interface ICountry {
  name: string;
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  borders: string[];
  languages: {
    name: string;
  }[];
  id: number;
}
