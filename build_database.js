"use strict";
const { start, getConnection, stop } = require("./services/postgres");
const { TABLE_SQL, DATA_SQL } = require("./services/normalize_schemas");

async function build() {
  await start();

  const dbClient = await getConnection();
  try {
    const tbBuildResult = await dbClient.query(TABLE_SQL);

  }
  catch (err) {
    console.error(`Table build error: ${err}`);
  }

  try {
    const dtBuildResult = await dbClient.query(DATA_SQL);

  }
  catch (err) {
    console.error(`Definition build error: ${err}`);
  }

  await stop();
}

setImmediate(async () => build());
