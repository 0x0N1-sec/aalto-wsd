const handleRequest = (request) => {
    const url = new URL(request.url);
    return `You requested the path ${path}`;
  };
  
  Deno.serve(handleRequest);
  