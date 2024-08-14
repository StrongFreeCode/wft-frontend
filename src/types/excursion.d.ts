export interface Excursion {
  excursions: ExcursionElement[];
  links: Links;
  meta: Meta;
}

export interface ExcursionElement {
  id: number;
  nombre: string;
  url: string;
  descripcion: string;
  descripcion_resumen: string;
  fecha_inicio: Date;
  hora_salida: string;
  fecha_fin: Date;
  hora_regreso: string;
  precio_entrada: string;
  precio_final: number;
  capacidad_max: number;
  places: Place[];
  images: Image[];
  created_at: Date;
  updated_at: Date;
}

export interface Image {
  id: number;
  url: string;
}

export interface Place {
  id: number;
  nombre: string;
  time: string;
  descripcion: string;
  images: Image[];
}

export interface Links {
  first: string;
  last: string;
  prev: null;
  next: null;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}
