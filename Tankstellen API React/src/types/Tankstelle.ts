export interface Tankstelle {
  id: string;
  name: string;
  brand: string;
  street: string;
  place: string;
  lat: number;
  lng: number;
  dist: number;
  diesel: number;
  e5?: number;
  e10?: number;
  isOpen: boolean;
  houseNumber: string;
  postCode: number;
}

export interface TankstellenPayLoad {
  ok: boolean;
  license: string;
  data: string;
  status: string;
  stations: Tankstelle[];
}