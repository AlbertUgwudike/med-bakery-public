import fs from "fs";

import station from "./s";

fs.writeFileSync(station.id + ".json", JSON.stringify(station));
