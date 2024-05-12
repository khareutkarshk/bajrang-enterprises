import mongoose, { Schema, Document } from "mongoose";

export interface Review extends Document {
    name: string;
    rating: string;
    message: string;
    createdAt: Date; // Manually add createdAt field
}

const ReviewSchema: Schema<Review> = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    rating: {
        type: String,
        required: [true, 'Rating is required']
    },
    message: {
        type: String,
        required: [true, 'Message is required']
    },
    createdAt: {
        type: Date,
        default: Date.now // Default createdAt to current date/time
    }
});

export const ReviewModel = (mongoose.models.Review as mongoose.Model<Review>) || mongoose.model<Review>('Review', ReviewSchema)