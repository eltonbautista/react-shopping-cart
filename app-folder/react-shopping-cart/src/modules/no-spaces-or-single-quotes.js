// Helper function which takes in a string, turns the first character to lower case and removes all spaces and single quotes.

const noSpacesOrSingleQuotes = (str) => {
  return str[0].toLowerCase() + str.replace(/\s+/g, '').replace("'", '').slice(1);
};
// noSpacesOrSingleQuotes(" Hello Wouldn't ") = helloWouldnt;
export default noSpacesOrSingleQuotes;