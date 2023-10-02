import db from "@/lib/db";
import Todo from "@/lib/models/Todo";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        //DB operations
        await db()
        const result = await Todo.find()
        return NextResponse.json({
            message: "Todo Fetch Successfully",
            result
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}
export const POST = async (req: NextRequest) => {
    try {
        //DB operations
        const body = await req.json()
        await db()
        const result = await Todo.create(body)
        return NextResponse.json({
            message: "Todo create Successfully",
            result
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}