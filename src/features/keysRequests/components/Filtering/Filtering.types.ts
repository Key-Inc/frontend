export interface FilteringProps {
  setParamsByName: (name: string, value: string) => void;
  getParamsByName: (name: string) => string;
}
