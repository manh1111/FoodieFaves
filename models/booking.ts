import { Schema, model, models } from 'mongoose';

const BookingSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    required: [true, 'Date is required.'],
  },
  time: {
    type: String,
    required: [true, 'Time is required.'],
  },
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  phone: {
    type: String,
    required: [true, 'Phone is required.'],
  },
  total_person: {
    type: Number,
    required: [true, 'Total person is required.'],
  },
});

const Booking = models.Booking || model('Booking', BookingSchema);

export default Booking;
