import { createContext, useContext, useState } from "react";
import { DataInterpQuestion } from "./types";

type DataInterpretationContextType = {
  selectedQuestion: DataInterpQuestion;
  setSelectedQuestion: (question: DataInterpQuestion) => void;
  selectedFinding: string;
  setSelectedFinding: (finding: string) => void;
  selectedTopics: string[];
  setSelectedTopics: (topics: string[]) => void;
};

const DataInterpretationContext = createContext<DataInterpretationContextType>({
  selectedQuestion: { id: "", category: "", finding: "", image: "", exemplar: "false" },
  setSelectedQuestion: () => {},
  selectedFinding: "",
  setSelectedFinding: () => {},
  selectedTopics: [],
  setSelectedTopics: () => {},
});

export const useDataInterpretationContext = () => {
  return useContext(DataInterpretationContext);
};

export const DataInterpretationProvider: React.FC = ({ children }) => {
  const [selectedQuestion, setSelectedQuestion] = useState<DataInterpQuestion>({ id: "", category: "", finding: "", image: "", exemplar: "false" });
  const [selectedFinding, setSelectedFinding] = useState<string>("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  return (
    <DataInterpretationContext.Provider
      value={{ selectedQuestion, setSelectedQuestion, selectedFinding, setSelectedFinding, selectedTopics, setSelectedTopics }}
    >
      {children}
    </DataInterpretationContext.Provider>
  );
};

export default DataInterpretationContext;
