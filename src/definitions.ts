export interface EnableScrollBouncePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
