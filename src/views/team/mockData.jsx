export const row = ["ID", "Name", "E-mail", "Age", "Phone", "Access"];

export const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.5,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    headerAlign: "center",
    align: "left",
  },
  {
    field: "email",
    headerName: "E-mail",
    flex: 1,
    headerAlign: "center",
    align: "left",
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
    field: "access",
    headerName: "Access",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
];

export const generateFakeData = (count = 200) => {
  const names = [
    "Ahmed",
    "Omar",
    "Hassan",
    "Mona",
    "Sara",
    "Laila",
    "Youssef",
    "Karim",
    "Rania",
    "Samir",
  ];
  const accesses = ["Admin", "User", "Manager"];

  const data = [];

  for (let i = 1; i <= count; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const lastName = names[Math.floor(Math.random() * names.length)];

    data.push({
      id: i,
      name: `${name} ${lastName}`,
      email: `${name.toLowerCase()}${i}@example.com`,
      age: Math.floor(Math.random() * 40) + 20,
      phone: `01${Math.floor(100000000 + Math.random() * 900000000)}`, 
      access: accesses[Math.floor(Math.random() * accesses.length)],
    });
  }

  return data;
};
!localStorage.getItem("teamPageFakeData") &&
  localStorage.setItem("teamPageFakeData", JSON.stringify(generateFakeData()));

