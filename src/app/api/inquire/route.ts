import dbConnect from "@/db/dbConnect";
import { InquireModel } from "@/model/Inquire";
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
        const inquiry = await InquireModel.create({
            name,
            location,
            phone,
            message,
            email
        })
        return Response.json({
            success: true,
            message: "Inquiry created successfully",
            data: inquiry
        }, { status: 201 })
    } catch (error) {
        console.error("Error creating inquiry: ", error);
        return Response.json({
            success: false,
            message: "Error creating inquiry",

        }, { status: 500 })
    }
}
