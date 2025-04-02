import React, { useState } from 'react';
import { MapPin, Navigation, Copy } from 'lucide-react';
import { toast } from 'react-hot-toast';

const LocationSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    enquiryType: '',
    preferredLocation: '',
    comments: '',
    mangoTypes: [],
    mangoQuantity: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  // Add state to track which location's map to display
  const [selectedLocation, setSelectedLocation] = useState(0);

  // Mango types data
  const mangoTypes = [
    "Alphonso Mango", "Banganapalli Mango", "Sindhura Mango", 
    "Mallika Mango", "Sugar Beans Mango", "Malgova Mango", 
    "Raspuri Mango", "Kesar Mango", "Imampasand Mango", 
    "Kalapad Mango", "Daseri Mango"
  ];

  // Locations data array
  const locations = [
    {
      id: 1,
      name: "Yelahanka Satellite Town",
      address: "No. 31, Canara Bank Complex, near INOX Garuda Mall, Sector A, Yelahanka Satellite Town, Yelahanka New Town, Bengaluru, Karnataka 560064",
      plusCode: "3HWM+HC Bengaluru, Karnataka",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4189.640298451319!2d77.58102631096074!3d13.096450287177277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae194a795db087%3A0xba9b2e8e95e548fb!2sFresh%20Mango%20Matrix-A%20Unit%20of%20HD%20Fruit%20Alliances!5e1!3m2!1sen!2sin!4v1743575379418!5m2!1sen!2sin",
      directionsUrl: "https://www.google.com/maps/dir//Fresh+Mango+Matrix-A+Unit+of+HD+Electronics/@13.0997,77.5764,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae18cf3fd3c2e7:0x774f6e37fb94b595!2m2!1d77.5764!2d13.0997"
    },
    {
      id: 2,
      name: "Attur Layout Yelahanka",
      address: "No 103 , Major Unnikrishnan Road Opposite To Purva Venezia Appartment Attur Layout Yelahanka Bengaluru - 560064",
      plusCode: "3HWC+J5 Bengaluru, Karnataka",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4189.639333898142!2d77.56783881096075!3d13.096506987177209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae187c87ed88ef%3A0x78eeb2ba7a5ee8db!2sPurva%20Venezia!5e1!3m2!1sen!2sin!4v1743575205552!5m2!1sen!2sin" ,
      directionsUrl: "https://www.google.com/maps/place/Purva+Venezia/@13.096507,77.5678388,962m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae187c87ed88ef:0x78eeb2ba7a5ee8db!8m2!3d13.096507!4d77.5704191!16s%2Fg%2F11btmcjh52!5m1!1e2?authuser=0&entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      id: 3,
      name: "Whitefield Branch",
      address: "Shop No. 45, Whitefield Main Road, Near Forum Mall, Whitefield, Bengaluru, Karnataka 560066",
      plusCode: "6GMJ+93 Bengaluru, Karnataka",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3208135835313!2d77.7397499!3d12.9591045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13c8c6a32541%3A0xce0db77a21fd05a4!2sWhitefield%20Main%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1706725846015!5m2!1sen!2sin",
      directionsUrl: "https://www.google.com/maps/dir//Whitefield+Main+Rd,+Bengaluru,+Karnataka"
    }
  ];

  // Function to handle directions click
  const handleDirectionsClick = (directionsUrl) => {
    window.open(directionsUrl, '_blank');
  };

  // Function to handle copy address
  const handleCopyAddress = (address) => {
    navigator.clipboard.writeText(address)
      .then(() => toast.success('Address copied to clipboard'))
      .catch(() => toast.error('Failed to copy address'));
  };

  // Form handling functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle checkbox change for mango types
  const handleMangoTypeChange = (type) => {
    setFormData(prev => {
      const updatedMangoTypes = [...prev.mangoTypes];
      if (updatedMangoTypes.includes(type)) {
        // Remove if already selected
        return {
          ...prev,
          mangoTypes: updatedMangoTypes.filter(item => item !== type)
        };
      } else {
        // Add if not selected
        return {
          ...prev,
          mangoTypes: [...updatedMangoTypes, type]
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create the data to be sent, formatting mango types as a string if needed
    const dataToSend = {
      ...formData,
      mangoTypes: formData.mangoTypes.join(', ') // Convert array to comma-separated string
    };
    
    // Your Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxDp8WxAJMpV_ydRt5_rOEQc5GXrxeVhcZ5XHt6MC2GYs6nDSy8FDBr0kcrlak6yLOxcw/exec';
    
    try {
      // Try both approaches - first with regular fetch
      try {
        const response = await fetch(scriptURL, {
          method: 'POST',
          body: JSON.stringify(dataToSend), // Send the modified data
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (response.ok) {
          handleSuccess();
          return;
        }
      } catch (fetchError) {
        console.log("Regular fetch failed, trying no-cors mode");
      }
      
      // If regular fetch fails, try with no-cors mode
      fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(dataToSend), // Send the modified data
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors'
      }).then(() => {
        // Since we can't check response.ok with no-cors, we assume success
        handleSuccess();
      }).catch(error => {
        throw error;
      });
      
    } catch (error) {
      setSubmitStatus({
        submitted: true,
        success: false,
        message: `Error: ${error.message || 'Something went wrong. Please try again.'}`
      });
      setIsSubmitting(false);
    }
  };
  
  // Separate function to handle successful submission
  const handleSuccess = () => {
    setSubmitStatus({
      submitted: true,
      success: true,
      message: 'Thank you! Your form has been submitted successfully.'
    });
    
    // Reset form after successful submission
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      enquiryType: '',
      preferredLocation: '',
      comments: '',
      mangoTypes: [],
      mangoQuantity: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-2">
        <div className="max-w-full mx-auto">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="font-tangerine text-4xl md:text-6xl text-darkGreen2 mb-4">Visit Our Stores</h2>
            <p className="font-tinos text-lg text-gray-600">Find us at our convenient locations</p>
          </div>

          {/* Location tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(index)}
                className={`px-6 py-3 font-tinos font-bold rounded-t-lg transition-colors mx-1 mb-2
                  ${selectedLocation === index 
                    ? 'bg-green3 text-white' 
                    : 'bg-gray-100 text-darkGreen2 hover:bg-gray-200'}`}
              >
                {location.name}
              </button>
            ))}
          </div>

          {/* Cards Container */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Address Card */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-green3/20 h-full">
                <div className="flex items-start space-x-3 mb-6">
                  <MapPin className="w-6 h-6 text-green3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-tinos font-bold text-xl text-darkGreen2 mb-2 relative">
                      {locations[selectedLocation].name}
                      <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-green3 to-transparent" />
                    </h3>
                    <p className="font-tinos text-gray-600 leading-relaxed">
                      {locations[selectedLocation].address}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-4">
                  <button
                    onClick={() => handleDirectionsClick(locations[selectedLocation].directionsUrl)}
                    className="w-full flex items-center justify-center space-x-2 bg-green3 text-white py-3 rounded-lg hover:bg-green4 transition-colors"
                  >
                    <Navigation className="w-5 h-5" />
                    <span className="font-tinos font-bold">Get Directions</span>
                  </button>

                  <button
                    onClick={() => handleCopyAddress(locations[selectedLocation].address)}
                    className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-darkGreen2 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Copy className="w-5 h-5" />
                    <span className="font-tinos font-bold">Copy Address</span>
                  </button>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-tinos text-sm text-gray-600 mb-1">Plus Code:</p>
                    <p className="font-tinos font-bold text-darkGreen2">{locations[selectedLocation].plusCode}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-green3/20 h-full">
                <h3 className="font-tinos font-bold text-xl text-darkGreen2 mb-6">Contact Us</h3>
                
                {submitStatus.submitted && (
                  <div className={`p-4 mb-6 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} font-tinos`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-tinos text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green3 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-tinos text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green3 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block font-tinos text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green3 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block font-tinos text-gray-700 mb-2">
                      Enquiry Related To <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green3 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="Order">Order</option>
                      <option value="Sales">Sales</option>
                      <option value="Support">Support</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  {/* Conditional fields for Order type */}
                  {formData.enquiryType === 'Order' && (
                    <>
                      <div>
                        <label className="block font-tinos text-gray-700 mb-2">
                          Type of Mango to Order <span className="text-red-500">*</span>
                        </label>
                        <div className="max-h-48 overflow-y-auto p-3 border border-gray-300 rounded-lg">
                          {mangoTypes.map((type) => (
                            <div key={type} className="flex items-center mb-2">
                              <input
                                type="checkbox"
                                id={`mango-${type}`}
                                checked={formData.mangoTypes.includes(type)}
                                onChange={() => handleMangoTypeChange(type)}
                                className="mr-2 h-4 w-4 text-green3 focus:ring-green3 border-gray-300 rounded"
                              />
                              <label htmlFor={`mango-${type}`} className="font-tinos text-gray-700">
                                {type}
                              </label>
                            </div>
                          ))}
                        </div>
                        {formData.mangoTypes.length === 0 && formData.enquiryType === 'Order' && (
                          <p className="text-sm text-red-500 mt-1">Please select at least one type of mango</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block font-tinos text-gray-700 mb-2">
                          Quantity (Kg) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          name="mangoQuantity"
                          value={formData.mangoQuantity}
                          onChange={handleInputChange}
                          min="1"
                          required={formData.enquiryType === 'Order'}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green3 focus:border-transparent"
                        />
                      </div>
                    </>
                  )}
                  
                  {/* Add location selection to form */}
                  <div>
                    <label className="block font-tinos text-gray-700 mb-2">
                      Preferred Location <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="preferredLocation"
                      value={formData.preferredLocation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green3 focus:border-transparent"
                    >
                      <option value="">Select a location</option>
                      {locations.map(location => (
                        <option key={location.id} value={location.name}>{location.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-tinos text-gray-700 mb-2">Comments</label>
                    <textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green3 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || (formData.enquiryType === 'Order' && (formData.mangoTypes.length === 0 || !formData.mangoQuantity))}
                    className="w-full bg-green3 text-white py-3 rounded-lg hover:bg-green4 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-tinos font-bold"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>

            {/* Map Card */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-green3/20 h-full">
                <div className="h-full rounded-lg overflow-hidden">
                  <iframe
                    src={locations[selectedLocation].mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title={`${locations[selectedLocation].name} Location`}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;