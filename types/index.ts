import { FC } from "react";
import { Metadata } from "next";
import * as i from "@/interfaces";

export type GenMetadata = ({
  params: { id },
}: i.IGenMetadataProps) => Promise<Metadata>;

export type TitleType = FC<{
  tag?: keyof JSX.IntrinsicElements;
  text: string;
  style?: string;
}>;
