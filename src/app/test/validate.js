const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "name field shouldn’t be empty";
  }
  if (!values.fname) {
    errors.fname = " fist name field shouldn’t be empty";
  }
  if (!values.lname) {
    errors.lname = "last name field shouldn’t be empty";
  }
  if (!values.email) {
    errors.email = "Email field shouldn’t be empty";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.url) {
    errors.url = "Url field shouldn’t be empty";
  } else if (
    !/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(
      values.url
    )
  ) {
    errors.url = "Invalid url";
  }
  if (!values.password) {
    errors.password = "Password field shouldn’t be empty";
  } else if (values.password.length < 5) {
    errors.password = "The password should be greater than 6";
  }
  if (!values.select) {
    errors.select = "Please select the option";
  }
  if (!values.location) {
    errors.location = "location shouldn't be empty";
  }
  if (!values.phone) {
    errors.phone = "phone Number shouldn't be empty";
  } else if (!values.phone.length === 9) {
    errors.phone = "The phone number should be 10 digit number";
  }

  if (!values.shopid) {
    errors.shopid = "Shop Id shouldn't be empty";
  }

  if (!values.platform) {
    errors.platform = "Platform shouldn't be empty";
  }

  if (!values.price) {
    errors.price = "Price shouldn't be empty";
  }

  if (!values.title) {
    errors.title = "Title shouldn't be empty";
  }
  if (!values.num) {
    errors.num = "Number shouldn't be empty";
  }

  if (!values.platformID) {
    errors.platformID = "platform ID shouldn't be empty";
  }
  return errors;
};

export default validate;
