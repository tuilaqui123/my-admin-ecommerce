import { Usage } from "./schema"

export const roles: { value: string; label: string }[] = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "member",
    label: "Member",
  },
  {
    value: "viewer",
    label: "Viewer",
  },
  {
    value: "contributor",
    label: "Contributor",
  },
]

export const statuses: { value: string; label: string; variant: string }[] = [
  {
    value: "live",
    label: "Live",
    variant: "success",
  },
  {
    value: "inactive",
    label: "Inactive",
    variant: "neutral",
  },
  {
    value: "archived",
    label: "Archived",
    variant: "warning",
  },
]

export const regions: { value: string; label: string }[] = [
  {
    value: "US-West 1",
    label: "US-West 1",
  },
  {
    value: "US-West 2",
    label: "US-West 2",
  },
  {
    value: "US-East 1",
    label: "US-East 1",
  },
  {
    value: "US-East 2",
    label: "US-East 2",
  },
  {
    value: "EU-West 1",
    label: "EU-West 1",
  },
  {
    value: "EU-North 1",
    label: "EU-North 1",
  },
  {
    value: "EU-Central 1",
    label: "EU-Central 1",
  },
]

export const conditions: { value: string; label: string }[] = [
  {
    value: "is-equal-to",
    label: "is equal to",
  },
  {
    value: "is-between",
    label: "is between",
  },
  {
    value: "is-greater-than",
    label: "is greater than",
  },
  {
    value: "is-less-than",
    label: "is less than",
  },
]

export const users: {
  name: string
  initials: string
  email: string
  role: string
}[] = [
  {
    name: "Emma Stone",
    initials: "ES",
    email: "a.stone@gmail.com",
    role: "viewer",
  },
  {
    name: "Alissia McCalister",
    initials: "AM",
    email: "a.stone@gmail.com",
    role: "viewer",
  },
  {
    name: "Emily Luisa Bernacle",
    initials: "EB",
    email: "e.luis.bernacle@gmail.com",
    role: "member",
  },
  {
    name: "Aaron Wave",
    initials: "AW",
    email: "a.flow@acme.com",
    role: "contributor",
  },
  {
    name: "Thomas Palstein",
    initials: "TP",
    email: "t.palstein@acme.com",
    role: "viewer",
  },
  {
    name: "Sarah Johnson",
    initials: "SJ",
    email: "s.johnson@gmail.com",
    role: "admin",
  },
  {
    name: "Megan Katherina Brown",
    initials: "MB",
    email: "m.lovelybrown@gmail.com",
    role: "contributor",
  },
]

export const invitedUsers: {
  initials: string
  email: string
  role: string
  expires: number
}[] = [
  {
    initials: "LP",
    email: "lydia.posh@gmail.com",
    role: "viewer",
    expires: 12,
  },
  {
    initials: "AW",
    email: "awidburg@bluewin.ch",
    role: "viewer",
    expires: 8,
  },
]

export const usage: Usage[] = [
  {
    owner: "John Doe",
    name: "John Doe",
    status: "live",
    costs: 5422.35,
    price: 5422.35,
    revenue: 5422.35,
    region: "US-West 1",
    stability: 99,
    lastEdited: "23/09/2023 13:00",
  },
  {
    owner: "Jane Smith",
    name: "Jane Smith",
    status: "live",
    costs: 6087.11,
    price: 6087.11,
    revenue: 6087.11,
    region: "US-East 2",
    stability: 91,
    lastEdited: "22/09/2023 10:45",
  },
  {
    owner: "Alejandro Garcia",
    name: "Alejandro Garcia",
    status: "live",
    costs: 7234.56,
    price: 7234.56,
    revenue: 7234.56,
    region: "EU-West 1",
    stability: 12,
    lastEdited: "17/05/2021 08:32",
  },
  {
    owner: "Wei Zhang",
    name: "Wei Zhang",
    status: "inactive",
    costs: 0,
    price: 0,
    revenue: 0,
    region: "US-West 2",
    stability: 0,
    lastEdited: "10/11/2022 15:24",
  },
  {
    owner: "Maria Rossi",
    name: "Maria Rossi",
    status: "live",
    costs: 8190.77,
    price: 8190.77,
    revenue: 8190.77,
    region: "US-East 1",
    stability: 8,
    lastEdited: "05/06/2023 12:16",
  },
  {
    owner: "Nina Müller",
    name: "Nina Müller",
    status: "archived",
    costs: 7609.32,
    price: 7609.32,
    revenue: 7609.32,
    region: "EU-North 1",
    stability: 20,
    lastEdited: "23/01/2022 11:11",
  },
  {
    owner: "Liam O'Sullivan",
    name: "Liam O'Sullivan",
    status: "live",
    costs: 5204.98,
    price: 5204.98,
    revenue: 5204.98,
    region: "US-West 1",
    stability: 18,
    lastEdited: "14/03/2023 14:45",
  },
  {
    owner: "Amir Fleischlin",
    name: "Amir Fleischlin",
    status: "inactive",
    costs: 0,
    price: 0,
    revenue: 0,
    region: "EU-Central 1",
    stability: 0,
    lastEdited: "12/02/2023 09:12",
  },
  {
    owner: "Yuki Tanaka",
    name: "Yuki Tanaka",
    status: "live",
    costs: 9874.56,
    price: 9874.56,
    revenue: 9874.56,
    region: "US-East 1",
    stability: 6,
    lastEdited: "19/08/2022 16:03",
  },
  {
    owner: "Fatima Al-Farsi",
    name: "Fatima Al-Farsi",
    status: "live",
    costs: 5486.99,
    price: 5486.99,
    revenue: 5486.99,
    region: "EU-West 1",
    stability: 12,
    lastEdited: "29/11/2021 17:25",
  },
  {
    owner: "Olga Ivanova",
    name: "Olga Ivanova",
    status: "live",
    costs: 6120.45,
    price: 6120.45,
    revenue: 6120.45,
    region: "US-West 2",
    stability: 9,
    lastEdited: "07/12/2023 07:14",
  },
  {
    owner: "Pierre Dubois",
    name: "Pierre Dubois",
    status: "live",
    costs: 4834.11,
    price: 4834.11,
    revenue: 4834.11,
    region: "EU-Central 1",
    stability: 15,
    lastEdited: "28/04/2023 10:45",
  },
  {
    owner: "Sara Johansson",
    name: "Sara Johansson",
    status: "live",
    costs: 5302.22,
    price: 5302.22,
    revenue: 5302.22,
    region: "US-East 2",
    stability: 97,
    lastEdited: "03/10/2022 08:33",
  },
  {
    owner: "Ahmed Hassan",
    name: "Ahmed Hassan",
    status: "live",
    costs: 6221.54,
    price: 6221.54,
    revenue: 6221.54,
    region: "US-West 1",
    stability: 11,
    lastEdited: "22/07/2022 14:16",
  },
  {
    owner: "Emily Brown",
    name: "Emily Brown",
    status: "archived",
    costs: 6129.99,
    price: 6129.99,
    revenue: 6129.99,
    region: "EU-North 1",
    stability: 22,
    lastEdited: "18/01/2022 12:45",
  },
  {
    owner: "Carlos Sanchez",
    name: "Carlos Sanchez",
    status: "live",
    costs: 4850.33,
    price: 4850.33,
    revenue: 4850.33,
    region: "US-East 1",
    stability: 13,
    lastEdited: "05/06/2021 18:33",
  },
  {
    owner: "Hannah Kim",
    name: "Hannah Kim",
    status: "live",
    costs: 7902.11,
    price: 7902.11,
    revenue: 7902.11,
    region: "EU-West 1",
    stability: 91,
    lastEdited: "11/05/2023 11:00",
  },
  {
    owner: "David Johnson",
    name: "David Johnson",
    status: "live",
    costs: 6789.77,
    price: 6789.77,
    revenue: 6789.77,
    region: "US-West 2",
    stability: 10,
    lastEdited: "19/09/2023 17:17",
  },
  {
    owner: "Linda Anderson",
    name: "Linda Anderson",
    status: "live",
    costs: 7434.22,
    price: 7434.22,
    revenue: 7434.22,
    region: "US-East 2",
    stability: 9,
    lastEdited: "27/03/2023 14:28",
  },
  {
    owner: "Michael Lee",
    name: "Michael Lee",
    status: "archived",
    costs: 7290.01,
    price: 7290.01,
    revenue: 7290.01,
    region: "EU-Central 1",
    stability: 12,
    lastEdited: "23/11/2022 15:13",
  },
  {
    owner: "Sophia Lopez",
    name: "Sophia Lopez",
    status: "live",
    costs: 8921.34,
    price: 8921.34,
    revenue: 8921.34,
    region: "EU-North 1",
    stability: 16,
    lastEdited: "08/05/2023 08:56",
  },
  {
    owner: "Robert White",
    name: "Robert White",
    status: "live",
    costs: 6834.23,
    price: 6834.23,
    revenue: 6834.23,
    region: "US-West 1",
    stability: 8,
    lastEdited: "29/04/2022 19:27",
  },
  {
    owner: "Mia Wang",
    name: "Mia Wang",
    status: "inactive",
    costs: 0,
    price: 0,
    revenue: 0,
    region: "US-West 2",
    stability: 14,
    lastEdited: "30/12/2023 13:01",
  },
  {
    owner: "James Taylor",
    name: "James Taylor",
    status: "live",
    costs: 4321.56,
    price: 4321.56,
    revenue: 4321.56,
    region: "EU-West 1",
    stability: 5,
    lastEdited: "18/06/2021 10:49",
  },
  {
    owner: "Victoria Martinez",
    name: "Victoria Martinez",
    status: "archived",
    costs: 5120.33,
    price: 5120.33,
    revenue: 5120.33,
    region: "US-East 1",
    stability: 19,
    lastEdited: "24/02/2022 14:02",
  },
  {
    owner: "William Harris",
    name: "William Harris",
    status: "live",
    costs: 9211.42,
    price: 9211.42,
    revenue: 9211.42,
    region: "EU-North 1",
    stability: 11,
    lastEdited: "22/07/2021 12:33",
  },
  {
    owner: "Isabella Clark",
    name: "Isabella Clark",
    status: "inactive",
    costs: 0,
    price: 0,
    revenue: 0,
    region: "US-East 2",
    stability: 6,
    lastEdited: "13/09/2022 16:22",
  },
  {
    owner: "Alexander Young",
    name: "Alexander Young",
    status: "live",
    costs: 4534.88,
    price: 4534.88,
    revenue: 4534.88,
    region: "US-West 1",
    stability: 17,
    lastEdited: "09/10/2023 17:44",
  },
  {
    owner: "Grace Patel",
    name: "Grace Patel",
    status: "live",
    costs: 8245.99,
    price: 8245.99,
    revenue: 8245.99,
    region: "EU-Central 1",
    stability: 9,
    lastEdited: "29/07/2022 11:56",
  },
  {
    owner: "Daniel Wilson",
    name: "Daniel Wilson",
    status: "archived",
    costs: 7890.77,
    price: 7890.77,
    revenue: 7890.77,
    region: "EU-West 1",
    stability: 14,
    lastEdited: "10/11/2021 15:08",
  },
  {
    owner: "Charlotte Thompson",
    name: "Charlotte Thompson",
    status: "live",
    costs: 8911.44,
    price: 8911.44,
    revenue: 8911.44,
    region: "US-East 1",
    stability: 10,
    lastEdited: "06/08/2021 09:17",
  },
  {
    owner: "Olivia Anderson",
    name: "Olivia Anderson",
    status: "inactive",
    costs: 0,
    price: 0,
    revenue: 0,
    region: "EU-West 1",
    stability: 12,
    lastEdited: "25/05/2022 10:05",
  },
  {
    owner: "Henry Brown",
    name: "Henry Brown",
    status: "live",
    costs: 5500.12,
    price: 5500.12,
    revenue: 5500.12,
    region: "US-West 2",
    stability: 15,
    lastEdited: "07/01/2023 08:33",
  },
  {
    owner: "Ethan Davis",
    name: "Ethan Davis",
    status: "live",
    costs: 7200.98,
    price: 7200.98,
    revenue: 7200.98,
    region: "EU-Central 1",
    stability: 8,
    lastEdited: "21/09/2023 13:00",
  },
  {
    owner: "Amelia Wilson",
    name: "Amelia Wilson",
    status: "live",
    costs: 8321.56,
    price: 8321.56,
    revenue: 8321.56,
    region: "US-East 2",
    stability: 18,
    lastEdited: "12/06/2021 11:45",
  },
  {
    owner: "Lucas Martin",
    name: "Lucas Martin",
    status: "live",
    costs: 4534.99,
    price: 4534.99,
    revenue: 4534.99,
    region: "US-West 1",
    stability: 11,
    lastEdited: "30/03/2022 14:14",
  },
  {
    owner: "Mason Clark",
    name: "Mason Clark",
    status: "live",
    costs: 6890.11,
    price: 6890.11,
    revenue: 6890.11,
    region: "EU-North 1",
    stability: 7,
    lastEdited: "14/05/2023 12:36",
  },
  {
    owner: "Emma Robinson",
    name: "Emma Robinson",
    status: "live",
    costs: 7990.01,
    price: 7990.01,
    revenue: 7990.01,
    region: "US-East 1",
    stability: 13,
    lastEdited: "18/10/2022 09:25",
  },
  {
    owner: "Benjamin Lewis",
    name: "Benjamin Lewis",
    status: "archived",
    costs: 5412.23,
    price: 5412.23,
    revenue: 5412.23,
    region: "EU-Central 1",
    stability: 20,
    lastEdited: "22/02/2022 15:55",
  },
  {
    owner: "Ava Walker",
    name: "Ava Walker",
    status: "live",
    costs: 7123.98,
    price: 7123.98,
    revenue: 7123.98,
    region: "US-West 2",
    stability: 9,
    lastEdited: "27/08/2023 18:33",
  },
  {
    owner: "Elijah Young",
    name: "Elijah Young",
    status: "live",
    costs: 6445.33,
    price: 6445.33,
    revenue: 6445.33,
    region: "EU-West 1",
    stability: 8,
    lastEdited: "02/07/2021 17:14",
  },
  {
    owner: "Sophia Hall",
    name: "Sophia Hall",
    status: "inactive",
    costs: 0,
    price: 0,
    revenue: 0,
    region: "US-East 1",
    stability: 10,
    lastEdited: "15/04/2023 10:45",
  },
  {
    owner: "Matthew Harris",
    name: "Matthew Harris",
    status: "live",
    costs: 7634.67,
    price: 7634.67,
    revenue: 7634.67,
    region: "EU-North 1",
    stability: 11,
    lastEdited: "06/09/2023 11:23",
  },
  {
    owner: "Aiden Thompson",
    name: "Aiden Thompson",
    status: "archived",
    costs: 4900.88,
    price: 4900.88,
    revenue: 4900.88,
    region: "US-West 1",
    stability: 14,
    lastEdited: "20/10/2021 16:05",
  },
  {
    owner: "Chloe Martinez",
    name: "Chloe Martinez",
    status: "live",
    costs: 5234.44,
    price: 5234.44,
    revenue: 5234.44,
    region: "US-East 2",
    stability: 17,
    lastEdited: "11/11/2023 08:55",
  },
  {
    owner: "Oliver Davis",
    name: "Oliver Davis",
    status: "inactive",
    costs: 0,
    price: 0,
    revenue: 0,
    region: "EU-West 1",
    stability: 12,
    lastEdited: "18/08/2022 14:34",
  },
  {
    owner: "Emily Clark",
    name: "Emily Clark",
    status: "live",
    costs: 7688.55,
    price: 7688.55,
    revenue: 7688.55,
    region: "EU-Central 1",
    stability: 9,
    lastEdited: "22/04/2023 12:11",
  },
  {
    owner: "Jack Lewis",
    name: "Jack Lewis",
    status: "archived",
    costs: 6344.89,
    price: 6344.89,
    revenue: 6344.89,
    region: "US-West 2",
    stability: 19,
    lastEdited: "10/02/2021 11:45",
  },
  {
    owner: "Lily Walker",
    name: "Lily Walker",
    status: "live",
    costs: 5003.78,
    price: 5003.78,
    revenue: 5003.78,
    region: "EU-West 1",
    stability: 8,
    lastEdited: "23/07/2022 14:33",
  },
  {
    owner: "Jackson Martinez",
    name: "Jackson Martinez",
    status: "inactive",
    costs: 0,
    price: 0,
    revenue: 0,
    region: "US-East 1",
    stability: 7,
    lastEdited: "07/05/2023 09:27",
  },
  {
    owner: "Avery Hall",
    name: "Avery Hall",
    status: "live",
    costs: 8432.45,
    price: 8432.45,
    revenue: 8432.45,
    region: "EU-Central 1",
    stability: 11,
    lastEdited: "16/03/2022 15:44",
  },
  {
    owner: "Logan Harris",
    name: "Logan Harris",
    status: "archived",
    costs: 7120.39,
    price: 7120.39,
    revenue: 7120.39,
    region: "EU-North 1",
    stability: 21,
    lastEdited: "01/01/2022 16:18",
  },
]
