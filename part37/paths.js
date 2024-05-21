const handleRequest = (request) => {
    const url = new URL(request.url);
    return new Response(url.pathname);
};

Deno.serve(handleRequest);