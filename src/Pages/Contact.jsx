import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create email content
      const emailContent = `
New Contact Form Submission:

Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}

--
Sent from ShoeTIme Contact Form
      `.trim();

      // You can integrate with EmailJS here or use any email service
      // For now, we'll simulate the form submission
      console.log("Form submitted:", form);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert("Thank you for your message! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert("Sorry, there was an error sending your message. Please try contacting us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Have questions about our products? Need styling advice? 
            We're here to help you find the perfect shoes, slippers, crocs and watches.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We're passionate about helping you step up your style game. 
                Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone / WhatsApp</h3>
                  <p className="text-gray-600">+91 9034168366</p>
                  <p className="text-sm text-gray-500">Available 24/7 for quick responses</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 p-4 rounded-full">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">ansh.1.9.0.1.11@gmail.com</p>
                  <p className="text-sm text-gray-500">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 p-4 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Service Area</h3>
                  <p className="text-gray-600">All Over India</p>
                  <p className="text-gray-600">Fast delivery nationwide</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-orange-100 p-4 rounded-full">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Response Hours</h3>
                  <p className="text-gray-600">WhatsApp: Available 24/7</p>
                  <p className="text-gray-600">Email: Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Need Quick Help?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919034168366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href="mailto:ansh.1.9.0.1.11@gmail.com"
                  className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Send us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="sizing-help">Sizing Help</option>
                  <option value="order-status">Order Status</option>
                  <option value="return-exchange">Return/Exchange</option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quick answers to common questions about our products and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What's your return policy?</h3>
              <p className="text-gray-600">
                We offer a 7-day return policy for all unworn items in original packaging. 
                Contact us via WhatsApp for easy returns.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Do you deliver all over India?</h3>
              <p className="text-gray-600">
                Yes, we deliver across India! Delivery times vary by location. 
                Contact us for specific delivery timelines to your area.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How do I know the right size?</h3>
              <p className="text-gray-600">
                Each product includes sizing information. You can also contact us via WhatsApp 
                for personalized sizing recommendations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Are your products authentic?</h3>
              <p className="text-gray-600">
                Absolutely! All our shoes, slippers, crocs and watches are 100% authentic 
                and sourced from authorized dealers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept various payment methods including UPI, bank transfers, and cash on delivery. 
                Contact us for specific payment options.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can I order in bulk?</h3>
              <p className="text-gray-600">
                Yes! We offer special pricing for bulk orders. WhatsApp us with your requirements 
                for custom quotes and wholesale pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
