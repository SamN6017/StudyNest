// pages/index.js

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      <Head>
        <title>Student Study App</title>
        <meta name="description" content="Simplify your study process with AI-generated summaries, flashcards, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">StudyNest</h1>
          <nav>
            <a href="#features" className="text-gray-700 px-4 hover:text-blue-600">Features</a>
            <a href="#contact" className="text-gray-700 px-4 hover:text-blue-600">Contact</a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <section className="bg-blue-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-blue-800">Simplify Your Study Process</h2>
            <p className="text-lg text-gray-700 mt-4">
              Upload your study materials, generate summaries, flashcards, and practice questions instantly with AI.
            </p>
            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-blue-800">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-blue-600">AI Summaries</h4>
                <p className="text-gray-600 mt-2">Summarize lengthy PDFs into concise, easy-to-digest points.</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-blue-600">Flashcards</h4>
                <p className="text-gray-600 mt-2">Generate flashcards to help you memorize key concepts.</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-blue-600">Practice Questions</h4>
                <p className="text-gray-600 mt-2">Test yourself with multiple-choice and short-answer questions.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-gray-300">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 StudyEase. All rights reserved.</p>
          <p>
            <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> |
            <a href="#" className="text-blue-400 hover:underline"> Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
