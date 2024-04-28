import mongoose, {Schema, Document} from "mongoose";

export interface Inquire extends Document {
    name: string;
    location: string;
    email: string;
    phone: string;
    message: string;
}

const InquireSchema: Schema<Inquire> = new Schema({
    name: {
        type: String, 
        required: [true, 'Name is required'] 
    },
    email: {
        type: String, 
        required: [true, 'Email is required'] 
    },
    location: {
        type: String, 
        required: [true, 'Location is required'] 
    },
    phone: {
        type: String, 
        required: [true, 'Phone is required'] 
    },
    message: {
        type: String, 
        required: [true, 'Message is required'] 
    }
   
})

export const InquireModel = (mongoose.models.Inquire as mongoose.Model<Inquire>) || mongoose.model<Inquire>('Inquire', InquireSchema)