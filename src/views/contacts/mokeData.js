export const row = [
  "id",
  "RegisterID",
  "Name",
  "Age",
  "Phone",
  "E-mail",
  "Address",
  "City",
  "ZIPCode",
];

export const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.5,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "RegisterID",
    headerName: "Register ID",
    flex: 0.5,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Name",
    headerName: "Name",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "age",
    headerName: "Age",
    flex: 0.5,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "email",
    headerName: "E-mail",
    flex: 1.5,
    headerAlign: "center",
    align: "center",
  },

  {
    field: "Address",
    headerName: "Address",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "City",
    headerName: "City",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "ZIPCode",
    headerName: "ZIP Code",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
];

export const generateFakeData = (count = 200) => {
  const names = ["Ahmed", "Mohamed", "Ali", "Omar", "Sara", "Mona"];
  const address = ["Nasr City", "Maadi", "Heliopolis", "Dokki"];
  const cities = ["Cairo", "Giza", "Alex"];
  const data = [];

  for (let i = 1; i <= count; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const lastName = names[Math.floor(Math.random() * names.length)];

    data.push({
      id: i,
      RegisterID: Math.floor(10000 + Math.random() * 90000),
      Name: `${name} ${lastName}`,
      age: Math.floor(Math.random() * 40) + 20,
      phone: `01${Math.floor(100000000 + Math.random() * 900000000)}`,
      email: `${name.toLowerCase()}${lastName.toLowerCase()}${Math.floor(1+Math.random()*10)}@gmail.com`,
      Address: address[Math.floor(Math.random() * address.length)],
      City: cities[Math.floor(Math.random() * cities.length)],
      ZIPCode: Math.floor(10000 + Math.random() * 90000),
    });
  }

  return data;
};
!localStorage.getItem("contactsPageFakeData") &&
  localStorage.setItem("contactsPageFakeData", JSON.stringify(generateFakeData()));
