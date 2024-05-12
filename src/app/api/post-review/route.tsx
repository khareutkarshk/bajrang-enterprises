import dbConnect from "@/db/dbConnect";
import { ReviewModel } from "@/model/Review";
export async function POST(request: Request){
    await dbConnect();

    try {
        const {rating, message, name} = await request.json();

        const createdAt = new Date();
        
        const review = await ReviewModel.create({
            name,
            rating,
            message,
            createdAt: new Date()
        })
        console.log(review);
        
        return Response.json({
            success: true,
            message: "Review created successfully",
            data: review
        }, { status: 201 })
        
    } catch (error) {
        console.error("Error creating review: ", error);
        return Response.json({
            success: false,
            message: "Error creating review",
        }, { status: 500 })
        
    }
}