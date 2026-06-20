export type ListColumn = string;

export type ListItem = {
  id: string;
  col1: string; // e.g. Title / Restaurant
  col2: string; // e.g. Genre / Cuisine
  col3: string; // e.g. Year / Location
  col4: { label: string; url: string }; // e.g. Trailer / Map link
};

export type ListSectionData = {
  id: string;
  title: string;
  columns: [ListColumn, ListColumn, ListColumn, ListColumn];
  items: ListItem[];
};

export const listData: ListSectionData[] = [
  {
    id: 'films',
    title: 'Films',
    columns: ['Title', 'Genre', 'Year', 'Trailer'],
    items: [
      { id: 'f1', col1: 'Dune: Part Two', col2: 'Sci-Fi', col3: '2024', col4: { label: 'Trailer ↗', url: '#' } },
      { id: 'f2', col1: 'Past Lives', col2: 'Drama', col3: '2023', col4: { label: 'Trailer ↗', url: '#' } },
      { id: 'f3', col1: 'Blade Runner 2049', col2: 'Sci-Fi', col3: '2017', col4: { label: 'Trailer ↗', url: '#' } },
      { id: 'f4', col1: 'Parasite', col2: 'Thriller', col3: '2019', col4: { label: 'Trailer ↗', url: '#' } },
      { id: 'f5', col1: 'Interstellar', col2: 'Sci-Fi', col3: '2014', col4: { label: 'Trailer ↗', url: '#' } },
      { id: 'f6', col1: 'Whiplash', col2: 'Drama', col3: '2014', col4: { label: 'Trailer ↗', url: '#' } },
    ]
  },
  {
    id: 'tv',
    title: 'TV Series',
    columns: ['Title', 'Genre', 'Years', 'Watch'],
    items: [
      { id: 't1', col1: 'Succession', col2: 'Drama', col3: '2018–2023', col4: { label: 'HBO Max ↗', url: '#' } },
      { id: 't2', col1: 'Severance', col2: 'Sci-Fi', col3: '2022–', col4: { label: 'Apple TV+ ↗', url: '#' } },
      { id: 't3', col1: 'The Bear', col2: 'Drama', col3: '2022–', col4: { label: 'Hulu ↗', url: '#' } },
      { id: 't4', col1: 'Dark', col2: 'Sci-Fi', col3: '2017–2020', col4: { label: 'Netflix ↗', url: '#' } },
    ]
  },
  {
    id: 'performances',
    title: 'Performances',
    columns: ['Performance', 'Type', 'Year', 'Site'],
    items: [
      { id: 'p1', col1: 'Daft Punk: Alive', col2: 'Concert', col3: '2007', col4: { label: 'Archive ↗', url: '#' } },
      { id: 'p2', col1: 'Sleep No More', col2: 'Immersive', col3: '2023', col4: { label: 'Website ↗', url: '#' } },
      { id: 'p3', col1: 'Hans Zimmer Live', col2: 'Orchestral', col3: '2022', col4: { label: 'Tickets ↗', url: '#' } },
    ]
  },
  {
    id: 'dining',
    title: 'Dining',
    columns: ['Restaurant', 'Cuisine', 'Location', 'Maps'],
    items: [
      { id: 'd1', col1: 'Noma', col2: 'Nordic', col3: 'Copenhagen, DK', col4: { label: 'Google Maps ↗', url: '#' } },
      { id: 'd2', col1: 'Pujol', col2: 'Mexican', col3: 'Mexico City, MX', col4: { label: 'Google Maps ↗', url: '#' } },
      { id: 'd3', col1: 'Gaggan Anand', col2: 'Progressive Indian', col3: 'Bangkok, TH', col4: { label: 'Google Maps ↗', url: '#' } },
      { id: 'd4', col1: 'Atomix', col2: 'Korean', col3: 'New York, USA', col4: { label: 'Google Maps ↗', url: '#' } },
      { id: 'd5', col1: 'Osteria Francescana', col2: 'Italian', col3: 'Modena, IT', col4: { label: 'Google Maps ↗', url: '#' } },
    ]
  },
  {
    id: 'dwelling',
    title: 'Dwelling',
    columns: ['Property', 'Type', 'Location', 'Booking'],
    items: [
      { id: 'w1', col1: 'Aman Tokyo', col2: 'Hotel', col3: 'Tokyo, JP', col4: { label: 'Website ↗', url: '#' } },
      { id: 'w2', col1: 'Juvet Landscape Hotel', col2: 'Hotel', col3: 'Valldal, NO', col4: { label: 'Website ↗', url: '#' } },
      { id: 'w3', col1: 'The Krane', col2: 'Unique Stay', col3: 'Copenhagen, DK', col4: { label: 'Website ↗', url: '#' } },
    ]
  },
  {
    id: 'places',
    title: 'Places',
    columns: ['Place', 'Coordinates', 'Region', 'Map'],
    items: [
      { id: 'pl1', col1: 'Naoshima Art Island', col2: '34.455° N, 133.987° E', col3: 'Kagawa, JP', col4: { label: 'Google Maps ↗', url: '#' } },
      { id: 'pl2', col1: 'Salar de Uyuni', col2: '20.133° S, 67.625° W', col3: 'Daniel Campos, BO', col4: { label: 'Google Maps ↗', url: '#' } },
      { id: 'pl3', col1: 'Mount Bromo', col2: '7.942° S, 112.953° E', col3: 'East Java, ID', col4: { label: 'Google Maps ↗', url: '#' } },
      { id: 'pl4', col1: 'Zion Narrows', col2: '37.306° N, 112.947° W', col3: 'Utah, USA', col4: { label: 'Google Maps ↗', url: '#' } },
    ]
  }
];
