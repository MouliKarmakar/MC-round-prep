
import { useState } from "react";
import './InputChips.css';

const Chips = ({ chip, onDelete }: { chip: any; onDelete: () => void }) => {
  return (
    <div className="chipBox">
      <span className="chip_text">{chip.name}</span>
      <span className="cross" onClick={onDelete}>X</span>
    </div>
  );
};
export default function InputChips() {
  const [chipList, setChipList] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const onTyping = (value: string) => {
    setQuery(value);
  };
  const handleAddChip = (value: string) => {
    setChipList((prev) => {
      let newChipList = [...prev, { id: prev.length, name: value }];
      return newChipList;
    });
  };

  const onDeleteClick = (id: number | string) => {
    let updatedList = chipList.filter((item: any) => item.id !== id);
    setChipList(updatedList);
  };
  return (
    <div>
      <h1>Input Chips Featurue Implemetation</h1>
      <div>
        <input
        className="input_box"
          type="text"
          value={query}
          placeholder="Enter your chip name here"
          onChange={(e) => onTyping(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddChip(query);
              setQuery("");
            }
          }}
        />
        <div className="chip_container">
          {chipList.map((chip: any) => {
            return (
              <Chips
                key={chip.id}
                chip={chip}
                onDelete={() => onDeleteClick(chip.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
