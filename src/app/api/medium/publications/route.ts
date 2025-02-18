import axios from "axios";

export async function GET(req: Request) {
  if (req.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const token = process.env.MEDIUM_TOKEN;
  const apiEndpoint = process.env.UNOFFICIAL_MEDIUM_API_ENDPOINT;
  const username = "@notanordinarydev";
  if (!token || !apiEndpoint || !username) {
    return new Response("Environment variables not set", { status: 500 });
  }

  try {
    const { data: response } = await axios.get(`${apiEndpoint}/${username}`);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return new Response(
      JSON.stringify({ message: "Internal Server Error", error: errorMessage }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
