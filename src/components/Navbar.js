import React from "react";
import { Menu } from "semantic-ui-react";

const items = [
  { key: "editorials", active: true, name: "Editorials" },
  { key: "review", name: "Reviews" },
  { key: "events", name: "Upcoming Events" }
];

const Navigation = () => <Menu items={items} />;

export default Navigation;
