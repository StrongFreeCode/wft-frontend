
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMessage } from "react-icons/fa";

export const Contact = () => {
  const ContactInfo = [
    {
      title: "Delivery",
      email: "delivery@gmail.com",
      phone: "+254 780341267",
      message: "+254 789065432",
    },
    {
      title: "Support",
      email: "support@gmail.com",
      phone: "+254 765890231",
      message: "+254 756421190",
    },
    {
      title: "Careers",
      email: "careers@gmail.com",
      phone: "+254 768905413",
      message: "+254 711748900",
    },
  ];

  return (
    <div className="container mx-auto py-10 h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-gray-600">
          Have questions? We are here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold">Have another question?</h2>
        <p className="mt-2 text-gray-600">Fill the form below</p>
      </div>

      <form className="mt-8 max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex gap-4">
            <input
              className="w-1/2 py-2 px-4 border border-gray-300 rounded-md"
              type="email"
              placeholder="E-mail"
            />
            <input
              className="w-1/2 py-2 px-4 border border-gray-300 rounded-md"
              type="text"
              placeholder="Full Name"
            />
          </div>

          <select
            className="w-full py-2 px-4 border border-gray-300 rounded-md"
            name="category"
          >
            <option value="" disabled selected>
              Please choose a category
            </option>
            <option value="delivery">Delivery</option>
            <option value="support">Support</option>
            <option value="profile">Profile</option>
            <option value="careers">Careers</option>
            <option value="another">Another category</option>
          </select>

          <textarea
            className="w-full py-2 px-4 border border-gray-300 rounded-md"
            placeholder="Write a commentary..."
          />

          <div className="flex items-center mt-4">
            <input
              className="mr-2 border border-gray-300 rounded-md"
              type="checkbox"
              id="checkbox_terms"
            />
            <label htmlFor="checkbox_terms" className="text-gray-600">
              I have read and agree with
              <a href="/terms-and-conditions" className="text-violet-700">
                {" "}
                terms & conditions
              </a>
            </label>
          </div>

          <button
            className="mt-4 bg-violet-700 text-white py-2 px-6 rounded-md"
            type="button"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
