export interface MouseState {
  x: number; //X position of mouse
  y: number; //Y position of mouse
  active: boolean; //Whether mouse is within the window
}
export interface MouseEffect {
  dist: number; //Distance that the mouse effects
  distSq: number; //Square of above
  strength: number; //Strength of mouse effects
}
