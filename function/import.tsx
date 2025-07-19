
 export const getExention = (file) => {
    const parts = file.name.split(".");
    const extension = parts[parts.length - 1];
    return EXTENSIONS.includes(extension); // return boolean
  };

  export const convertToJson = (headers, data) => {
    const rows = [];
    data.forEach((e) => {
      let rowData = {};

      e.forEach((element, index) => {
        rowData[headers[index]] = element;
      });
      rows.push(rowData);
    });
    return rows;
  };
