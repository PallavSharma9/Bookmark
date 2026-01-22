export type PanelId =
  | "simple-bookmarking"
  | "speedy-searching"
  | "easy-sharing";

export interface FeaturePanel {
  id: PanelId;
  label: string;
  title: string;
  description: string;
  image: string;
}
