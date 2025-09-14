
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'AquaHub - Your Aquarium Hub',
  description: 'The all-in-one platform for aquarium enthusiasts. Find perfect tankmates, solve problems, and connect with your local aquarium community.',
}

export default function HomePage() {
  redirect('/auth/register')
  return null
}
