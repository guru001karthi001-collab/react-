
import { useState } from "react";

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
  BriefcaseBusiness,
  UserRound,
  Link,
  ShieldCheck,
  SlidersHorizontal,
  MoreVertical,
  Pencil,
  Trash2,
  Eye,
  Check,
  X,
} from "lucide-react";

const initialUsers = [
  {
    id: 1,
    name: "Kathryn Murphy",
    email: "nevaeh.simmons@example.com",
    role: "Admin",
    status: "Active",
    date: "March 23, 2013",
    lastActive: "July 14, 2015",
    access: true,
    avatar: "KM",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    email: "debbie.baker@example.com",
    role: "Admin",
    status: "Inactive",
    date: "October 24, 2018",
    lastActive: "May 31, 2015",
    access: false,
    avatar: "SN",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    name: "Dianne Russell",
    email: "felicia.reid@example.com",
    role: "Admin",
    status: "Active",
    date: "August 7, 2017",
    lastActive: "February 11, 2014",
    access: true,
    avatar: "DR",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 4,
    name: "Esther Howard",
    email: "jackson.graham@example.com",
    role: "Admin",
    status: "Deleted",
    date: "April 28, 2016",
    lastActive: "October 25, 2019",
    access: false,
    avatar: "EH",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: 5,
    name: "Jenny Wilson",
    email: "debra.holt@example.com",
    role: "Admin",
    status: "Active",
    date: "May 6, 2012",
    lastActive: "December 29, 2012",
    access: true,
    avatar: "JW",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: 6,
    name: "Jenny Wilson",
    email: "debra.holt@example.com",
    role: "Admin",
    status: "Active",
    date: "May 6, 2012",
    lastActive: "December 29, 2012",
    access: false,
    avatar: "JW",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 7,
    name: "Jenny Wilson",
    email: "debra.holt@example.com",
    role: "Admin",
    status: "Active",
    date: "May 6, 2012",
    lastActive: "December 29, 2012",
    access: true,
    avatar: "JW",
    color: "bg-gray-200 text-gray-700",
  },
  {
    id: 8,
    name: "Jenny Wilson",
    email: "debra.holt@example.com",
    role: "Admin",
    status: "Active",
    date: "May 6, 2012",
    lastActive: "December 29, 2012",
    access: false,
    avatar: "JW",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    id: 9,
    name: "Jenny Wilson",
    email: "debra.holt@example.com",
    role: "Admin",
    status: "Active",
    date: "May 6, 2012",
    lastActive: "December 29, 2012",
    access: true,
    avatar: "JW",
    color: "bg-rose-100 text-rose-700",
  },
  {
    id: 10,
    name: "Jenny Wilson",
    email: "debra.holt@example.com",
    role: "Admin",
    status: "Active",
    date: "May 6, 2012",
    lastActive: "December 29, 2012",
    access: false,
    avatar: "JW",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    id: 11,
    name: "Jenny Wilson",
    email: "debra.holt@example.com",
    role: "Admin",
    status: "Active",
    date: "May 6, 2012",
    lastActive: "December 29, 2012",
    access: true,
    avatar: "JW",
    color: "bg-emerald-100 text-emerald-700",
  },
];

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Intake", icon: FileText },
  { name: "Participant", icon: Users },
  { name: "Setting", icon: Settings },
];

const tabs = [
  { name: "Organization", icon: BriefcaseBusiness },
  { name: "User & Permissions", icon: UserRound },
  { name: "Integration", icon: Link },
  { name: "Compliance", icon: ShieldCheck },
];

function App() {
  const [users, setUsers] = useState(initialUsers);

  const [activeNavigation, setActiveNavigation] =
    useState("Setting");

  const [activeTab, setActiveTab] =
    useState("User & Permissions");

  const [search, setSearch] = useState("");

  const [selectedUsers, setSelectedUsers] = useState([]);

  const [openMenu, setOpenMenu] = useState(null);

  const [filterActive, setFilterActive] = useState(false);

  const [page, setPage] = useState(1);

  const [showAddUser, setShowAddUser] = useState(false);

  const [showUpload, setShowUpload] = useState(false);

  const [viewUser, setViewUser] = useState(null);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "Admin",
  });

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      !filterActive || user.status === "Active";

    return matchesSearch && matchesStatus;
  });

  const toggleAccess = (id) => {
    setUsers((previousUsers) =>
      previousUsers.map((user) =>
        user.id === id
          ? { ...user, access: !user.access }
          : user
      )
    );
  };

  const toggleSelected = (id) => {
    setSelectedUsers((previous) =>
      previous.includes(id)
        ? previous.filter((userId) => userId !== id)
        : [...previous, id]
    );
  };

  const toggleAllSelected = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map((user) => user.id));
    }
  };

  const deleteUser = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) return;

    setUsers((previousUsers) =>
      previousUsers.filter((user) => user.id !== id)
    );

    setSelectedUsers((previous) =>
      previous.filter((userId) => userId !== id)
    );

    setOpenMenu(null);
  };

  const handleAddUser = (event) => {
    event.preventDefault();

    const addedUser = {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: "Active",
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      lastActive: "Just now",
      access: true,
      avatar: newUser.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
      color: "bg-violet-100 text-violet-700",
    };

    setUsers((previousUsers) => [
      addedUser,
      ...previousUsers,
    ]);

    setNewUser({
      name: "",
      email: "",
      role: "Admin",
    });

    setShowAddUser(false);
    setPage(1);
  };

  return (
    <div className="flex min-h-screen bg-[#f7f7f7] text-[#171717]">

      {/* LEFT SIDEBAR */}

      <aside className="fixed left-0 top-0 z-20 flex h-screen w-44 flex-col border-r border-gray-100 bg-[#f6f6f6] px-4 py-5">

        {/* Logo intentionally omitted */}

        <div className="mb-5 h-3"></div>

        <p className="mb-3 text-[10px] font-medium uppercase tracking-wide text-gray-500">
          Menu
        </p>

        <nav className="space-y-1">

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => setActiveNavigation(item.name)}
                className={`flex w-full items-center gap-2 rounded-md px-2 py-2.5 text-left text-[11px] transition ${
                  activeNavigation === item.name
                    ? "bg-white font-semibold text-black shadow-sm"
                    : "text-gray-500 hover:bg-white hover:text-black"
                }`}
              >
                <Icon size={14} strokeWidth={1.7} />

                <span>{item.name}</span>
              </button>
            );
          })}

        </nav>

        <div className="mt-auto">

          <p className="mb-3 text-[10px] font-medium uppercase tracking-wide text-gray-500">
            Helpssss
          </p>

          <button
            onClick={() =>
              window.alert("User Guide selected")
            }
            className="mb-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-[11px] text-gray-500 hover:bg-white"
          >
            <BookOpen size={14} />
            User Guide
          </button>

          <button
            onClick={() =>
              window.alert("Support selected")
            }
            className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-[11px] text-gray-500 hover:bg-white"
          >
            <CircleHelp size={14} />
            Support
          </button>

        </div>
      </aside>

      {/* MAIN CONTENT */}

      <main className="ml-44 min-h-screen min-w-0 flex-1 bg-white">

        {/* TOP NAVBAR */}

        <header className="sticky top-0 z-10 flex h-12 items-center justify-between border-b border-gray-100 bg-white px-4 sm:px-6">

          <div className="relative w-44 sm:w-56">

            <Search
              size={13}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Find percipient..."
              className="h-7 w-full rounded-md border border-gray-200 pl-7 pr-2 text-[10px] outline-none focus:border-gray-400"
            />

          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                window.alert("You have no new notifications")
              }
              className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50"
              aria-label="Notifications"
            >
              <Bell size={14} />
            </button>

            <button
              onClick={() =>
                window.alert("Sarah Johnson's profile")
              }
              className="flex items-center gap-2"
            >

              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-orange-100 text-[10px] font-semibold text-orange-800">
                SJ
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-[10px] font-semibold">
                  Sarah Johnson
                </p>

                <p className="text-[9px] text-gray-500">
                  Johns@gmail.com
                </p>
              </div>

              <ChevronDown size={12} />

            </button>

          </div>

        </header>

        {/* PAGE CONTENT */}

        <section className="p-4 sm:p-6">

          {/* PAGE TITLE */}

          <div className="mb-5 flex flex-wrap items-start justify-between gap-3">

            <div>

              <h1 className="text-xl font-semibold tracking-tight">
                {activeNavigation === "Setting"
                  ? "Setting"
                  : activeNavigation}
              </h1>

              <p className="mt-1 text-[10px] text-gray-500">
                NDIS 435678965
              </p>

            </div>

            <div className="flex items-center gap-2">

              <button
                onClick={() => setShowUpload(true)}
                className="flex items-center gap-1.5 rounded-md border border-gray-200 px-3 py-1.5 text-[10px] text-gray-600 hover:bg-gray-50"
              >
                <Upload size={12} />
                Upload file
              </button>

              <button
                onClick={() => setShowAddUser(true)}
                className="flex items-center gap-1.5 rounded-md bg-[#100a08] px-3 py-1.5 text-[10px] font-medium text-white hover:bg-gray-800"
              >
                <Plus size={12} />
                Participants
              </button>

            </div>

          </div>

          {/* SETTINGS TABS */}

          <div className="mb-5 flex w-fit max-w-full flex-wrap items-center gap-0.5 rounded-lg bg-[#f6f6f6] p-1">

            {tabs.map((tab) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[10px] transition ${
                    activeTab === tab.name
                      ? "bg-white font-semibold text-black shadow-sm"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  <Icon size={12} />

                  <span>{tab.name}</span>
                </button>
              );
            })}

          </div>

          {/* TAB CONTENT */}

          {activeTab === "User & Permissions" ? (

            <>

              {/* USER DETAILS TITLE */}

              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">

                <div className="flex items-center gap-2">

                  <h2 className="text-sm font-semibold">
                    User Details
                  </h2>

                  <span className="rounded-md bg-gray-100 px-1.5 py-0.5 text-[9px] text-gray-500">
                    {filteredUsers.length}
                  </span>

                </div>

                <div className="flex items-center gap-2">

                  <div className="relative w-32 sm:w-36">

                    <Search
                      size={12}
                      className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      placeholder="Search users"
                      value={search}
                      onChange={(event) => {
                        setSearch(event.target.value);
                        setPage(1);
                      }}
                      className="h-7 w-full rounded-md border border-gray-200 pl-6 pr-2 text-[10px] outline-none focus:border-gray-400"
                    />

                  </div>

                  <button
                    onClick={() =>
                      setFilterActive((previous) => !previous)
                    }
                    title="Show active users only"
                    className={`flex h-7 w-7 items-center justify-center rounded-md border ${
                      filterActive
                        ? "border-black bg-gray-100"
                        : "border-gray-200"
                    }`}
                  >
                    <SlidersHorizontal size={12} />
                  </button>

                  <button
                    onClick={() => setShowAddUser(true)}
                    className="flex h-7 items-center gap-1.5 rounded-md border border-gray-200 px-2.5 text-[10px] hover:bg-gray-50"
                  >
                    <Plus size={12} />
                    Add User
                  </button>

                </div>

              </div>

              {/* RESPONSIVE USER TABLE */}

              <div className="w-full overflow-x-auto rounded-lg border border-gray-200">

                <table className="w-full min-w-225 border-collapse text-left">

                  <thead className="bg-[#fafafa]">

                    <tr className="h-8 border-b border-gray-200 text-[9px] text-gray-500">

                      <th className="w-8 px-2">

                        <input
                          type="checkbox"
                          checked={
                            filteredUsers.length > 0 &&
                            selectedUsers.length === filteredUsers.length
                          }
                          onChange={toggleAllSelected}
                          aria-label="Select all users"
                          className="h-3 w-3 accent-black"
                        />

                      </th>

                      <th className="px-2 font-medium">
                        User Name
                      </th>

                      <th className="px-2 font-medium">
                        Email Address
                      </th>

                      <th className="px-2 font-medium">
                        User Role
                      </th>

                      <th className="px-2 font-medium">
                        Status
                      </th>

                      <th className="px-2 font-medium">
                        Add Date
                      </th>

                      <th className="px-2 font-medium">
                        Last Active
                      </th>

                      <th className="px-2 text-center font-medium">
                        Access
                      </th>

                      <th className="px-2 text-center font-medium">
                        Action
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {filteredUsers.length > 0 ? (

                      filteredUsers.map((user) => (

                        <tr
                          key={user.id}
                          className="h-13 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/70"
                        >

                          {/* CHECKBOX */}

                          <td className="px-2">

                            <input
                              type="checkbox"
                              checked={selectedUsers.includes(user.id)}
                              onChange={() => toggleSelected(user.id)}
                              aria-label={`Select ${user.name}`}
                              className="h-3 w-3 accent-black"
                            />

                          </td>

                          {/* USER NAME */}

                          <td className="px-2">

                            <div className="flex items-center gap-2">

                              <div
                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold ${user.color}`}
                              >
                                {user.avatar}
                              </div>

                              <div>

                                <p className="whitespace-nowrap text-[10px] font-medium">
                                  {user.name}
                                </p>

                                <p className="mt-0.5 whitespace-nowrap text-[9px] text-gray-500">
                                  Description Text
                                </p>

                              </div>

                            </div>

                          </td>

                          {/* EMAIL */}

                          <td className="px-2 text-[10px] text-gray-500">

                            {user.email}

                          </td>

                          {/* ROLE */}

                          <td className="px-2 text-[10px] font-semibold">

                            {user.role}

                          </td>

                          {/* STATUS */}

                          <td className="px-2">

                            <span
                              className={`inline-block rounded-md border px-1.5 py-0.5 text-[9px] font-medium ${
                                user.status === "Active"
                                  ? "border-emerald-600 text-emerald-700"
                                  : user.status === "Inactive"
                                  ? "border-orange-400 text-orange-600"
                                  : "border-red-500 text-red-600"
                              }`}
                            >
                              {user.status}
                            </span>

                          </td>

                          {/* ADD DATE */}

                          <td className="whitespace-nowrap px-2 text-[10px] text-gray-500">

                            {user.date}

                          </td>

                          {/* LAST ACTIVE */}

                          <td className="whitespace-nowrap px-2 text-[10px]">

                            {user.lastActive}

                          </td>

                          {/* ACCESS TOGGLE */}

                          <td className="px-2">

                            <div className="flex justify-center">

                              <button
                                onClick={() => toggleAccess(user.id)}
                                role="switch"
                                aria-checked={user.access}
                                aria-label={`Toggle access for ${user.name}`}
                                className={`relative h-3.5 w-5.75 rounded-full transition-colors ${
                                  user.access
                                    ? "bg-emerald-700"
                                    : "bg-gray-200"
                                }`}
                              >

                                <span
                                  className={`absolute top-0.5 h-2.5 w-2.5 rounded-full bg-white transition-all ${
                                    user.access
                                      ? "left-3"
                                      : "left-0.5"
                                  }`}
                                />

                              </button>

                            </div>

                          </td>

                          {/* ACTION MENU */}

                          <td className="relative px-2">

                            <div className="flex justify-center">

                              <button
                                onClick={() =>
                                  setOpenMenu(
                                    openMenu === user.id
                                      ? null
                                      : user.id
                                  )
                                }
                                aria-label={`Actions for ${user.name}`}
                                className="flex h-6 w-6 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100"
                              >
                                <MoreVertical size={13} />
                              </button>

                            </div>

                            {/* DROPDOWN */}

                            {openMenu === user.id && (

                              <div className="absolute right-8 top-2 z-30 w-32 rounded-lg border border-gray-200 bg-white p-1 shadow-lg">

                                <button
                                  onClick={() => {
                                    setViewUser(user);
                                    setOpenMenu(null);
                                  }}
                                  className="flex w-full items-center gap-2 rounded px-2 py-2 text-left text-[10px] hover:bg-gray-100"
                                >
                                  <Eye size={12} />
                                  View Profile
                                </button>

                                <button
                                  onClick={() => {
                                    setNewUser({
                                      name: user.name,
                                      email: user.email,
                                      role: user.role,
                                    });
                                    setViewUser({
                                      ...user,
                                      editing: true,
                                    });
                                    setOpenMenu(null);
                                  }}
                                  className="flex w-full items-center gap-2 rounded px-2 py-2 text-left text-[10px] hover:bg-gray-100"
                                >
                                  <Pencil size={12} />
                                  Edit Details
                                </button>

                                <button
                                  onClick={() => deleteUser(user.id)}
                                  className="flex w-full items-center gap-2 rounded px-2 py-2 text-left text-[10px] text-red-600 hover:bg-red-50"
                                >
                                  <Trash2 size={12} />
                                  Delete User
                                </button>

                              </div>

                            )}

                          </td>

                        </tr>

                      ))

                    ) : (

                      <tr>

                        <td
                          colSpan="9"
                          className="h-28 text-center text-xs text-gray-500"
                        >
                          No users found.
                        </td>

                      </tr>

                    )}

                  </tbody>

                </table>

              </div>

              {/* PAGINATION */}

              <div className="mt-7 flex items-center justify-between gap-3">

                <p className="text-[10px] text-gray-500">

                  Showing{" "}

                  <span className="font-medium text-black">
                    {filteredUsers.length > 0 ? "1" : "0"}-
                    {filteredUsers.length}
                  </span>{" "}

                  from{" "}

                  <span className="font-medium text-black">
                    {users.length}
                  </span>

                </p>

                <div className="flex items-center gap-2">

                  <button
                    onClick={() =>
                      setPage((previous) => Math.max(1, previous - 1))
                    }
                    disabled={page === 1}
                    className="rounded-md border border-gray-200 px-3 py-1.5 text-[10px] text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Previous
                  </button>

                  <button
                    onClick={() =>
                      setPage((previous) => previous + 1)
                    }
                    className="rounded-md bg-[#100a08] px-3 py-1.5 text-[10px] text-white hover:bg-gray-800"
                  >
                    Next
                  </button>

                </div>

              </div>

            </>

          ) : (

            /* OTHER SETTINGS TABS */

            <div className="rounded-lg border border-gray-200 p-6">

              <h2 className="text-sm font-semibold">
                {activeTab}
              </h2>

              <p className="mt-2 text-xs text-gray-500">
                Manage your {activeTab.toLowerCase()} settings here.
              </p>

              <button
                onClick={() =>
                  window.alert(`${activeTab} settings selected`)
                }
                className="mt-4 rounded-md bg-black px-4 py-2 text-xs text-white"
              >
                Manage {activeTab}
              </button>

            </div>

          )}

        </section>

      </main>

      {/* ADD USER MODAL */}

      {showAddUser && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">

          <form
            onSubmit={handleAddUser}
            className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl"
          >

            <div className="mb-5 flex items-center justify-between">

              <h2 className="text-base font-semibold">
                Add New User
              </h2>

              <button
                type="button"
                onClick={() => setShowAddUser(false)}
                aria-label="Close"
              >
                <X size={18} />
              </button>

            </div>

            <label className="mb-1 block text-xs font-medium">
              Full Name
            </label>

            <input
              required
              value={newUser.name}
              onChange={(event) =>
                setNewUser({
                  ...newUser,
                  name: event.target.value,
                })
              }
              placeholder="Enter full name"
              className="mb-4 h-10 w-full rounded-md border border-gray-200 px-3 text-sm outline-none focus:border-gray-500"
            />

            <label className="mb-1 block text-xs font-medium">
              Email Address
            </label>

            <input
              required
              type="email"
              value={newUser.email}
              onChange={(event) =>
                setNewUser({
                  ...newUser,
                  email: event.target.value,
                })
              }
              placeholder="Enter email address"
              className="mb-4 h-10 w-full rounded-md border border-gray-200 px-3 text-sm outline-none focus:border-gray-500"
            />

            <label className="mb-1 block text-xs font-medium">
              User Role
            </label>

            <select
              value={newUser.role}
              onChange={(event) =>
                setNewUser({
                  ...newUser,
                  role: event.target.value,
                })
              }
              className="mb-6 h-10 w-full rounded-md border border-gray-200 px-3 text-sm outline-none"
            >
              <option>Admin</option>
              <option>Manager</option>
              <option>Participant</option>
            </select>

            <div className="flex justify-end gap-2">

              <button
                type="button"
                onClick={() => setShowAddUser(false)}
                className="rounded-md border border-gray-200 px-4 py-2 text-xs"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-md bg-black px-4 py-2 text-xs text-white"
              >
                Add User
              </button>

            </div>

          </form>

        </div>

      )}

      {/* UPLOAD FILE MODAL */}

      {showUpload && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">

          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">

            <div className="mb-4 flex items-center justify-between">

              <h2 className="text-base font-semibold">
                Upload File
              </h2>

              <button
                onClick={() => setShowUpload(false)}
                aria-label="Close"
              >
                <X size={18} />
              </button>

            </div>

            <input
              type="file"
              className="w-full rounded-md border border-gray-200 p-3 text-xs"
            />

            <button
              onClick={() => setShowUpload(false)}
              className="mt-4 w-full rounded-md bg-black py-2 text-xs text-white"
            >
              Done
            </button>

          </div>

        </div>

      )}

      {/* VIEW PROFILE / EDIT USER MODAL */}

      {viewUser && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">

          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">

            <div className="mb-5 flex items-center justify-between">

              <h2 className="text-base font-semibold">
                {viewUser.editing ? "Edit User" : "User Profile"}
              </h2>

              <button
                onClick={() => setViewUser(null)}
                aria-label="Close"
              >
                <X size={18} />
              </button>

            </div>

            {viewUser.editing ? (

              <form
                onSubmit={(event) => {
                  event.preventDefault();

                  setUsers((previousUsers) =>
                    previousUsers.map((user) =>
                      user.id === viewUser.id
                        ? {
                            ...user,
                            name: newUser.name,
                            email: newUser.email,
                            role: newUser.role,
                            avatar: newUser.name
                              .split(" ")
                              .map((part) => part[0])
                              .join("")
                              .slice(0, 2)
                              .toUpperCase(),
                          }
                        : user
                    )
                  );

                  setViewUser(null);
                }}
              >

                <label className="mb-1 block text-xs font-medium">
                  Full Name
                </label>

                <input
                  required
                  value={newUser.name}
                  onChange={(event) =>
                    setNewUser({
                      ...newUser,
                      name: event.target.value,
                    })
                  }
                  className="mb-4 h-10 w-full rounded-md border border-gray-200 px-3 text-sm"
                />

                <label className="mb-1 block text-xs font-medium">
                  Email Address
                </label>

                <input
                  required
                  type="email"
                  value={newUser.email}
                  onChange={(event) =>
                    setNewUser({
                      ...newUser,
                      email: event.target.value,
                    })
                  }
                  className="mb-4 h-10 w-full rounded-md border border-gray-200 px-3 text-sm"
                />

                <label className="mb-1 block text-xs font-medium">
                  User Role
                </label>

                <select
                  value={newUser.role}
                  onChange={(event) =>
                    setNewUser({
                      ...newUser,
                      role: event.target.value,
                    })
                  }
                  className="mb-5 h-10 w-full rounded-md border border-gray-200 px-3 text-sm"
                >
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Participant</option>
                </select>

                <button
                  type="submit"
                  className="w-full rounded-md bg-black py-2 text-xs text-white"
                >
                  Save Changes
                </button>

              </form>

            ) : (

              <>

                <div className="mb-5 flex items-center gap-3">

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold ${viewUser.color}`}
                  >
                    {viewUser.avatar}
                  </div>

                  <div>

                    <h3 className="text-sm font-semibold">
                      {viewUser.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {viewUser.email}
                    </p>

                  </div>

                </div>

                <div className="space-y-3 text-xs">

                  <div className="flex justify-between">
                    <span className="text-gray-500">Role</span>
                    <span className="font-medium">{viewUser.role}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Status</span>
                    <span>{viewUser.status}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Added Date</span>
                    <span>{viewUser.date}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Last Active</span>
                    <span>{viewUser.lastActive}</span>
                  </div>

                </div>

                <button
                  onClick={() => setViewUser(null)}
                  className="mt-6 w-full rounded-md bg-black py-2 text-xs text-white"
                >
                  Close Profile
                </button>

              </>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default App;