export const row = ["id", "Name", "Age", "Phone", "E-mail", "Cost", "Date"];

export const columns = [
  {
    field: "id",
    headerName: "ID",
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
    field: "Cost",
    headerName: "Cost",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Date",
    headerName: "Date",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
];

export const generateFakeData = (count = 200) => {
  const names = ["Ahmed", "Mohamed", "Ali", "Omar", "Sara", "Mona"];

  const data = [];

  for (let i = 1; i <= count; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const lastName = names[Math.floor(Math.random() * names.length)];

    data.push({
      id: i,
      Name: `${name} ${lastName}`,
      age: Math.floor(Math.random() * 40) + 20,
      phone: `01${Math.floor(100000000 + Math.random() * 900000000)}`,
      email: `${name.toLowerCase()}${lastName.toLowerCase()}${Math.floor(
        1 + Math.random() * 10
      )}@gmail.com`,
      Cost: (Math.floor(Math.random() * 9900) + 100).toFixed(2),
      Date: new Date(
        Date.now() - Math.floor(Math.random() * 1000*60*60*24*30*4)
      ).toLocaleDateString(),
    });
  }

  return data;
};
!localStorage.getItem("invoicesPageFakeData") &&
  localStorage.setItem(
    "invoicesPageFakeData",
    JSON.stringify(generateFakeData())
  );
