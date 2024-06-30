function drive_error_connection(err) {
  if (err) {
    return console.error(err.message);
  }

  return console.log("The connection to base data is correct");
}

function drive_input_data(err) {
  if (err) {
    return console.error(err.message);
  }

  return console.log("insert data exit");
}

export { drive_error_connection, drive_input_data };
