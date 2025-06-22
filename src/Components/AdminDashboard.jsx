import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [activeMenuItem, setActiveMenuItem] = useState("Dashboard");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(
      stored
        .map(e => ({ ...e, dateObj: new Date(e.startDate) }))
        .sort((a, b) => b.dateObj - a.dateObj)
    );
  }, []);

  const deleteEvent = (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    const filtered = events.filter(e => e.id !== id);
    localStorage.setItem("events", JSON.stringify(filtered));
    setEvents(filtered);
  };

  const upcoming = events.filter(e => e.dateObj >= new Date());
  const past = events.filter(e => e.dateObj < new Date());

  const sidebarItems = [
    "Events",
    "Payouts",
    "Settings"
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-teal-700 mb-6">EventHub</h1>
          <nav className="flex flex-col gap-2">
            {sidebarItems.map(item => (
              <button
                key={item}
                onClick={() => setActiveMenuItem(item)}
                className={`text-left px-4 py-2 rounded-lg transition ${
                  activeMenuItem === item
                    ? "bg-teal-100 text-teal-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100 hover:text-teal-600"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            to="/"
            className="text-center px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300"
          >
            Back to Home
          </Link>
          <Link
            to="/create"
            className="text-center px-4 py-2 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700"
          >
            Create Event
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-6">
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
          <p className="text-gray-600">Overview of your events and sales</p>
        </header>

        {/* Upcoming Events */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
          {upcoming.length === 0 ? (
            <p className="text-gray-600">No upcoming events.</p>
          ) : (
            <div className="overflow-auto bg-white shadow-md rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {["Event", "Date", "Created By", "Price", "Actions"].map(header => (
                      <th
                        key={header}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {upcoming.map(e => (
                    <tr key={e.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">{e.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{new Date(e.startDate).toLocaleDateString()}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{e.createdBy || "Admin"}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{e.currency ? `$${e.currency}` : "N/A"}</td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap flex gap-2">
                        <button
                          onClick={() => navigate(`/edit/${e.id}`)}
                          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteEvent(e.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Past Events */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Past Events</h3>
          {past.length === 0 ? (
            <p className="text-gray-600">No past events.</p>
          ) : (
            <div className="overflow-auto bg-white shadow-md rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {["Event", "Date", "Created By", "Price", "Actions"].map(header => (
                      <th
                        key={header}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {past.map(e => (
                    <tr key={e.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">{e.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{new Date(e.startDate).toLocaleDateString()}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{e.createdBy || "Admin"}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{e.price ? `$${e.price}` : "N/A"}</td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap flex gap-2">
                        <button
                          onClick={() => navigate(`/edit/${e.id}`)}
                          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteEvent(e.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
