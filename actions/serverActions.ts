"use server";

import services from "@/services";

export const updatetArticleViews = async (id: string) => {
  services.updatetArticleViews(id);
};
