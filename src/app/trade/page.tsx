import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Star, Clock, CheckCircle, Users, Search, Filter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AquaSwap Neighborhood - AquaHub',
  description: 'Trade plants, equipment, and fish locally. Connect with nearby aquarists to reduce shipping costs and build community.',
}

export default function TradePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">AquaSwap Neighborhood</h1>
              <p className="text-gray-600">Trade plants, equipment, and fish locally with nearby aquarists</p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                8K+ Successful Swaps
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                4.8/5 Avg Rating
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Enter your zip code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="block text-sm text-gray-600 mb-1">Distance</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm">
                      <option>Within 10 miles</option>
                      <option>Within 25 miles</option>
                      <option>Within 50 miles</option>
                      <option>Within 100 miles</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <div className="space-y-2">
                    {['Fish', 'Plants', 'Equipment', 'Decorations', 'Food & Supplies'].map((category) => (
                      <label key={category} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm text-gray-600">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <div className="space-y-2">
                    {['Free', '$1 - $25', '$26 - $50', '$51 - $100', '$100+'].map((range) => (
                      <label key={range} className="flex items-center">
                        <input type="radio" name="price" className="mr-2" />
                        <span className="text-sm text-gray-600">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Listings</span>
                  <span className="font-semibold">1,200+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Swaps</span>
                  <span className="font-semibold">8,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg Response</span>
                  <span className="font-semibold">4 hours</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Create Listing */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search for fish, plants, equipment..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Create Listing
              </Button>
            </div>

            {/* Listings Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sample Listing 1 */}
              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">Neon Tetras (10x)</CardTitle>
                    <span className="text-lg font-bold text-green-600">$25</span>
                  </div>
                  <CardDescription className="flex items-center text-sm">
                    <MapPin className="w-3 h-3 mr-1" />
                    2.3 miles away
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Healthy school of neon tetras. Tank bred, eating well. Perfect for community tanks.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                        J
                      </div>
                      <span className="ml-2 text-sm text-gray-600">John D.</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 mr-1" />
                      <span className="text-xs text-gray-600">4.9</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Listing 2 */}
              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">Java Moss Bundle</CardTitle>
                    <span className="text-lg font-bold text-green-600">Free</span>
                  </div>
                  <CardDescription className="flex items-center text-sm">
                    <MapPin className="w-3 h-3 mr-1" />
                    5.7 miles away
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Fresh java moss trimmings. Great for breeding tanks and natural filtration.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                        S
                      </div>
                      <span className="ml-2 text-sm text-gray-600">Sarah M.</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 mr-1" />
                      <span className="text-xs text-gray-600">5.0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Listing 3 */}
              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">Canister Filter 406</CardTitle>
                    <span className="text-lg font-bold text-green-600">$80</span>
                  </div>
                  <CardDescription className="flex items-center text-sm">
                    <MapPin className="w-3 h-3 mr-1" />
                    8.1 miles away
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Fluval 406 canister filter. Used for 6 months, excellent condition. Includes all media.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">
                        M
                      </div>
                      <span className="ml-2 text-sm text-gray-600">Mike R.</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 mr-1" />
                      <span className="text-xs text-gray-600">4.8</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Listing 4 */}
              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">Angelfish Breeding Pair</CardTitle>
                    <span className="text-lg font-bold text-green-600">$45</span>
                  </div>
                  <CardDescription className="flex items-center text-sm">
                    <MapPin className="w-3 h-3 mr-1" />
                    12.4 miles away
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Proven breeding pair of silver angelfish. Have spawned 3 times successfully.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">
                        A
                      </div>
                      <span className="ml-2 text-sm text-gray-600">Alex K.</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 mr-1" />
                      <span className="text-xs text-gray-600">4.9</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Listing 5 */}
              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">Driftwood Collection</CardTitle>
                    <span className="text-lg font-bold text-green-600">$30</span>
                  </div>
                  <CardDescription className="flex items-center text-sm">
                    <MapPin className="w-3 h-3 mr-1" />
                    6.8 miles away
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    Assorted driftwood pieces, pre-soaked and ready for use. Various sizes included.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs">
                        L
                      </div>
                      <span className="ml-2 text-sm text-gray-600">Lisa H.</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 mr-1" />
                      <span className="text-xs text-gray-600">4.7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Listing 6 */}
              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">LED Light Fixture</CardTitle>
                    <span className="text-lg font-bold text-green-600">$65</span>
                  </div>
                  <CardDescription className="flex items-center text-sm">
                    <MapPin className="w-3 h-3 mr-1" />
                    15.2 miles away
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    36" LED light with timer and dimmer. Perfect for planted tanks. Excellent plant growth.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs">
                        R
                      </div>
                      <span className="ml-2 text-sm text-gray-600">Robert T.</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 mr-1" />
                      <span className="text-xs text-gray-600">4.9</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" className="px-8">
                Load More Listings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
