export type StarRatingContext = {
  maxValue: number;
  emptyColor: string;
  fillColor: string;
  height: number;
  width: number;
  hover: number | null;
  labelText: (value: number) => string;
  rating: number;
  setHover: (value: number | null) => void;
  setRating: (value: number) => void,
};