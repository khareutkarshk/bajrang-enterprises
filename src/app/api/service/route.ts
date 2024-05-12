import dbConnect from "@/db/dbConnect";
import { ServiceModel } from "@/model/Service";
export async function POST(request: Request) {

    await dbConnect();

    try {
        const { name, location, phone, email, message } = await request.json();

        if (
            [name, location, phone, email, message].some((field) => field?.trim() === "")
        ) {
            return Response.json({
                success: false,
                message: "All fields are required",
            }, { status: 400 })
        }
        const inquiry = await ServiceModel.create({
            name,
            location,
            phone,
            message,
            email
        })
        return Response.json({
            success: true,
            message: "Service created successfully",
            data: inquiry
        }, { status: 201 })
    } catch (error) {
        console.error("Error creating Service: ", error);
        return Response.json({
            success: false,
            message: "Error creating Service",

        }, { status: 500 })
    }
}
