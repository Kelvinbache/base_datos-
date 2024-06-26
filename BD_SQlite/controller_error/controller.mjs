function drive_error_connection(err) {
  if (err) {
    return console.error(err.message);
  }

  return console.log("The connection to base data is correct");
}

// drive the dato

function drive_exit_data(err, row) {
  if (err) {
    return console.error(err.message);
  }

  return console.log(row.id);
}

function drive_input_data(err) {
  if (err) {
    return console.error(err.message);
  }

  return console.log("insert data exit");
}

export { drive_error_connection, drive_exit_data, drive_input_data };
