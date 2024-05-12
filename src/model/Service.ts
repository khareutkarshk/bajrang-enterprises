import mongoose, {Schema, Document} from "mongoose";

export interface Service extends Document {
    name: string;
    location: string;
    email: string;
    phone: string;
    message: string;
}

const ServiceSchema: Schema<Service> = new Schema({
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

export const ServiceModel = (mongoose.models.Service as mongoose.Model<Service>) || mongoose.model<Service>('Service', ServiceSchema)