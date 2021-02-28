import type { NextApiRequest, NextApiResponse } from "next";

interface personne {
  name: string;
}

export default (req: NextApiRequest, res: NextApiResponse<personne>) => {
  res.status(200).json({ name: "John Doe" });
};
