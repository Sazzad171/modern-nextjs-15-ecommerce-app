export interface VariationOption {
  label: string;
  value: string;
}

export interface VariationRadioProps {
  options: VariationOption[];
  value: string;
  onChange: (value: string) => void;
}
