import { Tab } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Material from "./Material";

const URL = "http://localhost:5000/api/materials";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Materials = () => {
  const [materials, setMaterials] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setMaterials(data.materials));
  }, []);
  console.log(materials);

  return (
    <div>
    <Tab LinkComponent={NavLink} to="/addMaterial" label="Add Material" />

      <ul>
        {materials &&
          materials.map((material, i) => (
            <li className="material" key={i}>
              <Material material={material} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Materials;
