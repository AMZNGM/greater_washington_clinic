import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // API Simulator
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // backend Here
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-white p-10 rounded-3xl shadow-sm shadow-main/30 w-full"
    >
      <h2 className="font-semibold text-black mb-2">Send us a message</h2>

      <div>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className={`p-2 rounded-md border transition w-full ${
            errors.name
              ? "border-red-500 focus:border-red-500"
              : "border-main/50 focus:border-main"
          } focus:outline-none`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          className={`p-2 rounded-md border transition w-full ${
            errors.phone
              ? "border-red-500 focus:border-red-500"
              : "border-main/50 focus:border-main"
          } focus:outline-none`}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className={`p-2 rounded-md border transition w-full ${
            errors.email
              ? "border-red-500 focus:border-red-500"
              : "border-main/50 focus:border-main"
          } focus:outline-none`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <textarea
          id="message"
          name="message"
          placeholder="Messages"
          rows={10}
          value={formData.message}
          onChange={handleInputChange}
          className={`p-2 rounded-md border transition w-full resize-none ${
            errors.message
              ? "border-red-500 focus:border-red-500"
              : "border-main/50 focus:border-main"
          } focus:outline-none`}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      {submitStatus && (
        <div
          className={`p-3 rounded-md text-sm ${
            submitStatus === "success"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {submitStatus === "success"
            ? "Message sent successfully! We'll get back to you soon."
            : "Error sending message. Please try again."}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`mt-2 cursor-pointer font-bold py-2 px-8 rounded-md transition ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-main text-white hover:bg-main/90"
        }`}
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}

export default Form;
