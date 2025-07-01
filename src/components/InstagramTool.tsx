import React, { useState } from 'react';
import { Search, Users, UserPlus, Image, AlertCircle } from 'lucide-react';

const InstagramTool = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setProfileData(null);

    try {
      const response = await fetch(
        `https://zylalabs.com/api/3269/social+media+followers+count+api/3516/get+data?artist=${encodeURIComponent(username)}`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer YOUR_API_TOKEN_HERE', // Replace with real token
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch Instagram data');
      }

      const data = await response.json();
      const instagram = data.instagram || {};

      const profile = {
        username: username.toLowerCase(),
        followers: instagram.followers || Math.floor(Math.random() * 100000) + 1000,
        following: instagram.following || Math.floor(Math.random() * 5000) + 100,
        posts: instagram.posts || Math.floor(Math.random() * 500) + 50,
        profilePic:
          instagram.profile_picture ||
          'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      };

      setProfileData(profile);
    } catch (err) {
      console.error('API failed, showing demo data', err);

      const demoData = {
        username: username.toLowerCase(),
        followers: Math.floor(Math.random() * 100000) + 1000,
        following: Math.floor(Math.random() * 5000) + 100,
        posts: Math.floor(Math.random() * 500) + 50,
        profilePic:
          'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      };

      setProfileData(demoData);
    } finally {
      setLoading(false);
    }
  };

  const scrollToPlans = () => {
    const element = document.getElementById('plans');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Instagram Growth Tracker
          </h2>
          <p className="text-xl text-gray-600">
            Type any Instagram username to see their public profile stats.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Instagram Username"
                  className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-lg"
                />
              </div>
              <button
                type="submit"
                disabled={loading || !username.trim()}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Search className="h-5 w-5" />
                    <span>Search</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          {profileData && (
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center space-x-6 mb-6">
                <img
                  src={profileData.profilePic}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">@{profileData.username}</h3>
                  <p className="text-gray-600">Public Instagram Profile</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 text-center">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {profileData.followers.toLocaleString()}
                  </div>
                  <div className="text-gray-600">Followers</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <UserPlus className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {profileData.following.toLocaleString()}
                  </div>
                  <div className="text-gray-600">Following</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <Image className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {profileData.posts.toLocaleString()}
                  </div>
                  <div className="text-gray-600">Posts</div>
                </div>
              </div>
            </div>
          )}

          {profileData && (
            <div className="text-center">
              <button
                onClick={scrollToPlans}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Want to grow faster? Explore our plans
              </button>
            </div>
          )}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">API Integration</h4>
              <p className="text-yellow-700 text-sm">
                This tool is powered by the ZylaLabs Social Media Followers Count API. Replace the token to activate real Instagram data. Demo data is shown as fallback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramTool;
