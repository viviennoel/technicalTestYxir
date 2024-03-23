export type ButtonProps = {
  variation: 'clear' | 'dark';
  children?: React.ReactNode;
};

export enum Widgets {
  CHART_LINE = 'chartLine',
  CHART_PIE = 'chartPie',
  MAP = 'map',
}
