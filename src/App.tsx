import { useState } from "react";
import TargetCaseSelector from "./TargetCaseSelector";
import "./App.css";
import TargetSelector from "./Target";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* <TargetCaseSelector
        caseName="OAKLAND GANGS"
        caseCount={4}
        targetsCount={4}
        labelOptions={[
          { value: "label1", label: "Label 1" },
          { value: "label2", label: "Label 2" },
          { value: "label3", label: "Label 3" },
        ]}
        onConfirm={({ labels }) =>
          alert("Selected labels: " + labels.join(", "))
        }
        onCancel={() => alert("Cancelled")}
      /> */}
      <TargetSelector />
    </div>
  );
}

export default App;
