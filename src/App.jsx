import React from "react";

import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  CircleHelp,
  BookOpen,
  Search,
  Bell,
  ChevronDown,
  Upload,
  Plus,
  UserRound,
  Link,
  ShieldCheck,
  MoreVertical,
  SlidersHorizontal,
  BriefcaseBusiness,
} from "lucide-react";

import "./App.css";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Intake", icon: FileText },
  { name: "Participant", icon: Users },
  { name: "Setting", icon: Settings },
];

const settingsTabs = [
  { name: "Organization", icon: BriefcaseBusiness },
  { name: "User & Permissions", icon: UserRound },
  { name: "Integration", icon: Link },
  { name: "Compliance", icon: ShieldCheck },
];

const users = [
  {
    id: 1,
    name: "Kathryn Murphy",
    description: "Description Text",
    email: "nevaeh.simmons@example.com",
    role: "Admin",
    status: "Active",
    date: "March 23, 2013",
    lastActive: "July 14, 2015",
    access: true,
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    description: "Description Text",
    email: "debbie.baker@example.com",
    role: "Admin",
    status: "Inactive",
    date: "October 24, 2018",
    lastActive: "May 31, 2020",
    access: false,
  },
  {
    id: 3,
    name: "Dianne Russell",
    description: "Description Text",
    email: "felicia.reid@example.com",
    role: "Admin",
    status: "Active",
    date: "August 7, 2017",
    lastActive: "February 11, 2014",
    access: true,
  },
  {
    id: 4,
    name: "Esther Howard",
    description: "Description Text",
    email: "jackson.graham@example.com",
    role: "Admin",
    status: "Deleted",
    date: "April 28, 2016",
    lastActive: "October 25, 2019",
    access: false,
  },
  {
    id: 5,
    name: "Jenny Wilson",
    description: "Description Text",
    email: "debra.holt@example.com",
    role: "Admin",
    status: "Active",
    date: "May 6, 2012",
    lastActive: "December 29, 2012",
    access: true,
  },
  {
    id: 6,
    name: "Jenny Wilson",
    description: "Description Text",
    email: "debra.holt@example.com",
    role: "Admin",
    status: "Active",
    date: "May 6, 2012",
    lastActive: "December 29, 2012",
    access: false,
  },
  {
    id: 7,
    name: "Jenny Wilson",
    description: "Description Text",
    email: "debra.holt@example.com",
    role: "Admin",
    status: "Active",
    date: "May 6, 2012",
    lastActive: "December 29, 2012",
    access: true,
  },
  {
    id: 8,
    name: "Jenny Wilson",
    description: "Description Text",
    email: "debra.holt@example.com",
    role: "Admin",
    status: "Active",
    date: "May 6, 2012",
    lastActive: "December 29, 2012",
    access: false,
  },
  {
    id: 9,
    name: "Jenny Wilson",
    description: "Description Text",
    email: "debra.holt@example.com",
    role: "Admin",
    status: "Active",
    date: "May 6, 2012",
    lastActive: "December 29, 2012",
    access: true,
  },
  {
    id: 10,
    name: "Jenny Wilson",
    description: "Description Text",
    email: "debra.holt@example.com",
    role: "Admin",
    status: "Active",
    date: "May 6, 2012",
    lastActive: "December 29, 2012",
    access: false,
  },
  {
    id: 11,
    name: "Jenny Wilson",
    description: "Description Text",
    email: "debra.holt@example.com",
    role: "Admin",
    status: "Active",
    date: "May 6, 2012",
    lastActive: "December 29, 2012",
    access: true,
  },
];

function App() {
  return (
    <div className="flex min-h-screen bg-white text-gray-800">

      {/* SIDEBAR */}
      <aside className="w-44 flex-col bg-[#f6f6f6] md:flex">

        {/* LOGO */}
        <div className="flex h-12 items-center gap-2 px-4">
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#222] text-white">
            <Settings size={13} />
          </div>
        

          <span className="text-[11px] font-bold text-black">
            SETUP LOGO 
          </span>
        </div>

        {/* MENU */}
        <div className="mt-8 px-4">
          <p className="mb-3 text-[9px] font-medium text-gray-500">
            MENU
          </p>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = item.name === "Setting";

              return (
                <button
                  key={item.name}
                  className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-[11px] ${
                    active
                      ? "bg-white font-medium text-black"
                      : "text-gray-500 hover:bg-white"
                  }`}
                >
                  <Icon size={14} />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* HELP */}
        <div className="mt-auto px-4 pb-10">
          <p className="mb-3 text-[9px] font-medium text-gray-500">
            HELP
          </p>

          <button className="mb-3 flex items-center gap-2 text-[11px] text-gray-500">
            <BookOpen size={14} />
            User Guide
          </button>

          <button className="flex items-center gap-2 text-[11px] text-gray-500">
            <CircleHelp size={14} />
            Support
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="min-w-0 flex-1">

        {/* NAVBAR */}
        <header className="flex h-12 items-center justify-between border-b border-gray-100 px-4 md:px-5">

          {/* SEARCH */}
          <div className="relative">
            <Search
              size={13}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Find percipient..."
              className="h-7 w-44 rounded-md border border-gray-200 bg-white pl-7 pr-2 text-[10px] outline-none focus:border-gray-400"
            />
          </div>

          {/* RIGHT NAVBAR */}
          <div className="flex items-center gap-3">

            <button className="rounded-md border border-gray-200 p-1.5">
              <Bell size={13} />
            </button>

            {/* USER NAME WITHOUT PROFILE PHOTO */}
            <div className="flex items-center gap-2">
              <div className="hidden ">
                <p className="text-[10px] font-semibold text-black">
                  Sarah Johnson
                </p>

                <p className="text-[8px] text-gray-500">
                  Johns@gmail.com
                </p>
              </div>

              <ChevronDown size={12} />
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="p-4 md:px-4 md:py-4">

          {/* PAGE TITLE */}
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h1 className="text  font-semibold text-black">
                Setting
              </h1>

              <p className="mt-1 text-[9px] text-gray-500">
                NDIS 435678965
              </p>
            </div>

            <div className="flex gap-2">
              <button className="flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-[10px] text-gray-600">
                <Upload size={11} />
                Upload file
              </button>

              <button className="flex items-center gap-1 rounded-md bg-red-200 px-3 py-1.5 text-[10px] text-black">
                <Plus size={12} />
                Participants
              </button>
            </div>
          </div>

          {/* SETTINGS TABS */}
          <div className="mb-4 inline-flex flex-wrap items-center gap-0.5 rounded-lg bg-gray-100 p-1">
            {settingsTabs.map((tab) => {
              const Icon = tab.icon;
              const active = tab.name === "User & Permissions";

              return (
                <button
                  key={tab.name}
                  className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[9px] ${
                    active
                      ? "bg-white font-semibold text-black shadow-sm"
                      : "text-gray-500"
                  }`}
                >
              


                  <Icon size={11} />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* USER DETAILS HEADER */}
          <div className="mb-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold text-black">
                User Details
              </h2>

              <span className="rounded-md bg-gray-100 px-1.5 py-0.5 text-[9px] text-gray-500">
                453
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">

              {/* SEARCH */}
              <div className="relative">
                <Search
                  size={12}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search goals"
                  className="h-6 w-36 rounded-md border border-gray-200 pl-6 pr-2 text-[9px] outline-none"
                />
              </div>

              {/* FILTER */}
              <button className="rounded-md border border-gray-200 p-1.5">
                <SlidersHorizontal size={11} />
              </button>

              {/* ADD USER */}
              <button className="flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-[10px] text-black">
                <Plus size={12} />
                Add User
              </button>
            </div>
          </div>

          {/* USER TABLE */}
          <div className="overflow-x-auto rounded-md border border-gray-200">
            <table className="w-full min-w-[900px] border-collapse text-left">

              {/* TABLE HEADER */}
              <thead className="bg-[#f8f8f8]">
                <tr className="border-b border-gray-200 text-[9px] text-gray-500">
                  <th className="w-7 px-2 py-2">
                    <input type="checkbox" />
                  </th>

                  <th className="px-2 py-2 font-medium">
                    User Name
                  </th>

                  <th className="px-2 py-2 font-medium">
                    Email Address
                  </th>

                  <th className="px-2 py-2 font-medium">
                    User Role
                  </th>

                  <th className="px-2 py-2 font-medium">
                    Status
                  </th>

                  <th className="px-2 py-2 font-medium">
                    Add Date
                  </th>

                  <th className="px-2 py-2 font-medium">
                    Last Active
                  </th>

                  <th className="px-2 py-2 font-medium">
                    Access
                  </th>

                  <th className="px-2 py-2 text-right font-medium">
                    Action
                  </th>
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
                  >
                    {/* CHECKBOX */}
                    <td className="px-2 py-2">
                      <input type="checkbox" />
                    </td>

                    {/* USER NAME */}
                    <td className="px-2 py-2">
                      <div className="flex items-center gap-2">
                        {/* EMPTY ROUND SHAPE */}
                        <div className="h-5 w-5 shrink-0 rounded-full border border-gray-300 bg-white"></div>

                        <div>
                          <p className="whitespace-nowrap text-[9px] font-medium text-gray-800">
                            {user.name}
                          </p>

                          <p className="whitespace-nowrap text-[8px] text-gray-500">
                            {user.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* EMAIL */}
                    <td className="whitespace-nowrap px-2 py-2 text-[9px] text-gray-500">
                      {user.email}
                    </td>

                    {/* ROLE */}
                    <td className="px-2 py-2 text-[9px] font-semibold text-gray-800">
                      {user.role}
                    </td>

                    {/* STATUS */}
                    <td className="px-2 py-2">
                      <span
                        className={`inline-flex rounded-md border px-1.5 py-0.5 text-[8px] ${
                          user.status === "Active"
                            ? "border-green-600 text-green-700"
                            : user.status === "Inactive"
                            ? "border-orange-400 text-orange-600"
                            : "border-red-500 text-red-600"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    {/* ADD DATE */}
                    <td className="whitespace-nowrap px-2 py-2 text-[9px] text-gray-500">
                      {user.date}
                    </td>

                    {/* LAST ACTIVE */}
                    <td className="whitespace-nowrap px-2 py-2 text-[9px] text-gray-800">
                      {user.lastActive}
                    </td>

                    {/* STATIC ACCESS SWITCH */}
                    <td className="px-2 py-2">
                      <div
                        className={`flex h-3.5 w-6 items-center rounded-full p-0.5 ${
                          user.access
                            ? "justify-end bg-green-700"
                            : "justify-start bg-gray-200"
                        }`}
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-white shadow-sm" />
                      </div>
                    </td>

                    {/* ACTION BUTTON ONLY */}
                    <td className="px-2 py-2">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          aria-label="More actions"
                          className="rounded-md border border-gray-200 p-1.5 hover:bg-gray-100"
                        >
                          <MoreVertical size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="mt-7 flex items-center justify-between">
            <p className="text-[9px] text-gray-500">
              Showing{" "}
              <span className="font-medium text-black">1-10</span>{" "}
              from{" "}
              <span className="font-medium text-black">56</span>
            </p>

            <div className="flex items-center gap-1.5">
              <button className="rounded-md border border-gray-200 px-3 py-1.5 text-[9px] text-gray-400">
                Previous
              </button>

              <button className="rounded-md bg-[#100b09] px-3 py-1.5 text-[9px] text-white">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;