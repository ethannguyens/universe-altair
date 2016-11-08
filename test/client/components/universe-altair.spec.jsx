/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import UniverseAltair from "src/components/universe-altair";

describe("components/universe-altair", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<UniverseAltair />);
      expect(component).to.not.be.null;
    });

  });

});
