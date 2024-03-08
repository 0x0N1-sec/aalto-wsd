const handleRequest = (request) => {
    console.log(request);
    return new Response("Hello world!");
  };
  
  Deno.serve(handleRequest);