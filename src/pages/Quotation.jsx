
import { useState } from "react";

import {
  User,
  Mail,
  Phone,
  Layers,
  DollarSign,
  Clock3,
  MessageSquare,
  Send,
} from "lucide-react";

function Quotation() {
  /* =========================================
     COUNTRY LIST
  ========================================= */
  const countries = [
    {
      name: "India",
      code: "+91",
      flag: "🇮🇳",
      placeholder: "98765 43210",
      digits: 10,
    },
    {
      name: "United States",
      code: "+1",
      flag: "🇺🇸",
      placeholder: "(201) 555-0123",
      digits: 10,
    },
    {
      name: "Canada",
      code: "+1",
      flag: "🇨🇦",
      placeholder: "(416) 555-0123",
      digits: 10,
    },
    {
      name: "United Kingdom",
      code: "+44",
      flag: "🇬🇧",
      placeholder: "07123 456789",
      digits: 10,
    },
    {
      name: "Australia",
      code: "+61",
      flag: "🇦🇺",
      placeholder: "0412 345 678",
      digits: 9,
    },
    {
      name: "Germany",
      code: "+49",
      flag: "🇩🇪",
      placeholder: "1512 3456789",
      digits: 11,
    },
    {
      name: "France",
      code: "+33",
      flag: "🇫🇷",
      placeholder: "06 12 34 56 78",
      digits: 9,
    },
    {
      name: "Italy",
      code: "+39",
      flag: "🇮🇹",
      placeholder: "312 345 6789",
      digits: 10,
    },
    {
      name: "Spain",
      code: "+34",
      flag: "🇪🇸",
      placeholder: "612 345 678",
      digits: 9,
    },
    {
      name: "Portugal",
      code: "+351",
      flag: "🇵🇹",
      placeholder: "912 345 678",
      digits: 9,
    },
    {
      name: "Netherlands",
      code: "+31",
      flag: "🇳🇱",
      placeholder: "06 12345678",
      digits: 9,
    },
    {
      name: "Switzerland",
      code: "+41",
      flag: "🇨🇭",
      placeholder: "79 123 45 67",
      digits: 9,
    },
    {
      name: "Sweden",
      code: "+46",
      flag: "🇸🇪",
      placeholder: "070 123 45 67",
      digits: 9,
    },
    {
      name: "Norway",
      code: "+47",
      flag: "🇳🇴",
      placeholder: "412 34 567",
      digits: 8,
    },
    {
      name: "Denmark",
      code: "+45",
      flag: "🇩🇰",
      placeholder: "20 12 34 56",
      digits: 8,
    },
    {
      name: "Finland",
      code: "+358",
      flag: "🇫🇮",
      placeholder: "40 123 4567",
      digits: 9,
    },
    {
      name: "Ireland",
      code: "+353",
      flag: "🇮🇪",
      placeholder: "085 123 4567",
      digits: 9,
    },
    {
      name: "Belgium",
      code: "+32",
      flag: "🇧🇪",
      placeholder: "0470 12 34 56",
      digits: 9,
    },
    {
      name: "Austria",
      code: "+43",
      flag: "🇦🇹",
      placeholder: "0664 123456",
      digits: 10,
    },
    {
      name: "Poland",
      code: "+48",
      flag: "🇵🇱",
      placeholder: "512 345 678",
      digits: 9,
    },
    {
      name: "Brazil",
      code: "+55",
      flag: "🇧🇷",
      placeholder: "11 91234 5678",
      digits: 11,
    },
    {
      name: "Mexico",
      code: "+52",
      flag: "🇲🇽",
      placeholder: "55 1234 5678",
      digits: 10,
    },
    {
      name: "Argentina",
      code: "+54",
      flag: "🇦🇷",
      placeholder: "11 1234 5678",
      digits: 10,
    },
    {
      name: "South Africa",
      code: "+27",
      flag: "🇿🇦",
      placeholder: "071 234 5678",
      digits: 9,
    },
    {
      name: "United Arab Emirates",
      code: "+971",
      flag: "🇦🇪",
      placeholder: "50 123 4567",
      digits: 9,
    },
    {
      name: "Saudi Arabia",
      code: "+966",
      flag: "🇸🇦",
      placeholder: "50 123 4567",
      digits: 9,
    },
    {
      name: "Qatar",
      code: "+974",
      flag: "🇶🇦",
      placeholder: "3312 3456",
      digits: 8,
    },
    {
      name: "Kuwait",
      code: "+965",
      flag: "🇰🇼",
      placeholder: "500 12345",
      digits: 8,
    },
    {
      name: "Singapore",
      code: "+65",
      flag: "🇸🇬",
      placeholder: "8123 4567",
      digits: 8,
    },
    {
      name: "Malaysia",
      code: "+60",
      flag: "🇲🇾",
      placeholder: "12 345 6789",
      digits: 9,
    },
    {
      name: "Indonesia",
      code: "+62",
      flag: "🇮🇩",
      placeholder: "812 3456 7890",
      digits: 11,
    },
    {
      name: "Thailand",
      code: "+66",
      flag: "🇹🇭",
      placeholder: "81 234 5678",
      digits: 9,
    },
    {
      name: "Philippines",
      code: "+63",
      flag: "🇵🇭",
      placeholder: "917 123 4567",
      digits: 10,
    },
    {
      name: "Japan",
      code: "+81",
      flag: "🇯🇵",
      placeholder: "90 1234 5678",
      digits: 10,
    },
    {
      name: "South Korea",
      code: "+82",
      flag: "🇰🇷",
      placeholder: "10 1234 5678",
      digits: 10,
    },
    {
      name: "China",
      code: "+86",
      flag: "🇨🇳",
      placeholder: "138 1234 5678",
      digits: 11,
    },
    {
      name: "New Zealand",
      code: "+64",
      flag: "🇳🇿",
      placeholder: "021 123 4567",
      digits: 9,
    },
    {
      name: "Russia",
      code: "+7",
      flag: "🇷🇺",
      placeholder: "912 345 6789",
      digits: 10,
    },
    {
      name: "Turkey",
      code: "+90",
      flag: "🇹🇷",
      placeholder: "532 123 4567",
      digits: 10,
    },
    {
      name: "Israel",
      code: "+972",
      flag: "🇮🇱",
      placeholder: "50 123 4567",
      digits: 9,
    },
  ];

  /* =========================================
     FORM STATE
  ========================================= */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryName: "India",
    countryCode: "+91",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    projectDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /* =========================================
     SELECTED COUNTRY
  ========================================= */
  const selectedCountry =
    countries.find(
      (country) =>
        country.name === formData.countryName
    ) || countries[0];

  /* =========================================
     HANDLE INPUT CHANGES
  ========================================= */
  const handleChange = (event) => {
    const { name, value } = event.target;

    /* NAME - LETTERS AND SPACES ONLY */
    if (name === "name") {
      const cleanedName = value.replace(
        /[^A-Za-z ]/g,
        ""
      );

      setFormData((previousData) => ({
        ...previousData,
        name: cleanedName,
      }));

      return;
    }

    /* PHONE - NUMBERS ONLY */
    if (name === "phone") {
      const numbersOnly = value
        .replace(/\D/g, "")
        .slice(0, selectedCountry.digits);

      setFormData((previousData) => ({
        ...previousData,
        phone: numbersOnly,
      }));

      return;
    }

    /* COUNTRY */
    if (name === "countryName") {
      const country = countries.find(
        (item) => item.name === value
      );

      if (country) {
        setFormData((previousData) => ({
          ...previousData,
          countryName: country.name,
          countryCode: country.code,
          phone: "",
        }));

        setErrorMessage("");
        setSuccessMessage("");
      }

      return;
    }

    /* OTHER FIELDS */
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  /* =========================================
     HANDLE FORM SUBMIT
  ========================================= */
  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const cleanedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      countryName: formData.countryName,
      countryCode: formData.countryCode,
      phone: formData.phone.trim(),
      projectType: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      projectDetails:
        formData.projectDetails.trim(),
    };

    /* =========================================
       REQUIRED FIELD VALIDATION
    ========================================= */
    if (
      !cleanedData.name ||
      !cleanedData.email ||
      !cleanedData.phone ||
      !cleanedData.projectType ||
      !cleanedData.budget ||
      !cleanedData.timeline ||
      !cleanedData.projectDetails
    ) {
      setErrorMessage(
        "Please fill in all required fields."
      );

      setIsSubmitting(false);
      return;
    }

    /* =========================================
       NAME VALIDATION
    ========================================= */
    const namePattern =
      /^[A-Za-z]+(?: [A-Za-z]+)*$/;

    if (!namePattern.test(cleanedData.name)) {
      setErrorMessage(
        "Name can contain letters and spaces only."
      );

      setIsSubmitting(false);
      return;
    }

    /* =========================================
       PHONE VALIDATION
    ========================================= */
    if (
      !/^\d+$/.test(cleanedData.phone) ||
      cleanedData.phone.length !==
        selectedCountry.digits
    ) {
      setErrorMessage(
        `Please enter a valid ${selectedCountry.digits}-digit phone number for ${selectedCountry.name}.`
      );

      setIsSubmitting(false);
      return;
    }

    /* =========================================
       EMAIL VALIDATION
    ========================================= */
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanedData.email)) {
      setErrorMessage(
        "Please enter a valid email address."
      );

      setIsSubmitting(false);
      return;
    }

    /* =========================================
       DATA SENT TO BACKEND
    ========================================= */
    const quotationData = {
      name: cleanedData.name,
      email: cleanedData.email,
      countryName: cleanedData.countryName,
      countryCode: cleanedData.countryCode,
      phone: cleanedData.phone,
      projectType: cleanedData.projectType,
      budget: cleanedData.budget,
      timeline: cleanedData.timeline,
      projectDetails:
        cleanedData.projectDetails,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/quotations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(quotationData),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to submit quotation"
        );
      }

      /* =========================================
         SUCCESS
      ========================================= */
      setSuccessMessage(
        "Your quotation request has been submitted successfully."
      );

      setErrorMessage("");

      /* RESET FORM */
      setFormData({
        name: "",
        email: "",
        countryName: "India",
        countryCode: "+91",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        projectDetails: "",
      });
    } catch (error) {
      console.error(
        "Quotation submission error:",
        error
      );

      setSuccessMessage("");

      setErrorMessage(
        "Unable to submit your request. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="quotation-page">

      {/* =========================================
          PAGE HERO
      ========================================= */}
      <section className="quotation-hero">

        <div className="quotation-hero-content">

          <div className="section-label">
            GET A QUOTE
          </div>

          <h1>
            Online <span>Quotation Form</span>
          </h1>

          <p>
            Tell us about your project and we'll get
            back to you with the next steps.
          </p>

        </div>

      </section>


      {/* =========================================
          QUOTATION FORM
      ========================================= */}
      <section className="quotation-section">

        <form
          className="quotation-form"
          onSubmit={handleSubmit}
        >

          {/* =====================================
              NAME
          ===================================== */}
          <div className="form-field">

            <label htmlFor="name">

              <User size={15} />

              Your Name

              <span className="required">
                *
              </span>

            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />

          </div>


          {/* =====================================
              EMAIL
          ===================================== */}
          <div className="form-field">

            <label htmlFor="email">

              <Mail size={15} />

              Your Email

              <span className="required">
                *
              </span>

            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />

          </div>


          {/* =====================================
              PHONE
          ===================================== */}
          <div className="form-field">

            <label htmlFor="phone">

              <Phone size={15} />

              Your Phone

              <span className="required">
                *
              </span>

            </label>


            <div className="phone-input-wrapper">

              {/* COUNTRY DROPDOWN */}
              <div className="country-select-wrapper">

                <span className="selected-country-flag">
                  {selectedCountry.flag}
                </span>

                <select
                  id="countryName"
                  name="countryName"
                  value={formData.countryName}
                  onChange={handleChange}
                  className="country-code-select"
                  aria-label="Select country"
                  required
                >

                  {countries.map((country) => (
                    <option
                      key={country.name}
                      value={country.name}
                    >
                      {country.flag} {country.name}{" "}
                      ({country.code})
                    </option>
                  ))}

                </select>

              </div>


              {/* PHONE NUMBER */}
              <div className="phone-number-wrapper">

                <span className="phone-country-code">
                  {selectedCountry.code}
                </span>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={selectedCountry.digits}
                  placeholder={
                    selectedCountry.placeholder
                  }
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel-national"
                  required
                />

              </div>

            </div>


            {/* EXAMPLE */}
            <small className="phone-hint">

              {selectedCountry.flag}{" "}
              Example for {selectedCountry.name}:{" "}
              <strong>
                {selectedCountry.code}{" "}
                {selectedCountry.placeholder}
              </strong>

            </small>

          </div>


          {/* =====================================
              PROJECT TYPE
          ===================================== */}
          <div className="form-field">

            <label htmlFor="projectType">

              <Layers size={15} />

              Project Type

              <span className="required">
                *
              </span>

            </label>

            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
            >

              <option value="" disabled>
                Select project type
              </option>

              <option value="web-development">
                Web Development
              </option>

              <option value="software-development">
                Software Development
              </option>

              <option value="it-solutions">
                IT Solutions
              </option>

              <option value="ai-data-solutions">
                AI & Data Solutions
              </option>

              <option value="digital-services">
                Digital Services
              </option>

              <option value="other">
                Other
              </option>

            </select>

          </div>


          {/* =====================================
              BUDGET + TIMELINE
          ===================================== */}
          <div className="quotation-form-row">

            {/* BUDGET */}
            <div className="form-field">

              <label htmlFor="budget">

                <DollarSign size={15} />

                Budget Range

                <span className="required">
                  *
                </span>

              </label>

              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
              >

                <option value="" disabled>
                  Select budget range
                </option>

                <option value="under-1k">
                  Under ₹1,000
                </option>

                <option value="1k-5k">
                  ₹1,000 – ₹5,000
                </option>

                <option value="5k-10k">
                  ₹5,000 – ₹10,000
                </option>

                <option value="10k-25k">
                  ₹10,000 – ₹25,000
                </option>

                <option value="25k-plus">
                  ₹25,000+
                </option>

              </select>

            </div>


            {/* TIMELINE */}
            <div className="form-field">

              <label htmlFor="timeline">

                <Clock3 size={15} />

                Timeline

                <span className="required">
                  *
                </span>

              </label>

              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
              >

                <option value="" disabled>
                  Select timeline
                </option>

                <option value="less-than-month">
                  Less than 1 month
                </option>

                <option value="1-3-months">
                  1 – 3 months
                </option>

                <option value="3-6-months">
                  3 – 6 months
                </option>

                <option value="6-plus-months">
                  6+ months
                </option>

                <option value="flexible">
                  Flexible
                </option>

              </select>

            </div>

          </div>


          {/* =====================================
              PROJECT DETAILS
          ===================================== */}
          <div className="form-field">

            <label htmlFor="details">

              <MessageSquare size={15} />

              Project Details

              <span className="required">
                *
              </span>

            </label>

            <textarea
              id="details"
              name="projectDetails"
              rows="5"
              placeholder="Describe your project requirements, goals, and any specific features you need..."
              value={formData.projectDetails}
              onChange={handleChange}
              required
            />

          </div>


          {/* =====================================
              SUCCESS MESSAGE
          ===================================== */}
          {successMessage && (
            <p
              className="quotation-success"
              role="status"
            >
              {successMessage}
            </p>
          )}


          {/* =====================================
              ERROR MESSAGE
          ===================================== */}
          {errorMessage && (
            <p
              className="quotation-error"
              role="alert"
            >
              {errorMessage}
            </p>
          )}


          {/* =====================================
              SUBMIT BUTTON
          ===================================== */}
          <button
            className="quotation-submit"
            type="submit"
            disabled={isSubmitting}
          >

            <Send size={16} />

            {isSubmitting
              ? "Submitting..."
              : "Request Quote"}

          </button>

        </form>

      </section>


      {/* =========================================
          WHAT HAPPENS NEXT
      ========================================= */}
      <section className="quotation-process">

        <div className="quotation-process-heading">

          <div className="section-label">
            WHAT HAPPENS NEXT?
          </div>

          <h2>
            What Happens Next?
          </h2>

          <p>
            Our streamlined process ensures you get
            a detailed quote quickly.
          </p>

        </div>


        <div className="quotation-process-grid">

          {/* STEP 01 */}
          <article className="quotation-process-step">

            <span className="quotation-process-number">
              01
            </span>

            <h3>
              Submit Request
            </h3>

            <p>
              Fill out the form with your project details
            </p>

          </article>


          {/* STEP 02 */}
          <article className="quotation-process-step">

            <span className="quotation-process-number">
              02
            </span>

            <h3>
              Quick Review
            </h3>

            <p>
              Our team reviews your requirements
            </p>

          </article>


          {/* STEP 03 */}
          <article className="quotation-process-step">

            <span className="quotation-process-number">
              03
            </span>

            <h3>
              Discovery Call
            </h3>

            <p>
              We schedule a call to discuss specifics
            </p>

          </article>


          {/* STEP 04 */}
          <article className="quotation-process-step">

            <span className="quotation-process-number">
              04
            </span>

            <h3>
              Detailed Quote
            </h3>

            <p>
              Receive a comprehensive project estimate
            </p>

          </article>

        </div>

      </section>

    </main>
  );
}

export default Quotation;
