import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageSquare, Upload, Clock, CheckCircle, Users, Camera } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Anonymous Problem Solver - AquaHub',
  description: 'Get expert help for sick fish and tank issues. Upload photos anonymously and receive community-driven solutions.',
}

export default function DiagnosePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Anonymous Problem Solver</h1>
              <p className="text-gray-600">Get expert help for sick fish and tank issues</p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                12K+ Problems Solved
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-blue-500 mr-1" />
                Avg. 2hr Response
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Submit Problem */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-green-600" />
                  Describe Your Problem
                </CardTitle>
                <CardDescription>
                  Share details about your fish or tank issue. All submissions are anonymous.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Problem Category</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Fish Health/Disease</option>
                    <option>Water Quality Issues</option>
                    <option>Behavior Problems</option>
                    <option>Tank/Equipment Issues</option>
                    <option>Plant Problems</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tank Details</label>
                  <div className="grid md:grid-cols-3 gap-3">
                    <input 
                      type="text" 
                      placeholder="Tank size (e.g., 20g)"
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input 
                      type="text" 
                      placeholder="Water type"
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input 
                      type="text" 
                      placeholder="pH level"
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Problem Description</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows={5}
                    placeholder="Describe the issue in detail. Include symptoms, when it started, what you've tried, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photos (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                    <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Drop photos here or click to upload</p>
                    <p className="text-xs text-gray-500">JPG, PNG up to 10MB each</p>
                    <Button variant="outline" className="mt-2">
                      <Upload className="w-4 h-4 mr-2" />
                      Choose Files
                    </Button>
                  </div>
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="anonymous" className="mr-2" />
                  <label htmlFor="anonymous" className="text-sm text-gray-600">
                    Keep my submission completely anonymous (recommended)
                  </label>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Submit Problem for Community Help
                </Button>
              </CardContent>
            </Card>

            {/* Recent Solutions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Community Solutions</CardTitle>
                <CardDescription>
                  See how others solved similar problems
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900">White spots on goldfish fins</h4>
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">Solved</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Small white spots appeared on my goldfish's fins. Tank parameters normal...
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>5 expert responses</span>
                    <span>2 hours ago</span>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Cloudy water after water change</h4>
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">Solved</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Water became very cloudy after 50% water change in my 75g tank...
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>8 expert responses</span>
                    <span>1 day ago</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  View All Recent Solutions
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Response Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Response Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg Response Time</span>
                  <span className="font-semibold">2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Problems Solved</span>
                  <span className="font-semibold">12,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-semibold text-green-600">96%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Experts</span>
                  <span className="font-semibold">1,200+</span>
                </div>
              </CardContent>
            </Card>

            {/* Expert Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Users className="w-4 h-4 mr-2" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    AE
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">AquaExpert</div>
                    <div className="text-xs text-gray-500">450+ solutions</div>
                  </div>
                  <div className="text-xs text-yellow-500">⭐ 4.9</div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    FM
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">FishMaster</div>
                    <div className="text-xs text-gray-500">380+ solutions</div>
                  </div>
                  <div className="text-xs text-yellow-500">⭐ 4.8</div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    TG
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">TankGuru</div>
                    <div className="text-xs text-gray-500">290+ solutions</div>
                  </div>
                  <div className="text-xs text-yellow-500">⭐ 4.9</div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Help */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-lg text-red-700">Emergency?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-600 mb-4">
                  If your fish is in immediate danger, consider contacting a local aquatic veterinarian.
                </p>
                <Button variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-100">
                  Find Local Vet
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
