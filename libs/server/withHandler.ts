import { NextApiRequest, NextApiResponse } from "next";

export default function withHandler(
  method: "POST" | "GET" | "DELETE",
  handler: (req: NextApiRequest, res: NextApiResponse) => void
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== method) {
      return res.status(405).end();
    }
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).end;
    }
  };
}
