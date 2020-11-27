import { InstagramProfileTargets, InstagramProfileData } from "./types";

export const INSTA_HANDLE = "https://www.instagram.com/olivertheaussieboy/";
export const DEFAULT_PROFILE_DATA: InstagramProfileData = {
  profilePictureUrl: "",
  bio: "",
};
export const PROFILE_TARGETS: InstagramProfileTargets = {
  profilePictureUrl: {
    attribute: "src",
    selector:
      "#react-root > section > main > div > header > div > div > span > img",
  },
  bio: {
    selector:
      "#react-root > section > main > div > header > section > div:nth-of-type(2)",
  },
};
