import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../libs/server/withHandler";

function test(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  res.status(200).json({ ok: true, name: "sangdons" });
}

export default withHandler("POST", test);
