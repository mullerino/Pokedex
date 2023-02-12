export interface Pokemon {
    id: number;
    img: string;
    num: string;
    name: string;
    type: string[];
    egg: string;
    height: string;
    weight: string;
    weaknesses: string[];
    spawn_chance: number;
    next_evolution: evolutionPok[];
    prev_evolution: evolutionPok[];
  }

  interface evolutionPok{
    name: string;
    num: number;
  }