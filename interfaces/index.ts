import { ReactNode } from "react";

export interface ThemeToggleProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export interface IChildrenProps {
  children: ReactNode;
}

export interface IRootLayoutProps extends IChildrenProps {}
export interface IContainerProps extends IChildrenProps {}

export interface IGenMetadataProps {
  params: { id: string };
}

export interface IArticle {
  id: string;
  ipfs: string;
  title: string;
  description: string;
  author: string;
  text: string;
  tags: string[];
  views: string | null;
  timestamp: string;
}
