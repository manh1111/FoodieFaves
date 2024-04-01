import { images } from '@public/assets/images';
import Image from 'next/image';
import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    phone: '',
    total_person: '',
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //  gửi dữ liệu đến server
    try {
      const response = await fetch('/api/bookings/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: formData.date,
          time: formData.time,
          name: formData.name,
          phone: formData.phone,
          total_person: formData.total_person,
        }),
      });
      if (response.ok) {
        setFormData({
          date: '',
          time: '',
          name: '',
          phone: '',
          total_person: '',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="body flex flex-col">
      <div className="section flex-col relative mb-48">
        <div className="text w-2/5 text-center">
          <p className="font_playfair not_italic font-normal text-2xl md:text-7xl md:pb-5">Book A Table</p>
          <p className="description text-normal">
            We consider all the drivers of change gives you the components you need to change to create a truly happens.
          </p>
        </div>
      </div>
      <div className="form absolute inset-x-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl w-full md:w-1/2">
        <form onSubmit={handleSubmit} className="w-full pl-5 py-5 bg-white rounded-md shadow-md space-y-4">
          <div className="flex flex-row justify-between">
            <InputField label="Date" name="date" type="date" value={formData.date} onChange={handleInputChange} />
            <InputField label="Time" name="time" type="time" value={formData.time} onChange={handleInputChange} />
          </div>
          <div className="flex flex-row justify-between">
            <InputField label="Name" name="name" type="text" value={formData.name} onChange={handleInputChange} />
            <InputField label="Phone" name="phone" type="text" value={formData.phone} onChange={handleInputChange} />
          </div>
          <InputField
            label="Total Person"
            name="total_person"
            type="number"
            value={formData.total_person}
            onChange={handleInputChange}
            min="1"
          />
          <div className="button w-full flex justify-center pr-5">
            <button type="submit" className="w-full text-lg font-semibold red_btn">
              Book A Table
            </button>
          </div>
        </form>
      </div>
      <Image alt="Map" src={images.map} priority={true} className="object-contain" />
    </div>
  );
};

export default Booking;
