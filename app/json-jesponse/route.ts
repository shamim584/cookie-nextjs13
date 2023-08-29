import { NextRequest, NextResponse } from "next/server";

export async function GET() {

    const resData = {
        "message": "Welcome to our API!",
        "version": "1.0"
    }


    return NextResponse.json(resData)
}