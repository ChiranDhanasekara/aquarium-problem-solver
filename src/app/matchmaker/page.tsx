import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Fish, Star, CheckCircle, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fish Compatibility Matcher - AquaHub',
  description: 'Get perfect tankmate suggestions based on your current fish, tank parameters, and setup with AI-powered compatibility scoring.',
}

export default function MatchmakerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Fish Compatibility Matcher</h1>
              <p className="text-gray-600">Get perfect tankmate suggestions with AI-powered compatibility scoring</p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                50K+ Matches Made
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                4.9/5 Success Rate
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Tank Setup */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Fish className="w-5 h-5 mr-2 text-blue-600" />
                  Your Current Tank Setup
                </CardTitle>
                <CardDescription>
                  Tell us about your current fish and tank parameters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tank Size (Gallons)</label>
                    <input 
                      type="number" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 55"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Water Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Freshwater</option>
                      <option>Saltwater</option>
                      <option>Brackish</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">pH Level</label>
                    <input 
                      type="number" 
                      step="0.1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 7.2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Temperature (°F)</label>
                    <input 
                      type="number" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 78"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Fish</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="List your current fish species (e.g., 2 Angelfish, 6 Neon Tetras, 1 Pleco)"
                  />
                </div>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                  Find Compatible Fish
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle>Compatibility Results</CardTitle>
                <CardDescription>
                  AI-powered recommendations based on your tank setup
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-gray-500 py-8">
                  <Fish className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Enter your tank details above to get personalized fish recommendations</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Species</span>
                  <span className="font-semibold">2,500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Matches Made</span>
                  <span className="font-semibold">50,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-semibold text-green-600">94%</span>
                </div>
              </CardContent>
            </Card>

            {/* Popular Combinations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular This Week</CardTitle>
                <CardDescription>
                  Most requested compatibility checks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Betta + Neon Tetras</span>
                  <span className="text-xs text-green-600">92% Compatible</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Angelfish + Corydoras</span>
                  <span className="text-xs text-green-600">88% Compatible</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Guppies + Mollies</span>
                  <span className="text-xs text-green-600">95% Compatible</span>
                </div>
              </CardContent>
            </Card>

            {/* Community */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Users className="w-4 h-4 mr-2" />
                  Community Help
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Get personalized advice from experienced aquarists in our community forum.
                </p>
                <Button variant="outline" className="w-full">
                  Ask the Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
