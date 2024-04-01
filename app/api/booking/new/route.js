import Booking from '@models/booking';
import { connectToDB } from '@utils/database';

export const POST = async (request) => {
  const { userId, date, time, name, phone, total_person } = await request.json();

  try {
    await connectToDB();
    const newBooking = new Booking({ creator: userId, date, time, name, phone, total_person });

    await newBooking.save();
    return new Response(JSON.stringify(newBooking), { status: 201 });
  } catch (error) {
    return new Response('Failed to create a new prompt', { status: 500 });
  }
};
