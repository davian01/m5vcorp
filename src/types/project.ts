export interface ProjectStats {
  location: string;
  units: string;
  beds: string;
  exitStrategy: string;
  status: string;
  assetClass: string;
  subType: string;
}

export interface Project {
  name: string;
  slug: string;
  assetClass: string;
  subType: string;
  description: string;
  stats: ProjectStats;
  longDescription: string;
  images: string[];
} 