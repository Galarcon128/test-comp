/**
# Component (user guide)
# Component name 
[GeneDascription --v0.1]

## Description  
[is a tooltip]
## Category   
[Visual, Funcional]  
## Live demo 
[https://codesandbox.io/s/practicataller-thz8p?file=/src/App.js:182-329]
## Installation 
[-]
## Usage 
​    [

​        <GeneDescription
      name="araC"
      product="DNA-binding transcriptional dual regulator AraC"
      pLeft={70387}
      pRight={71265}
      strand="forward"
      />

​    ]
## Props

| props     | type     | default    | description                                     |
| --------- | -------- | ---------- | ----------------------------------------------- |
| name      | string   |    ""      |                                                 |
| product   | string   |    ""      |                                                 |
| pLeft     | number   |    0       ||
| pRight    | number   |    0       ||
| strand    | string   |    ""      ||

## Exception

__Warning__
 

## License

[MIT]

## Author 

[CCG-UNAM-RegulonDB, galarcon@ccg.unam.mx]

**/

/**
# Component (technical guide)
## Component Type 

[ HOOK ]

## Dependencies

[React, geneDescription.module.css, ui-components/Tooltip]

## States

[
    visible - boolean - false - description
]

# Function description

## [InnerTIp]
__Description:__  
[es el tooltip que se despliega]

__Usage:__
[
    <ToolTip TipBox={InnerTip} />
]

__Scope: __
[-]

__Input Parameter:__  
[-]

__Return:__
[componente tabla con los dats de gene]

**/

import React, { useState } from "react";
import ToolTip from "./ui-components/Tooltip";
import Style from "./geneDescription.module.css";

const GeneDescription = ({
  name = "",
  product = "",
  pLeft = 0,
  pRight = 0,
  strand = ""
}) => {
  const size = pRight - pLeft;
  const [visible, setVisible] = useState(false);

  const InnerTip = () => {
    return (
      <div
        className={Style.comp}
        onMouseLeave={() => {
          setVisible(false);
        }}
      >
        <table>
          <thead>
            <tr>
              <th>
                <div>{name}</div>
              </th>
              <th>
                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                  {`${size}bp`}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>{product}</td>
            </tr>
            <tr>
              <td colSpan={2}>Genome Position(nucleotides)</td>
            </tr>
            <tr>
              <td colSpan={2}>{`${pLeft} -> ${pRight}`}</td>
            </tr>
            <tr>
              <td colSpan={2}>{strand}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <ToolTip TipBox={InnerTip} autoShow={false} display={visible}>
      <div>
        {name}
        {
          <div
            style={{ width: "100%", height: "2px", backgroundColor: "#72A7C7" }}
            onMouseOver={() => {
              setVisible(!visible);
            }}
          ></div>
        }
      </div>
    </ToolTip>
  );
};

export default GeneDescription;