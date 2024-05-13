import { ReviewModel } from "@/model/Review";
import dbConnect from "@/db/dbConnect";

export async function GET(request: Request) {
    await dbConnect();

    try {
        const reviews = await ReviewModel.find({});

        // short it by created at field using aggrigation pipeline
        


        return Response.json({
            success: true,
            data: reviews
        }, { status: 200 });

    } catch (error) {
        console.error("Error getting reviews: ", error);
        return Response.json({
            success: false,
            message: "Error getting reviews"
        }, { status: 500 });
    }
}