import axios from "axios";
import { NextResponse } from "next/server";





export async function GET(request, {params}) {

    try {

        const response = await axios.get(`https://zkbridgescan.io/api/scan?txOrAddress=${params.wallet}&pageStart=0&pageSize=1000`)
        
        if (!response) {
            return NextResponse.error();
        }

        const data = response.data
        
        return NextResponse.json(data)

    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.error();
    }
}
