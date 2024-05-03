type ChartProps = {
  type: 'bar' | 'line' | 'pie' | 'doughnut' | 'polarArea' | 'radar' | 'bubble' | 'scatter';
  options?: Record<string, unknown>;
  [rest: string]: any;
};

export { ChartProps };
