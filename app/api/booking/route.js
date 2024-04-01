import Booking from '@models/Booking';
import { connectToDB } from '@utils/database';

export const GET = async (request) => {
  try {
    await connectToDB();

    const books = await Booking.find({}).populate('creator');

    return new Response(JSON.stringify(books), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all books', { status: 500 });
  }
};
