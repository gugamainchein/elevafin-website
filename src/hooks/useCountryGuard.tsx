/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";

/**
 * Custom hook to check if user is accessing from Brazil
 * Uses ipapi.co for geolocation detection
 *
 * @returns {boolean | null} - true if from Brazil, false if not, null while loading
 */
export function useCountryGuard() {
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setAllowed(data.country_code === "BR");
      })
      .catch(() => {
        // On error, deny access by default for security
        setAllowed(false);
      });
  }, []);

  return allowed;
}
