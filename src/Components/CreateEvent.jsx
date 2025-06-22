import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // ✅ Ensure correct path to your firebase.js

function CreateEvent() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const [eventData, setEventData] = useState({
    name: "",
    type: "venue",
    venue: "",
    startDate: "",
    startTime: "",
    duration: "",
    endTime: "",
    timezone: "Africa/Nairobi",
    currency: "Ksh",
    visibility: true,
    categories: [],
    eventImage: null,
    eventImagePreview: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "categories") {
      setEventData((prev) => ({
        ...prev,
        categories: checked
          ? [...prev.categories, value]
          : prev.categories.filter((c) => c !== value),
      }));
    } else if (type === "checkbox") {
      setEventData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setEventData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEventData((prev) => ({
          ...prev,
          eventImage: file,
          eventImagePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setEventData((prev) => ({
        ...prev,
        eventImage: null,
        eventImagePreview: "",
      }));
    }
  };

  const isFormValid = () => {
    const {
      name,
      type,
      venue,
      startDate,
      startTime,
      duration,
      endTime,
      timezone,
      currency,
      description,
      categories,
      eventImagePreview,
    } = eventData;

    return (
      name &&
      type &&
      venue &&
      startDate &&
      startTime &&
      duration &&
      endTime &&
      timezone &&
      currency &&
      description &&
      categories.length > 0 &&
      eventImagePreview
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage("");

    const currentUser = auth.currentUser;
    if (!currentUser) {
      setFormMessage("⚠️ Please log in to create an event.");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }

    if (!isFormValid()) {
      setFormMessage("❌ Please fill in all required fields.");
      return;
    }

    const newEvent = {
      ...eventData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      createdBy: currentUser.email || currentUser.uid,
    };

    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    existingEvents.push(newEvent);
    localStorage.setItem("events", JSON.stringify(existingEvents));

    console.log("Stored event:", newEvent);
    setFormMessage("✅ Event created and stored successfully!");

    setEventData({
      name: "",
      type: "venue",
      venue: "",
      startDate: "",
      startTime: "",
      duration: "",
      endTime: "",
      timezone: "Africa/Nairobi",
      currency: "Ksh",
      visibility: true,
      categories: [],
      eventImage: null,
      eventImagePreview: "",
      description: "",
    });

    setTimeout(() => setFormMessage(""), 3000);
  };

  const categories = [
    "Arts", "Business", "Coaching and Consulting", "Community and Culture", "Education and Training",
    "Entrepreneurship", "Family and Friends", "Fashion and Beauty", "Film and Entertainment", "Food and Drink",
    "Government and Politics", "Health and Wellbeing", "Hobbies and Interest", "Music and Theater", "Others",
    "Religion and Spirituality", "Science and Technology", "Sports and Fitness", "Travel and Outdoor", "Visual Arts",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-white py-4 px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex items-center">
          <Link to="/" className="flex items-center text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-lg font-semibold text-orange-500">Create New Event</span>
          </Link>
        </div>
      </div>

      <div className="flex-grow flex justify-center items-start py-8 px-4">
        <div className="w-full max-w-4xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded shadow">
            <div className="col-span-2">
              <label className="block font-semibold mb-1">Event name</label>
              <input type="text" name="name" value={eventData.name} onChange={handleChange} required className="w-full border p-3 rounded" />
            </div>

            <div className="col-span-2">
              <label className="block font-semibold mb-1">Description</label>
              <textarea name="description" value={eventData.description} onChange={handleChange} placeholder="Tell people what your event is about" rows="4" className="w-full border p-3 rounded"></textarea>
            </div>

            <div className="col-span-2">
              <label className="block font-semibold mb-3">Images</label>
              <div className="border-2 border-dashed p-6 rounded-lg flex flex-col items-center justify-center">
                {eventData.eventImagePreview ? (
                  <img src={eventData.eventImagePreview} alt="Preview" className="max-h-48 mb-4 object-contain" />
                ) : (
                  <>
                    <p className="text-gray-700 font-semibold mb-2">Add an image</p>
                    <p className="text-gray-500 text-sm mb-4">Recommended size: 1920x1080px</p>
                  </>
                )}
                <label htmlFor="upload-image-input" className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-green-600 cursor-pointer">
                  Upload image
                </label>
                <input id="upload-image-input" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Event type</label>
              <select name="type" value={eventData.type} onChange={handleChange} className="w-full border p-3 rounded">
                <option value="venue">Venue Event</option>
                <option value="online">Online Event</option>
                <option value="undecided">Undecided</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Organizer</label>
              <input type="text" name="venue" value={eventData.venue} onChange={handleChange} placeholder="Enter name" className="w-full border p-3 rounded" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Start date</label>
              <input type="date" name="startDate" value={eventData.startDate} onChange={handleChange} className="w-full border p-3 rounded" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Start time</label>
              <input type="time" name="startTime" value={eventData.startTime} onChange={handleChange} className="w-full border p-3 rounded" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Duration</label>
              <input type="text" name="duration" value={eventData.duration} onChange={handleChange} placeholder="e.g. 3 hours" className="w-full border p-3 rounded" />
            </div>

            <div>
              <label className="block font-semibold mb-1">End time</label>
              <input type="time" name="endTime" value={eventData.endTime} onChange={handleChange} className="w-full border p-3 rounded" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Timezone</label>
              <select name="timezone" value={eventData.timezone} onChange={handleChange} className="w-full border p-3 rounded">
                <option value="Africa/Nairobi">Africa/Nairobi (GMT+03:00)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Currency</label>
              <input type="text" name="currency" value={eventData.currency} onChange={handleChange} placeholder="e.g. Ksh." className="w-full border p-3 rounded" />
            </div>

            <div className="col-span-2">
              <label className="block font-semibold mb-1">Event visibility</label>
              <p className="text-sm text-gray-600 mb-2">We may display your event on our explore page to increase discoverability.</p>
              <label className="inline-flex items-center space-x-2">
                <input type="checkbox" name="visibility" checked={eventData.visibility} onChange={handleChange} />
                <span>Make my event discoverable</span>
              </label>
            </div>

            <div className="col-span-2">
              <label className="block font-semibold mb-1">Choose event categories</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 border border-gray-200 rounded">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" name="categories" value={cat} checked={eventData.categories.includes(cat)} onChange={handleChange} />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            <div className="col-span-2 flex flex-col sm:flex-row justify-between pt-4 gap-4">
              <button type="button" onClick={() => window.history.back()} className="px-6 py-2 border border-orange-500 rounded-md text-gray-700 hover:bg-green-600">
                Cancel
              </button>
              <div className="flex flex-col items-end gap-2">
                {formMessage && (
                  <p className={`text-sm ${formMessage.includes("successfully") ? "text-green-600" : "text-red-500"}`}>
                    {formMessage}
                  </p>
                )}
                <button type="submit" className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-green-600">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
