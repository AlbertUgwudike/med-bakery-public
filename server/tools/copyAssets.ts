import * as shell from "shelljs";

// Copy all the static assests
// shell.cp( "-R", "src/json", "build/json" );
shell.cp("-R", "src/content", "build/content");
// shell.cp( "-R", "src/questionData", "build/questionData")
