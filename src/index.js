// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  const output = {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };
  const returnedValueFromCentral = await central(id);
  // console.log(returnedValue);
  console.log(dbs[returnedValueFromCentral](id));
  try {
    const returnedValue = await central(id);
    if (returnedValue === "db1") {
      const database1 = await db1(id);
      const { company, username, website } = database1;
      const { bs, catchPhrase, name } = company;
      output.company.name = name;
      output.company.catchPhrase = catchPhrase;
      output.company.bs = bs;
      output.username = username;
      output.website = website;
    } else if (returnedValue === "db2") {
      const database2 = await db2(id);
      const { company, username, website } = database2;
      const { bs, catchPhrase, name } = company;
      output.company.name = name;
      output.company.catchPhrase = catchPhrase;
      output.company.bs = bs;
      output.username = username;
      output.website = website;
    } else {
      const database3 = await db3(id);
      const { company, username, website } = database3;
      const { bs, catchPhrase, name } = company;
      output.company.name = name;
      output.company.catchPhrase = catchPhrase;
      output.company.bs = bs;
      output.username = username;
      output.website = website;
    }
  } catch (err) {
    console.log(err);
  }

  try {
    const returnedValue = await vault(id);
    const { address, email, name, phone } = returnedValue;
    const { city, geo, street, suite, zipcode } = address;
    const { lat, lng } = geo;
    // console.log(returnedValue);
    output.id = id;
    output.name = name;
    output.username;
    output.email = email;
    output.address.street = street;
    output.address.suite = suite;
    output.address.city = city;
    output.address.zipcode = zipcode;
    output.address.geo.lat = lat;
    output.address.geo.lng = lng;
    output.phone = phone;
  } catch (err) {
    console.log(err);
  }
  // console.log("output", output);
}

// getUserData(1);
// getUserData(2);
// getUserData(3);
// getUserData(4);
// getUserData(5);
// getUserData(6);
// getUserData(7);
// getUserData(8);
// getUserData(9);
// getUserData(10);
// getUserData(11);
// getUserData(-1);
// getUserData("hello");
