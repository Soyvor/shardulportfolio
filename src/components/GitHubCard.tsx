"use client";

import Image from "next/image";
import Link from "next/link";
import { format } from 'date-fns';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface GitHubData {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  created_at: string;
  updated_at: string;
  blog: string;
  twitter_username: string | null;
  // New fields for charts and additional metrics
  total_forks?: number;
  commit_history?: { date: string; count: number }[];
}

interface GitHubCardProps {
  data: GitHubData;
}

export default function GitHubCard({ data }: GitHubCardProps) {
  return (
    <div className="bg-[#141414] p-8 rounded-lg shadow-xl flex flex-col items-center max-w-full mx-auto border border-gray-800 hover:border-red-600 transition-all duration-300 md:p-12 lg:p-16">
      <div className="flex flex-col md:flex-row items-center md:items-start w-full mb-8">
        <Image src={data.avatar_url} alt={data.name} width={160} height={160} className="rounded-full mb-6 md:mb-0 md:mr-10 border-4 border-red-600 shadow-lg transform transition-transform duration-300 hover:scale-105" />
        <div className="text-center md:text-left flex-grow">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-2 text-red-500 leading-tight break-words">{data.name || data.login}</h2>
          <p className="text-xl text-gray-300 mb-4 italic">@{data.login}</p>
          <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-4">{data.bio || 'No bio available.'}</p>
          {data.location && <p className="text-md text-gray-400 mb-2">📍 {data.location}</p>}
          {data.blog && (
            <p className="text-md text-gray-400 mb-2">
              🌐 <Link href={data.blog} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">
                {data.blog}
              </Link>
            </p>
          )}
          {data.twitter_username && (
            <p className="text-md text-gray-400 mb-2">
              🐦 <Link href={`https://twitter.com/${data.twitter_username}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">
                @{data.twitter_username}
              </Link>
            </p>
          )}
          <p className="text-sm text-gray-500 mt-4">
            Joined GitHub on {format(new Date(data.created_at), 'MMM dd, yyyy')}
            {data.updated_at && ` | Last updated on ${format(new Date(data.updated_at), 'MMM dd, yyyy')}`}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full mt-10 pt-8 border-t border-gray-700">
        <div className="flex flex-col items-center">
          <span className="text-3xl lg:text-4xl font-black text-white">{data.public_repos}</span>
          <span className="text-lg text-gray-400">Public Repos</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl lg:text-4xl font-black text-white">{data.followers}</span>
          <span className="text-lg text-gray-400">Followers</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl lg:text-4xl font-black text-white">{data.following}</span>
          <span className="text-lg text-gray-400">Following</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl lg:text-4xl font-black text-white">{data.total_forks || 'N/A'}</span>
          <span className="text-lg text-gray-400">Total Forks</span>
        </div>
      </div>

      <div className="w-full mt-8">
        <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white text-left">Commit Activity (Repos Pushed)</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data.commit_history} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} className="rounded-md bg-gray-900 p-2">
            <CartesianGrid strokeDasharray="3 3" stroke="#4A4A4A" />
            <XAxis dataKey="date" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '5px' }}
              labelStyle={{ color: '#F9FAFB' }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Line type="monotone" dataKey="count" stroke="#E53E3E" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <Link href={data.html_url} target="_blank" rel="noopener noreferrer" className="mt-10 px-12 py-4 bg-red-600 text-white text-xl font-bold rounded-full hover:bg-red-700 transition-all duration-300 flex items-center justify-center shadow-lg transform hover:scale-105">
        <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.167 6.839 9.489.5.09.682-.217.682-.483 0-.237-.008-.867-.013-1.701-2.782.604-3.37-1.341-3.37-1.341-.454-1.154-1.11-1.462-1.11-1.462-.907-.618.069-.607.069-.607 1.002.07 1.531 1.029 1.531 1.029.892 1.528 2.341 1.087 2.906.832.091-.645.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.104-.253-.447-1.27.098-2.651 0 0 .84-.27 2.75 1.025.799-.221 1.65-.331 2.5-.335.85.004 1.7.114 2.5.335 1.909-1.295 2.748-1.025 2.748-1.025.546 1.381.202 2.398.098 2.651.64.698 1.028 1.591 1.028 2.682 0 3.84-2.339 4.686-4.566 4.935.359.309.678.918.678 1.854 0 1.34-.012 2.424-.012 2.75 0 .269.18.577.688.481C21.139 20.165 24 16.417 24 12c0-5.523-4.477-10-10-10z"></path></svg>
        View Profile on GitHub
      </Link>
    </div>
  );
}