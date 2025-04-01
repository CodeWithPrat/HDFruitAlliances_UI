import React, { useState } from 'react';
import { MapPin, Navigation, Copy } from 'lucide-react';
import { toast } from 'react-hot-toast';

const LocationSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    enquiryType: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  // Existing functions for map handling
  const handleDirectionsClick = () => {
    window.open('https://www.google.com/maps/dir//Fresh+Mango+Matrix-A+Unit+of+HD+Electronics/@13.0997,77.5764,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae18cf3fd3c2e7:0x774f6e37fb94b595!2m2!1d77.5764!2d13.0997', '_blank');
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('No. 31, Canara Bank Complex, near INOX Garuda Mall, Sector A, Yelahanka Satellite Town, Yelahanka New Town, Bengaluru, Karnataka 560064')
      .then(() => toast.success('Address copied to clipboard'))
      .catch(() => toast.error('Failed to copy address'));
  };

  // New form handling functions based on ContactForm
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Your Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwpcMYHKFc0D4lAR-nSH98k2HUWOzZ4VEiMscHdXLLM3MlU5f3q0DcweO0jHVfHfLUoQg/exec';
    
    try {
      // Try both approaches - first with regular fetch
      try {
        const response = await fetch(scriptURL, {
          method: 'POST',
          body: JSON.stringify(formData),
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
        body: JSON.stringify(formData),
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
      comments: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-2">
        <div className="max-w-full mx-auto">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="font-tangerine text-4xl md:text-6xl text-darkGreen2 mb-4">Visit Our Store</h2>
            <p className="font-tinos text-lg text-gray-600">Find us at our convenient location</p>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Address Card */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-green3/20 h-full">
                <div className="flex items-start space-x-3 mb-6">
                  <MapPin className="w-6 h-6 text-green3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-tinos font-bold text-xl text-darkGreen2 mb-2">Our Address
                    <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-green3 to-transparent" />
                    </h3>
                    <p className="font-tinos text-gray-600 leading-relaxed">
                      No. 31, Canara Bank Complex, near INOX Garuda Mall, Sector A, Yelahanka Satellite Town, Yelahanka New Town, Bengaluru, Karnataka 560064
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-4">
                  <button
                    onClick={handleDirectionsClick}
                    className="w-full flex items-center justify-center space-x-2 bg-green3 text-white py-3 rounded-lg hover:bg-green4 transition-colors"
                  >
                    <Navigation className="w-5 h-5" />
                    <span className="font-tinos font-bold">Get Directions</span>
                  </button>

                  <button
                    onClick={handleCopyAddress}
                    className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-darkGreen2 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Copy className="w-5 h-5" />
                    <span className="font-tinos font-bold">Copy Address</span>
                  </button>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-tinos text-sm text-gray-600 mb-1">Plus Code:</p>
                    <p className="font-tinos font-bold text-darkGreen2">3HWM+HC Bengaluru, Karnataka</p>
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
                      <option value="Sales">Sales</option>
                      <option value="Support">Support</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
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
                    disabled={isSubmitting}
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4463247497866!2d77.57640000000001!3d13.0997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae18cf3fd3c2e7%3A0x774f6e37fb94b595!2sFresh%20Mango%20Matrix-A%20Unit%20of%20HD%20Electronics!5e0!3m2!1sen!2sin!4v1707725846015!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Store Location"
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