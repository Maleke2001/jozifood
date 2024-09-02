import React from 'react'

export const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8 flex justify-center">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-4 text-yellow-400">About Us</h4>
          <p className="text-gray-400">
            We are a company dedicated to providing high-quality products and services to our customers.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="text-gray-400">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <p className="text-gray-400">
            123 Main Street<br />
            Anytown, USA 12345<br />
            Phone: (555) 123-4567<br />
            Email: info@example.com
          </p>
        </div>
      </div>
    </div>
    <div className="bg-gray-700 py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-300">&copy; 2024 Example Company. All rights reserved.</p>
      </div>
    </div>
  </div>
  )
}
