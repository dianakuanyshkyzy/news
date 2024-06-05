"use client" // Ensure this line is present at the top of the file

import { useState, useMemo } from "react"
import Link from "next/link"

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const posts = [
    {
        "id": 1,
        "date": "2024-06-04",
        "author": "Baurma",
        "title": "How to Sneak Your Phone into Class Like a Pro",
        "description": "Tired of getting caught? Here are 10 ninja-level tips to keep your phone hidden and your texts flowing during boring lectures."
    },
    {
        "id": 2,
        "date": "2024-06-03",
        "author": "Daulet Issatayev",
        "title": "10 Reasons Why Avocado Toast is the Secret to Happiness",
        "description": "You won't believe number 7! Find out why this trendy snack is more than just a food – it’s a lifestyle."
    },
    {
        "id": 3,
        "date": "2024-06-02",
        "author": "Madina ",
        "title": "Memes That Will Make Your Mom Say 'What?'",
        "description": "From Spongebob to Baby Yoda, these memes will have you laughing while leaving your parents totally confused."
    },
    {
        "id": 4,
        "date": "2024-06-01",
        "author": "Alibek Seitov",
        "title": "Why Homework is Basically DLC for School",
        "description": "Ever feel like homework is just extra content you didn’t ask for? Here’s why it’s the ultimate downloadable content for your education."
    },
    {
        "id": 5,
        "date": "2024-05-31",
        "author": "Uldana",
        "title": "The Ultimate Guide to Going Viral on TikTok",
        "description": "Want to be the next big thing? Follow these simple steps to become a TikTok sensation overnight (or at least get a few likes)."
    }
  ]

  const filteredPosts = useMemo(() => {
    const searchTermLower = searchTerm.toLowerCase()
    return posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(searchTermLower) ||
        post.author.toLowerCase().includes(searchTermLower) ||
        post.description.toLowerCase().includes(searchTermLower)
      )
    })
  }, [posts, searchTerm])

  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6">
        <div className="flex items-center gap-4">
          <input 
            type="text"  
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            placeholder="Search posts..." 
            className="w-full p-2 border rounded-lg text-black"
          />
        </div>
        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href="#"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              prefetch={false}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-gray-500 dark:text-gray-400">{post.author}</div>
                  <div className="text-gray-500 dark:text-gray-400">{post.date}</div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
