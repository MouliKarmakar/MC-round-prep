import React, { Children, useState } from "react";
import "./NestedCheckbox.css";
import { CheckboxData } from "./Data";

function CheckboxFeature({ data, setChecked, checked }: any) {
  const handleFun = (isChecked: boolean, node: any) => {
    setChecked((prev: any) => {
      let newObj = { ...prev, [node.id]: isChecked };
      console.log(newObj);

      //if I check the parent the children should be checked
      const handleTopTobottomCheck = (node: any) => {
        if (node.children) {
          node?.children?.forEach((item: any) => {
            newObj[item.id] = isChecked;
            item?.children && handleTopTobottomCheck(item);
          });
        }
      };
      handleTopTobottomCheck(node);

      //if I check all the children then parent should be checked
      const handleBottomToTop=(node:any)=>{
        if(!node.children) return newObj[node.id]||false;
        let allChecked=node.children.every((item:any)=>handleBottomToTop(item));
        newObj[node.id]=allChecked;
        return allChecked;
      }

      CheckboxData.forEach((node:any)=>handleBottomToTop(node));

      return newObj;
    });
  };
  return (
    <div className="container">
      {data.map((node: any) => {
        return (
          <div key={node.id} className="parent">
            <input
              type="checkbox"
              checked={!!checked[node.id]}
              onChange={(e) => {
                handleFun(e.target.checked, node);
              }}
            />
            <span>{node.name}</span>
            {node.children && (
              <CheckboxFeature
                data={node.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
export default function NestedCheckbox() {
  const [checked, setChecked] = useState({});
  return (
    <div>
      <h1>Nested checkbox feture</h1>
      <CheckboxFeature
        data={CheckboxData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}
