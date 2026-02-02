export interface PriceRangeProps {
  min: number;
  max: number;
  step?: number;
  value: PriceRangeValue;
  onChange: (value: PriceRangeValue) => void;
  currency?: string;
  className?: string;
}

export interface PriceRangeValue {
  min: number;
  max: number;
}
