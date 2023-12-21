export interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  height: number;
  weight: number;
  img: string;
  color: string;
  hp: number;
  exp: number;
  url: string;
}

export interface Type {
  type: {
    name: string;
    url: string;
  };
}

export type PartialPokemon = Partial<Pokemon>;
