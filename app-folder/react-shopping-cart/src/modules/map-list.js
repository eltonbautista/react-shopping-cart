// A function used to map elements into an array. It is to be used for my product cards;

const mapList = (arrayToMap, category) => {
  let count = 0;

  arrayToMap.map((element) => {
    count += 1;
    return (
      <li key={category + count}>
        {element}
      </li>
    );
  });

  return arrayToMap;
}

export default mapList;