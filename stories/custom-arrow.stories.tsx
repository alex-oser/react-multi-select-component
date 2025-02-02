import { text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";

import MultiSelect from "../src/multi-select";
import { options } from "./constants";

export default {
  title: "Custom Arrow",
  decorators: [withKnobs],
};

export const ExampleCustomArrow = () => {
  const [selected, setSelected] = useState([]);

  const ArrowRenderer = ({ expanded }) => <>{expanded ? "🦉" : "🦚"}</>;

  const CustomClearIcon = () => <div>🤘</div>;

  return (
    <div>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={text("labelledBy", "Select Fruits")}
        ArrowRenderer={ArrowRenderer}
        onMenuToggle={(isOpen) => console.log("onMenuToggle", isOpen)}
        ClearIcon={<CustomClearIcon />}
        ClearSelectedIcon={<CustomClearIcon />}
      />
    </div>
  );
};

ExampleCustomArrow.story = {
  name: "Arrow",
};
