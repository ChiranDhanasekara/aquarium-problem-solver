import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Fish, Users, TrendingUp, Heart, MessageSquare, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AquaHub - Your Aquarium Hub',
  description: 'The all-in-one platform for aquarium enthusiasts. Find perfect tankmates, solve problems, and connect with your local aquarium community.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-teal-500 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to <span className="text-blue-100">AquaHub</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            The all-in-one platform for aquarium enthusiasts. Find perfect tankmates, 
            solve problems, and connect with your local aquarium community.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25K+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Fish className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
              <div className="text-gray-600">Fish Species</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">94%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15K+</div>
              <div className="text-gray-600">Happy Tanks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Fish Compatibility Matcher */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Fish className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Fish Compatibility Matcher</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  50K+ Matches Made
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Get perfect tankmate suggestions based on your current fish, tank parameters, and 
                  setup with AI-powered compatibility scoring.
                </p>
                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white">
                  Explore Feature
                </Button>
              </CardContent>
            </Card>

            {/* Anonymous Problem Solver */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Anonymous Problem Solver</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  12K+ Problems Solved
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Get expert help for sick fish and tank issues. 
                  Upload photos anonymously and receive community-driven solutions.
                </p>
                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white">
                  Explore Feature
                </Button>
              </CardContent>
            </Card>

            {/* AquaSwap Neighborhood */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">AquaSwap Neighborhood</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  8K+ Successful Swaps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Trade plants, equipment, and fish locally. 
                  Connect with nearby aquarists to reduce shipping costs and build community.
                </p>
                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white">
                  Explore Feature
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Community CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Join Our Thriving Community</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Connect with passionate aquarists worldwide. Share experiences, get advice, 
              and help others in their aquarium journey.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Join the Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
