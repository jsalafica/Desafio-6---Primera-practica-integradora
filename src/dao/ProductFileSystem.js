async function readFile(file) {
  try {
    let result = await fs.promises.readFile(__dirname + "/" + file, "utf-8");
    let data = await JSON.parse(result);
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function writeFile(file, data) {
  try {
    await fs.promises.writeFile(
      __dirname + "/" + file,
      JSON.stringify(data, null, 2)
    );
    return true;
  } catch (err) {
    console.log(err);
  }
}

export default { readFile, writeFile };
