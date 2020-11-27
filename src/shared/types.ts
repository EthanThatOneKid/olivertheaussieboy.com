export interface InstagramProfileTarget {
  selector: string;
  attribute?: string;
}

export interface InstagramProfileData {
  [key: string]: string;
  profilePictureUrl: string;
  bio: string;
}

export type InstagramProfileTargets = Record<
  keyof InstagramProfileData,
  InstagramProfileTarget
>;
