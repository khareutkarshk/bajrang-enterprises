import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import dbConnect from "@/db/dbConnect";


export async function POST(request:Request){
    await dbConnect();

    try{

        const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

        const { name, location, phone, email, message } = await request.json();


        let mailBody = `
        <h2>
        New Inquiry Form Entry
        </h2>
        <p>
        You have received your inquiry and showed interest in Business. Below are the details you provided:
        </p>
        <p>
        Name: ${name}
        </p>
        <p
        Location: ${location}
        </p>
        <p>
        Email: ${email}
        </p>
        <p>
        Phone: ${phone}
        </p>
        <p>
        Message: ${message}
        </p>

        `;
        

        console.log('mailbody', mailBody);
        

        const mail = await resend.emails.send({
            from: 'Hello <khareu450@bajrang-enterprises.com>',
            to: ['enterprisesbajrang0@gmail.com'],
            subject: 'You have received a new inquiry!',
            html: `${mailBody}`,
            headers: {
                'X-Entity-Ref-ID': '123456789',
            },
            tags: [
                {
                    name: 'category',
                    value: 'confirm_email',
                },
            ],
        });

        console.log('mail ',mail);
        


        return NextResponse.json({
            message:"Email sent successfully",
            seccess:true,

        })


    } catch (error:any){
        return NextResponse.json({error:error.message},
            {status:500})
    }
}