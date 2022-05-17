// A function used to map elements into an array;

const mapList = (arrayToMap) => {
  let count = 0;

  arrayToMap.map((element) => {
    count += 1;

    return (
      <li key={element.category + count}>
        {element}
      </li>
    );
  });


}

export default mapList;