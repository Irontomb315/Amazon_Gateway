import type{ APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export async function ping(event: APIGatewayProxyEvent): Promise <APIGatewayProxyResult> {
    console.log("Evento desde Api gateway: ", event);
    console.log("Hola desde la lambda Ping");
    console.log("Actualizar gateway")
    return {
        statusCode: 200,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            success: true,
            message: "Hola desde la lambda PING!"
        })
    }
}