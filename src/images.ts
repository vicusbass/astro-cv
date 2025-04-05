// This file is used to import and export all images used in the project
// This is necessary for Astro's image optimization

import { getImage } from "astro:assets";

// Import specific images from the assets directory
import profileImage from './assets/profile.png';
import healthAcademyLogo from './assets/HealthAcademyLogo.png';
import butAScratch from './assets/but-a-scratch.jpeg';

// Export the images
export {
  profileImage,
  healthAcademyLogo,
  butAScratch
};