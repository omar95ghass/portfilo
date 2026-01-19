// Import project images data from JSON file
import projectImagesData from '../projectImages.json';

interface ProjectImageData {
  id: number;
  mockups: string[];
  screenshots: string[];
}

interface ProjectImagesJson {
  projects: ProjectImageData[];
}

// Parse the JSON data
const imagesData = projectImagesData as ProjectImagesJson;

// Create a map of project ID to combined images array (mockups + screenshots)
const projectImagesMap: Record<string, string[]> = {};

// Process each project and combine mockups and screenshots
imagesData.projects.forEach((project) => {
  // Combine mockups and screenshots into a single array
  // Mockups first, then screenshots
  const allImages = [...project.mockups, ...project.screenshots];
  if (allImages.length > 0) {
    projectImagesMap[project.id.toString()] = allImages;
  }
});

/**
 * Get all images for a specific project by ID
 * Combines mockups and screenshots into a single array
 * @param projectId - The ID of the project
 * @returns Array of image URLs for the project (mockups first, then screenshots)
 */
export function getProjectImages(projectId: number): string[] {
  const images = projectImagesMap[projectId.toString()] || [];
  return images;
}

/**
 * Get mockups only for a specific project by ID
 * @param projectId - The ID of the project
 * @returns Array of mockup image URLs for the project
 */
export function getProjectMockups(projectId: number): string[] {
  const project = imagesData.projects.find((p) => p.id === projectId);
  return project?.mockups || [];
}

/**
 * Get screenshots only for a specific project by ID
 * @param projectId - The ID of the project
 * @returns Array of screenshot image URLs for the project
 */
export function getProjectScreenshots(projectId: number): string[] {
  const project = imagesData.projects.find((p) => p.id === projectId);
  return project?.screenshots || [];
}

/**
 * Check if a project has images
 * @param projectId - The ID of the project
 * @returns True if project has images, false otherwise
 */
export function hasProjectImages(projectId: number): boolean {
  return getProjectImages(projectId).length > 0;
}
