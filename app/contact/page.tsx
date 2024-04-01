'use client';

import { images } from '@public/assets/images';
import Image from 'next/image';
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const InputField: React.FC<{
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    min?: string;
  }> = ({ label, name, type, value, onChange, min }) => {
    return (
      <div className="text-start w-full pr-5">
        <label htmlFor={name} className="text-sm text-[#2C2F24] font-semibold">
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          min={min}
          className="input_form "
          required
        />
      </div>
    );
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //  gửi dữ liệu đến server
    console.log(formData);

    setFormData({
      name: '',
      subject: '',
      message: '',
      email: '',
    });
  };

  return (
    <div className="body flex flex-col">
      <div className="section flex-col relative mb-48">
        <div className="text w-2/5 text-center">
          <p className="font_playfair not_italic font-normal text-2xl md:text-7xl md:pb-5">Contact Us</p>
          <p className="description text-normal">
            We consider all the drivers of change gives you the components you need to change to create a truly happens.
          </p>
        </div>
      </div>
      <div className="form absolute inset-x-1/2 -translate-x-1/2 -translate-y-2/5 shadow-xl w-full md:w-1/2">
        <form onSubmit={handleSubmit} className="w-full pl-5 py-5 bg-white rounded-md shadow-md space-y-4">
          <div className="flex flex-row justify-between">
            <InputField label="Name" name="name" type="text" value={formData.name} onChange={handleInputChange} />
            <InputField label="Email" name="email" type="text" value={formData.email} onChange={handleInputChange} />
          </div>
          <InputField
            label="Subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleInputChange}
          />
          <InputField
            label="Message"
            name="message"
            type="text"
            value={formData.message}
            onChange={handleInputChange}
          />
          <div className="button w-full flex justify-center pr-5">
            <button type="submit" className="w-full text-lg font-semibold red_btn">
              Send
            </button>
          </div>
        </form>
      </div>

      <div className="section h-80 bg-[--color-gray]">
        <div className="flex flex-row justify-between w-full md:w-3/5 pt-20 px-7">
          <div className="w-fit">
            <p className="font-semibold pb-3">Call Us:</p>
            <p className="text-xs">+1-234-567-8900</p>
          </div>
          <div className="w-fit">
            <p className="font-semibold pb-3">Hours:</p>
            <p className="text-xs">Mon-Fri: 11am - 8pm Sat</p>
            <p className="text-xs">Sun: 9am - 10pm</p>
          </div>
          <div className="w-fit">
            <p className="font-semibold pb-3">Our Location:</p>
            <p className="text-xs">123 Bridge Street</p>
            <p className="text-xs">Nowhere Land, LA 12345</p>
            <p className="text-xs">United States</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
