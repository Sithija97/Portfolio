import { IIssue } from "../models";

export type DataElement = {
  id: number;
  name: {
    first: string;
    last: string;
  };
  total: number;
  status: string;
  method: string;
  date: string;
};

export const data: DataElement[] = [
  {
    id: 1,
    name: {
      first: "John",
      last: "Smith",
    },
    total: 2795.95,
    status: "On Hold",
    method: "PayPal",
    date: "15 Minutes ago",
  },
  {
    id: 2,
    name: {
      first: "Chris",
      last: "Adams",
    },
    total: 1195.95,
    status: "Processing",
    method: "PayPal",
    date: "23 Minutes ago",
  },
  {
    id: 3,
    name: {
      first: "Sarah",
      last: "Smith",
    },
    total: 495.85,
    status: "Completed",
    method: "Visa",
    date: "1 Hour ago",
  },
  {
    id: 4,
    name: {
      first: "Joseph",
      last: "Choo",
    },
    total: 150.45,
    status: "Processing",
    method: "MasterCard",
    date: "1 Hour ago",
  },
  {
    id: 5,
    name: {
      first: "Steve",
      last: "Harding",
    },
    total: 175.25,
    status: "On Hold",
    method: "PayPal",
    date: "2 Hour ago",
  },
  {
    id: 6,
    name: {
      first: "Laura",
      last: "Croft",
    },
    total: 1295.75,
    status: "Completed",
    method: "Check",
    date: "3 Hour ago",
  },
  {
    id: 7,
    name: {
      first: "Michael",
      last: "Jones",
    },
    total: 89.95,
    status: "Completed",
    method: "MasterCard",
    date: "3 Hour ago",
  },
  {
    id: 8,
    name: {
      first: "James",
      last: "Bond",
    },
    total: 689.45,
    status: "Completed",
    method: "Visa",
    date: "7 Hour ago",
  },
  {
    id: 9,
    name: {
      first: "Haley",
      last: "Whiting",
    },
    total: 14.99,
    status: "Completed",
    method: "PayPal",
    date: "1 Day ago",
  },
  {
    id: 10,
    name: {
      first: "Tim",
      last: "Thomas",
    },
    total: 218.99,
    status: "Completed",
    method: "MasterCard",
    date: "1 Day ago",
  },
];

export const data2: IIssue[] = [
  {
    _id: "65c3a15e2a1a3040ab3fda21",
    title: "user profile update issue",
    description: "Users cannot update their profiles due to a technical issue.",
    reporter: {
      _id: "65c3a1422a1a3040ab3fda1e",
      username: "emma_davis",
      email: "emma.davis@example.com",
      photo: "https://i.ibb.co/4pDNDk1/avatar.png",
      authMethod: "email",
      createdAt: "2024-01-22T08:15:30.123Z",
      updatedAt: "2024-01-22T08:15:30.123Z",
    },
    status: "Open",
    assignee: null,
    createdAt: "2024-01-22T08:17:45.987Z",
    updatedAt: "2024-01-22T08:17:45.987Z",
  },
  {
    _id: "65c3a1852a1a3040ab3fda23",
    title: "password reset not working",
    description:
      "Users are unable to reset their passwords via the provided link.",
    reporter: {
      _id: "65c3a16e2a1a3040ab3fda22",
      username: "alex_rodriguez",
      email: "alex.rodriguez@example.com",
      photo: "https://i.ibb.co/4pDNDk1/avatar.png",
      authMethod: "email",
      createdAt: "2024-01-22T08:20:15.456Z",
      updatedAt: "2024-01-22T08:20:15.456Z",
    },
    status: "Open",
    assignee: null,
    createdAt: "2024-01-22T08:22:30.789Z",
    updatedAt: "2024-01-22T08:22:30.789Z",
  },
  {
    _id: "65c3a1ac2a1a3040ab3fda25",
    title: "404 error on dashboard",
    description:
      "Users are encountering a 404 error when trying to access the dashboard.",
    reporter: {
      _id: "65c3a1992a1a3040ab3fda24",
      username: "lily_miller",
      email: "lily.miller@example.com",
      photo: "https://i.ibb.co/4pDNDk1/avatar.png",
      authMethod: "email",
      createdAt: "2024-01-22T08:25:12.345Z",
      updatedAt: "2024-01-22T08:25:12.345Z",
    },
    status: "Open",
    assignee: null,
    createdAt: "2024-01-22T08:27:45.621Z",
    updatedAt: "2024-01-22T08:27:45.621Z",
  },
  {
    _id: "65c3a1cc2a1a3040ab3fda27",
    title: "mobile app crashes on startup",
    description:
      "Users are experiencing crashes when trying to launch the mobile application.",
    reporter: {
      _id: "65c3a1b92a1a3040ab3fda26",
      username: "samuel_wilson",
      email: "samuel.wilson@example.com",
      photo: "https://i.ibb.co/4pDNDk1/avatar.png",
      authMethod: "email",
      createdAt: "2024-01-22T08:30:18.987Z",
      updatedAt: "2024-01-22T08:30:18.987Z",
    },
    status: "Open",
    assignee: null,
    createdAt: "2024-01-22T08:32:50.321Z",
    updatedAt: "2024-01-22T08:32:50.321Z",
  },
  {
    _id: "65c3a1eb2a1a3040ab3fda29",
    title: "payment processing issue",
    description:
      "Users are facing problems with processing payments on the platform.",
    reporter: {
      _id: "65c3a1d62a1a3040ab3fda28",
      username: "olivia_taylor",
      email: "olivia.taylor@example.com",
      photo: "https://i.ibb.co/4pDNDk1/avatar.png",
      authMethod: "email",
      createdAt: "2024-01-22T08:35:55.789Z",
      updatedAt: "2024-01-22T08:35:55.789Z",
    },
    status: "Open",
    assignee: null,
    createdAt: "2024-01-22T08:37:40.123Z",
    updatedAt: "2024-01-22T08:37:40.123Z",
  },
  {
    _id: "65c3a2072a1a3040ab3fda2b",
    title: "missing data in reports",
    description:
      "Some users are reporting missing data in the generated reports.",
    reporter: {
      _id: "65c3a1f42a1a3040ab3fda2a",
      username: "david_jackson",
      email: "david.jackson@example.com",
      photo: "https://i.ibb.co/4pDNDk1/avatar.png",
      authMethod: "email",
      createdAt: "2024-01-22T08:40:30.987Z",
      updatedAt: "2024-01-22T08:40:30.987Z",
    },
    status: "Open",
    assignee: null,
    createdAt: "2024-01-22T08:42:15.321Z",
    updatedAt: "2024-01-22T08:42:15.321Z",
  },
  {
    _id: "65c3a2252a1a3040ab3fda2d",
    title: "email notifications not received",
    description:
      "Users are not receiving email notifications despite proper settings.",
    reporter: {
      _id: "65c3a2142a1a3040ab3fda2c",
      username: "michael_brown",
      email: "michael.brown@example.com",
      photo: "https://i.ibb.co/4pDNDk1/avatar.png",
      authMethod: "email",
      createdAt: "2024-01-22T08:45:18.123Z",
      updatedAt: "2024-01-22T08:45:18.123Z",
    },
    status: "Open",
    assignee: null,
    createdAt: "2024-01-22T08:47:05.456Z",
    updatedAt: "2024-01-22T08:47:05.456Z",
  },
  {
    _id: "65c3a2452a1a3040ab3fda2f",
    title: "slow response times on mobile",
    description:
      "Users are experiencing slow response times when using the mobile app.",
    reporter: {
      _id: "65c3a2342a1a3040ab3fda2e",
      username: "sophia_martin",
      email: "sophia.martin@example.com",
      photo: "https://i.ibb.co/4pDNDk1/avatar.png",
      authMethod: "email",
      createdAt: "2024-01-22T08:50:00.789Z",
      updatedAt: "2024-01-22T08:50:00.789Z",
    },
    status: "Open",
    assignee: null,
    createdAt: "2024-01-22T08:51:45.987Z",
    updatedAt: "2024-01-22T08:51:45.987Z",
  },
  {
    _id: "65c3a26e2a1a3040ab3fda31",
    title: "incorrect data in user profiles",
    description: "Some user profiles are displaying incorrect information.",
    reporter: {
      _id: "65c3a25a2a1a3040ab3fda30",
      username: "matthew_white",
      email: "matthew.white@example.com",
      photo: "https://i.ibb.co/4pDNDk1/avatar.png",
      authMethod: "email",
      createdAt: "2024-01-22T08:54:30.321Z",
      updatedAt: "2024-01-22T08:54:30.321Z",
    },
    status: "Open",
    assignee: null,
    createdAt: "2024-01-22T08:56:15.654Z",
    updatedAt: "2024-01-22T08:56:15.654Z",
  },
  {
    _id: "65c3a28c2a1a3040ab3fda33",
    title: "unreadable font on login screen",
    description:
      "Users are reporting difficulty reading the font on the login screen.",
    reporter: {
      _id: "65c3a27a2a1a3040ab3fda32",
      username: "emily_morris",
      email: "emily.morris@example.com",
      photo: "https://i.ibb.co/4pDNDk1/avatar.png",
      authMethod: "email",
      createdAt: "2024-01-22T08:59:00.987Z",
      updatedAt: "2024-01-22T08:59:00.987Z",
    },
    status: "Open",
    assignee: null,
    createdAt: "2024-01-22T09:00:45.321Z",
    updatedAt: "2024-01-22T09:00:45.321Z",
  },
];
