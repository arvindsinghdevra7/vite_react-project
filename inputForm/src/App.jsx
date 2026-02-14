import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("FORM DATA 👉", formData);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <form
        onSubmit={submitHandler}
        className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-gray-800">
          User Information Form
        </h1>

        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            placeholder="Love"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            placeholder="Babbar"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="love@abcd.com"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Street address
          </label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={changeHandler}
            placeholder="B-25C"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={changeHandler}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={changeHandler}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={changeHandler}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
        </div>

        {/* Checkboxes */}
        <fieldset className="border-t pt-6">
          <legend className="font-semibold text-gray-900">By Email</legend>

          <div className="mt-4 space-y-4">
            <div className="flex gap-3">
              <input
                type="checkbox"
                name="comments"
                checked={formData.comments}
                onChange={changeHandler}
                className="h-4 w-4 mt-1 text-indigo-600"
              />
              <div>
                <p className="font-medium">Comments</p>
                <p className="text-sm text-gray-500">
                  Get notified when someone posts a comment.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                name="candidates"
                checked={formData.candidates}
                onChange={changeHandler}
                className="h-4 w-4 mt-1 text-indigo-600"
              />
              <div>
                <p className="font-medium">Candidates</p>
                <p className="text-sm text-gray-500">
                  Get notified when a candidate applies.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                name="offers"
                checked={formData.offers}
                onChange={changeHandler}
                className="h-4 w-4 mt-1 text-indigo-600"
              />
              <div>
                <p className="font-medium">Offers</p>
                <p className="text-sm text-gray-500">
                  Get notified when an offer is accepted or rejected.
                </p>
              </div>
            </div>
          </div>
        </fieldset>

        {/* Radio */}
        <fieldset className="border-t pt-6">
          <legend className="font-semibold text-gray-900">
            Push Notifications
          </legend>

          <div className="mt-4 space-y-2">
            {["Everything", "Same as email", "No Push Notifications"].map(
              (item) => (
                <label key={item} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="pushNotifications"
                    value={item}
                    onChange={changeHandler}
                    className="h-4 w-4 text-indigo-600"
                  />
                  <span>{item}</span>
                </label>
              )
            )}
          </div>
        </fieldset>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default App;
