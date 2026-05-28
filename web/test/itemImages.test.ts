import { describe, expect, it } from "vitest";
import { itemImageAssets } from "../src/common-lib/assets/item-images";
import { janelinhaMenu } from "../src/common-lib/data/janelinhaMenu";

describe("item image assets", () => {
  it("maps every menu item to an SVG asset", () => {
    for (const item of janelinhaMenu) {
      expect(item.imageAssetId, `${item.id} should declare imageAssetId`).toBe(item.id);
      expect(itemImageAssets[item.id], `${item.id} should have a mapped SVG`).toBeTruthy();
    }
  });
});
