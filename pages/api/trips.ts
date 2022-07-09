// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TripListResponse } from '../../data/trips'

const trips = require('../../data/trips.json')

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TripListResponse>
) {
  res.status(200).json(trips)
}