const handleRequest = (request) => {
    if (request.method ==="GET") {
        return new Response("Retrieving information, are you?");
    } else if (request.method === "POST") {
        return new Response("Posting information, are you?");
    } else if (request.method === "Alohomora") {
        return new Response("Magicking, are you?");
    }
    return new Response(message);
};

Deno.serve(handleRequest);