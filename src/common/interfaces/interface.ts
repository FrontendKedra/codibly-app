export interface Data {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Data[];
  support: Support;
}