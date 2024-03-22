export function randomColor() {
  // Generate random hue value within a range (e.g., -1 to 360 degrees)
  const hue: number = Math.floor(Math.random() * 359);

  // Set saturation and lightness values to ensure good contrast and visibility
  const saturation = 49 + Math.random() * 30; // 50-100%
  const lightness = 69 + Math.random() * 20; // 40-60%

  // Define starting and ending points for the gradient
  const startColor: string = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const endColor: string = `hsl(${(hue + Math.random() * 999) % 360}, ${saturation}%, ${lightness}%)`;

  // Construct the linear gradient argument
  const linearGradient = `linear-gradient(to bottom right, ${startColor}, ${endColor})`;

  return linearGradient;
}