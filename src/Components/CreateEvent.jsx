// import { useState } from "react";
// import { Link } from 'react-router-dom';


// function CreateEvent() {
//   const [eventData, setEventData] = useState({
//     name: "",
//     type: "venue",
//     venue: "",
//     startDate: "",
//     startTime: "",
//     duration: "",
//     endTime: "",
//     timezone: "Africa/Nairobi",
//     currency: "KES",
//     visibility: true,
//     categories: [],
//     eventImage: null,
//     eventImagePreview: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setEventData((prev) => ({
//         ...prev,
//         categories: checked
//           ? [...prev.categories, value]
//           : prev.categories.filter((c) => c !== value),
//       }));
//     } else {
//       setEventData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setEventData((prev) => ({
//         ...prev,
//         eventImage: file,
//         eventImagePreview: URL.createObjectURL(file),
//       }));
//     } else {
//       setEventData((prev) => ({
//         ...prev,
//         eventImage: null,
//         eventImagePreview: "",
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Event created:", eventData);
//     alert("Event created (check console for data)");
//     // In a real application, you would typically upload eventData.eventImage to a server here.
//   };

//   const categories = [
//     "Arts",
//     "Business",
//     "Coaching and Consulting",
//     "Community and Culture",
//     "Education and Training",
//     "Entrepreneurship",
//     "Family and Friends",
//     "Fashion and Beauty",
//     "Film and Entertainment",
//     "Food and Drink",
//     "Government and Politics",
//     "Health and Wellbeing",
//     "Hobbies and Interest",
//     "Music and Theater",
//     "Others",
//     "Religion and Spirituality",
//     "Science and Technology",
//     "Sports and Fitness",
//     "Travel and Outdoor",
//     "Visual Arts",
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col"> {/* Added flex flex-col to enable sticky footer */}
//       <div className="bg-white py-4 px-8 border-b border-gray-200">
//         <div className="max-w-4xl mx-auto flex items-center">
//           <Link
//             to="/"
//             className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 mr-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M10 19l-7-7m0 0l7-7m-7 7h18"
//               />
//             </svg>
//             <span className="text-lg font-semibold text-orange-500 sticky top-0 z-50">Create New Event</span>
//           </Link>
//         </div>
//       </div>

//       {/* Main Content Area form */}
//       <div className="flex-grow flex justify-center items-start py-8 px-4"> 
//         <div className="w-full max-w-4xl">
//           <form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded shadow "
//           >

//              <div className="col-span-2">
//               <label className="block font-semibold mb-1">Event name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={eventData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 p-3 rounded"
//               />
//             </div>
//             {/* Description Section */}
//             <div className="col-span-2">
//               <label className="block font-semibold mb-1">Description</label>
//               <textarea
//                 name="description"
//                 value={eventData.description}
//                 onChange={handleChange}
//                 placeholder="Tell people what your event is about"
//                 rows="4"
//                 className="w-full border border-gray-300 p-3 rounded"
//               ></textarea>
//             </div>

//             {/* Images Section */}
//             <div className="col-span-2">
//               <label className="block font-semibold mb-3">Images</label>
//               <div
//                 className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center"
//                 style={{ minHeight: "200px" }}
//               >
//                 {eventData.eventImagePreview ? (
//                   <img
//                     src={eventData.eventImagePreview}
//                     alt="Event Preview"
//                     className="max-h-48 max-w-full object-contain mb-4"
//                   />
//                 ) : (
//                   <>
//                     <p className="text-gray-700 font-semibold mb-2">Add an image</p>
//                     <p className="text-gray-500 text-sm mb-4">
//                       Recommended size: 1920x1080px
//                     </p>
//                   </>
//                 )}

//                 <label
//                   htmlFor="upload-image-input"
//                   className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-green-600 cursor-pointer"
//                 >
//                   Upload image
//                 </label>
//                 <input
//                   id="upload-image-input"
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="hidden"
//                 />
//               </div>
//             </div>

//             {/* Rest of the form fields */}

//             <div>
//               <label className="block font-semibold mb-1">Event type</label>
//               <select
//                 name="type"
//                 value={eventData.type}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 p-3 rounded"
//               >
//                 <option value="venue">Venue Event</option>
//                 <option value="online">Online Event</option>
//                 <option value="undecided">Undecided</option>
//               </select>
//             </div>

//             <div>
//               <label className="block font-semibold mb-1">Organizer</label>
//               <input
//                 type="text"
//                 name="venue"
//                 value={eventData.venue}
//                 onChange={handleChange}
//                 placeholder="Entername"
//                 className="w-full border border-gray-300 p-3 rounded"
//               />
//             </div>

//             <div>
//               <label className="block font-semibold mb-1">Start date</label>
//               <input
//                 type="date"
//                 name="startDate"
//                 value={eventData.startDate}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 p-3 rounded"
//               />
//             </div>

//             <div>
//               <label className="block font-semibold mb-1">Start time</label>
//               <input
//                 type="time"
//                 name="startTime"
//                 value={eventData.startTime}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 p-3 rounded"
//               />
//             </div>

//             <div>
//               <label className="block font-semibold mb-1">Duration</label>
//               <input
//                 type="text"
//                 name="duration"
//                 value={eventData.duration}
//                 onChange={handleChange}
//                 placeholder="e.g. 3 hours"
//                 className="w-full border border-gray-300 p-3 rounded"
//               />
//             </div>

//             <div>
//               <label className="block font-semibold mb-1">End time</label>
//               <input
//                 type="time"
//                 name="endTime"
//                 value={eventData.endTime}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 p-3 rounded"
//               />
//             </div>

//             <div>
//               <label className="block font-semibold mb-1">Timezone</label>
//               <select
//                 name="timezone"
//                 value={eventData.timezone}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 p-3 rounded"
//               >
//                 <option value="Africa/Nairobi">Africa/Nairobi (GMT+03:00)</option>
//               </select>
//             </div>

//             <div>
//               <label className="block font-semibold mb-1">Currency</label>
//               <input
//                 type="text"
//                 name="currency"
//                 value={eventData.currency}
//                 onChange={handleChange}
//                 placeholder="e.g. Ksh."
//                 className="w-full border border-gray-300 p-3 rounded"
//               />
//             </div>

//             <div className="col-span-2">
//               <label className="block font-semibold mb-1">Event visibility</label>
//               <p className="text-sm text-gray-600 mb-2">
//                 We may display your event on our explore page to increase
//                 discoverability if it meets publishing guidelines.
//               </p>
//               <label className="inline-flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   checked={eventData.visibility}
//                   onChange={() =>
//                     setEventData((prev) => ({
//                       ...prev,
//                       visibility: !prev.visibility,
//                     }))
//                   }
//                 />
//                 <span>Make my event discoverable</span>
//               </label>
//             </div>

//             <div className="col-span-2">
//               <label className="block font-semibold mb-1">
//                 Choose event categories
//               </label>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 border border-gray-200 rounded">
//                 {categories.map((cat) => (
//                   <label key={cat} className="flex items-center gap-2 text-sm">
//                     <input
//                       type="checkbox"
//                       value={cat}
//                       checked={eventData.categories.includes(cat)}
//                       onChange={handleChange}
//                     />
//                     {cat}
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Action Buttons Section (Footer) */}
//       <div className="bg-white py-4 px-8 border-t border-gray-200 mt-auto"> 
//         <div className="max-w-4xl mx-auto flex justify-between">
//           <button
//             type="button"
//             onClick={() => window.history.back()}
//             className="px-6 py-2 border border-orange-500 rounded-md text-gray-700 hover:bg-green-600"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit" 
//             onClick={handleSubmit} 
//             className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-green-600" 
//           >
//             Create
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateEvent;
import { useState } from "react";
import { Link } from 'react-router-dom';

function CreateEvent() {
  const [eventData, setEventData] = useState({
    name: "",
    type: "venue",
    venue: "",
    startDate: "",
    startTime: "",
    duration: "",
    endTime: "",
    timezone: "Africa/Nairobi",
    currency: "KES",
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
      setEventData((prev) => ({
        ...prev,
        eventImage: file,
        eventImagePreview: URL.createObjectURL(file),
      }));
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
      eventImage,
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
      eventImage
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Please fill in all required fields before creating the event.");
      return;
    }

    const dataToStore = {
      ...eventData,
      eventImagePreview: undefined,
    };

    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    existingEvents.push(dataToStore);
    localStorage.setItem("events", JSON.stringify(existingEvents));

    alert("Event created and stored in localStorage!");
    console.log("Stored event:", dataToStore);

    setEventData({
      name: "",
      type: "venue",
      venue: "",
      startDate: "",
      startTime: "",
      duration: "",
      endTime: "",
      timezone: "Africa/Nairobi",
      currency: "KES",
      visibility: true,
      categories: [],
      eventImage: null,
      eventImagePreview: "",
      description: "",
    });
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
          <Link
            to="/"
            className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="text-lg font-semibold text-orange-500 sticky top-0 z-50">Create New Event</span>
          </Link>
        </div>
      </div>

      <div className="flex-grow flex justify-center items-start py-8 px-4">
        <div className="w-full max-w-4xl">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded shadow"
          >

            <div className="col-span-2">
              <label className="block font-semibold mb-1">Event name</label>
              <input
                type="text"
                name="name"
                value={eventData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>

            <div className="col-span-2">
              <label className="block font-semibold mb-1">Description</label>
              <textarea
                name="description"
                value={eventData.description}
                onChange={handleChange}
                placeholder="Tell people what your event is about"
                rows="4"
                className="w-full border border-gray-300 p-3 rounded"
              ></textarea>
            </div>

            <div className="col-span-2">
              <label className="block font-semibold mb-3">Images</label>
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center"
                style={{ minHeight: "200px" }}
              >
                {eventData.eventImagePreview ? (
                  <img
                    src={eventData.eventImagePreview}
                    alt="Event Preview"
                    className="max-h-48 max-w-full object-contain mb-4"
                  />
                ) : (
                  <>
                    <p className="text-gray-700 font-semibold mb-2">Add an image</p>
                    <p className="text-gray-500 text-sm mb-4">
                      Recommended size: 1920x1080px
                    </p>
                  </>
                )}

                <label
                  htmlFor="upload-image-input"
                  className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-green-600 cursor-pointer"
                >
                  Upload image
                </label>
                <input
                  id="upload-image-input"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Event type</label>
              <select
                name="type"
                value={eventData.type}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
              >
                <option value="venue">Venue Event</option>
                <option value="online">Online Event</option>
                <option value="undecided">Undecided</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Organizer</label>
              <input
                type="text"
                name="venue"
                value={eventData.venue}
                onChange={handleChange}
                placeholder="Enter name"
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Start date</label>
              <input
                type="date"
                name="startDate"
                value={eventData.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Start time</label>
              <input
                type="time"
                name="startTime"
                value={eventData.startTime}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Duration</label>
              <input
                type="text"
                name="duration"
                value={eventData.duration}
                onChange={handleChange}
                placeholder="e.g. 3 hours"
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">End time</label>
              <input
                type="time"
                name="endTime"
                value={eventData.endTime}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Timezone</label>
              <select
                name="timezone"
                value={eventData.timezone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
              >
                <option value="Africa/Nairobi">Africa/Nairobi (GMT+03:00)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Currency</label>
              <input
                type="text"
                name="currency"
                value={eventData.currency}
                onChange={handleChange}
                placeholder="e.g. Ksh."
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>

            <div className="col-span-2">
              <label className="block font-semibold mb-1">Event visibility</label>
              <p className="text-sm text-gray-600 mb-2">
                We may display your event on our explore page to increase discoverability if it meets publishing guidelines.
              </p>
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="visibility"
                  checked={eventData.visibility}
                  onChange={handleChange}
                />
                <span>Make my event discoverable</span>
              </label>
            </div>

            <div className="col-span-2">
              <label className="block font-semibold mb-1">Choose event categories</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 border border-gray-200 rounded">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      name="categories"
                      value={cat}
                      checked={eventData.categories.includes(cat)}
                      onChange={handleChange}
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-white py-4 px-8 border-t border-gray-200 mt-auto">
        <div className="max-w-4xl mx-auto flex justify-between">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-6 py-2 border border-orange-500 rounded-md text-gray-700 hover:bg-green-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-green-600"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
