import { describe, expect, it } from "vitest";
import { createOrderProtocol } from "../src/common-lib/utils/protocol";

describe("createOrderProtocol", () => {
  it("uses establishment name and UTC timestamp as the deterministic seed", () => {
    const protocol = createOrderProtocol(
      "JanelinhaSubs",
      new Date("2026-05-28T17:45:30.000Z")
    );

    expect(protocol).toMatch(/^JSUBS-[A-Z0-9]{8}$/);
    expect(protocol).toBe(
      createOrderProtocol("JanelinhaSubs", new Date("2026-05-28T17:45:30.000Z"))
    );
  });
});
