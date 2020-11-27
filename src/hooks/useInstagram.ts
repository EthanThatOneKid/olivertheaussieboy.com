import { useState, useEffect } from "react";
import {
  DEFAULT_PROFILE_DATA,
  INSTA_HANDLE,
  PROFILE_TARGETS,
} from "../shared/constants";
import { getInstagramProfileUrl } from "../shared/helpers";
import { InstagramProfileData, InstagramProfileTargets } from "../shared/types";

export const useInstagram = (
  username: string = INSTA_HANDLE,
  profileTargets: InstagramProfileTargets = PROFILE_TARGETS
): InstagramProfileData => {
  const [profile, setProfile] = useState<InstagramProfileData>({
    ...DEFAULT_PROFILE_DATA,
  });
  useEffect(() => {
    fetch(getInstagramProfileUrl(username))
      .then((response) => response.text())
      .then((html) => {
        const doc = document.createElement("html");
        doc.innerHTML = html;
        console.log({ doc });
        setProfile(
          Object.entries(PROFILE_TARGETS).reduce(
            (
              result,
              [targetName, { selector, attribute }]
            ): InstagramProfileData => {
              if (targetName in result) {
                const target = doc.querySelector<HTMLElement>(selector);
                if (target !== null) {
                  const targetData: any =
                    attribute !== undefined
                      ? (target as any)[attribute]
                      : target.textContent;
                  result[targetName] =
                    typeof targetData === "string" ? targetData : "";
                }
              }
              return result;
            },
            { ...DEFAULT_PROFILE_DATA }
          )
        );
      });
  }, [username]);
  return profile;
};
