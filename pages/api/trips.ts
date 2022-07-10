// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TripListResponse } from '../../data/trips/trips.model'

const trips = require('../../data/trips/trips.json')

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TripListResponse>
) {
  res.status(200).json(trips);
}
